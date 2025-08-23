/**
 * Database Utilities
 * Common database helpers and patterns
 */

import {
  Kysely,
  Migration,
  MigrationProvider,
  Migrator as KyselyMigrator,
  SelectQueryBuilder,
  sql,
} from 'kysely'
import { Pool, PoolConfig } from 'pg'
import { InvalidRequestError } from './errors'

/**
 * Enhanced Migrator with error handling
 */
export class Migrator<T> extends KyselyMigrator {
  constructor(
    public db: Kysely<T>,
    migrations: Record<string, Migration>,
  ) {
    super({
      db,
      provider: {
        async getMigrations() {
          return migrations
        },
      },
    })
  }

  async migrateToOrThrow(migration: string) {
    const { error, results } = await this.migrateTo(migration)
    if (error) {
      throw error
    }
    if (!results) {
      throw new Error('An unknown failure occurred while migrating')
    }
    return results
  }

  async migrateToLatestOrThrow() {
    const { error, results } = await this.migrateToLatest()
    if (error) {
      throw error
    }
    if (!results) {
      throw new Error('An unknown failure occurred while migrating')
    }
    return results
  }

  async migrateDownOrThrow() {
    const { error, results } = await this.migrateDown()
    if (error) {
      throw error
    }
    if (!results) {
      throw new Error('An unknown failure occurred while migrating')
    }
    return results
  }
}

/**
 * Database connection configuration
 */
export interface DbConfig {
  url?: string
  host?: string
  port?: number
  database?: string
  username?: string
  password?: string
  poolSize?: number
  poolMaxUses?: number
  poolIdleTimeoutMs?: number
  schema?: string
  ssl?: boolean
}

/**
 * Create a PostgreSQL pool from configuration
 */
export function createPgPool(config: DbConfig): Pool {
  let poolConfig: PoolConfig

  if (config.url) {
    poolConfig = {
      connectionString: config.url,
      max: config.poolSize || 10,
      idleTimeoutMillis: config.poolIdleTimeoutMs || 10000,
      ssl: config.ssl ? { rejectUnauthorized: false } : undefined,
    }
  } else {
    poolConfig = {
      host: config.host || 'localhost',
      port: config.port || 5432,
      database: config.database || 'postgres',
      user: config.username,
      password: config.password,
      max: config.poolSize || 10,
      idleTimeoutMillis: config.poolIdleTimeoutMs || 10000,
      ssl: config.ssl ? { rejectUnauthorized: false } : undefined,
    }
  }

  return new Pool(poolConfig)
}

/**
 * Pagination parameters
 */
export interface PaginationParams {
  limit?: number
  cursor?: string
  direction?: 'asc' | 'desc'
}

/**
 * Pagination result
 */
export interface PaginatedResult<T> {
  items: T[]
  cursor?: string
  hasMore?: boolean
}

/**
 * Cursor interface
 */
export interface Cursor {
  primary: string | number
  secondary?: string | number
}

/**
 * Parse a cursor string
 */
export function parseCursor(cursor?: string): Cursor | undefined {
  if (!cursor) return undefined
  
  try {
    const decoded = Buffer.from(cursor, 'base64').toString('utf-8')
    return JSON.parse(decoded)
  } catch {
    throw new InvalidRequestError('Invalid cursor')
  }
}

/**
 * Create a cursor string
 */
export function createCursor(cursor: Cursor): string {
  return Buffer.from(JSON.stringify(cursor)).toString('base64')
}

/**
 * Apply pagination to a query
 */
export function paginate<DB, TB extends keyof DB, O>(
  query: SelectQueryBuilder<DB, TB, O>,
  params: PaginationParams,
  options: {
    primaryKey: string
    secondaryKey?: string
    defaultLimit?: number
    maxLimit?: number
  }
): SelectQueryBuilder<DB, TB, O> {
  const limit = Math.min(
    params.limit || options.defaultLimit || 50,
    options.maxLimit || 100
  )

  let paginatedQuery = query.limit(limit + 1) // +1 to check if there's more

  if (params.cursor) {
    const cursor = parseCursor(params.cursor)
    if (cursor) {
      const direction = params.direction || 'desc'
      const op = direction === 'desc' ? '<' : '>'
      
      if (options.secondaryKey && cursor.secondary !== undefined) {
        // Composite cursor (primary, secondary)
        paginatedQuery = paginatedQuery.where((eb) =>
          eb.or([
            eb(options.primaryKey as any, op, cursor.primary),
            eb.and([
              eb(options.primaryKey as any, '=', cursor.primary),
              eb(options.secondaryKey as any, op, cursor.secondary),
            ]),
          ])
        )
      } else {
        // Simple cursor
        paginatedQuery = paginatedQuery.where(
          options.primaryKey as any,
          op,
          cursor.primary
        )
      }
    }
  }

  return paginatedQuery
}

/**
 * Process paginated results
 */
export function processPaginatedResults<T extends Record<string, any>>(
  results: T[],
  params: PaginationParams,
  options: {
    primaryKey: keyof T
    secondaryKey?: keyof T
    limit?: number
  }
): PaginatedResult<T> {
  const limit = params.limit || options.limit || 50
  const hasMore = results.length > limit
  const items = hasMore ? results.slice(0, limit) : results

  let cursor: string | undefined
  if (hasMore && items.length > 0) {
    const lastItem = items[items.length - 1]
    const cursorData: Cursor = {
      primary: lastItem[options.primaryKey] as string | number,
    }
    if (options.secondaryKey) {
      cursorData.secondary = lastItem[options.secondaryKey] as string | number
    }
    cursor = createCursor(cursorData)
  }

  return {
    items,
    cursor,
    hasMore,
  }
}

/**
 * Database transaction helper with automatic rollback on error
 */
export async function withTransaction<DB, T>(
  db: Kysely<DB>,
  callback: (trx: Kysely<DB>) => Promise<T>
): Promise<T> {
  return await db.transaction().execute(async (trx) => {
    try {
      return await callback(trx)
    } catch (error) {
      // Transaction will be automatically rolled back
      throw error
    }
  })
}

/**
 * Retry a database operation with exponential backoff
 */
export async function withRetry<T>(
  fn: () => Promise<T>,
  options: {
    maxAttempts?: number
    initialDelay?: number
    maxDelay?: number
    factor?: number
    onError?: (error: Error, attempt: number) => void
  } = {}
): Promise<T> {
  const {
    maxAttempts = 3,
    initialDelay = 100,
    maxDelay = 5000,
    factor = 2,
    onError,
  } = options

  let lastError: Error
  let delay = initialDelay

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn()
    } catch (error) {
      lastError = error as Error
      
      if (onError) {
        onError(lastError, attempt)
      }

      if (attempt < maxAttempts) {
        // Check if error is retryable
        const isRetryable = 
          error instanceof Error && (
            error.message.includes('deadlock') ||
            error.message.includes('SQLITE_BUSY') ||
            error.message.includes('connection') ||
            error.message.includes('timeout')
          )

        if (isRetryable) {
          await new Promise(resolve => setTimeout(resolve, delay))
          delay = Math.min(delay * factor, maxDelay)
        } else {
          throw error
        }
      }
    }
  }

  throw lastError!
}

/**
 * Database health check
 */
export async function checkDbHealth(db: Kysely<any>): Promise<boolean> {
  try {
    await sql`SELECT 1`.execute(db)
    return true
  } catch {
    return false
  }
}

/**
 * Get table row count
 */
export async function getTableCount(
  db: Kysely<any>,
  tableName: string
): Promise<number> {
  const result = await db
    .selectFrom(tableName as any)
    .select(db.fn.count('*').as('count'))
    .executeTakeFirst()

  return Number(result?.count || 0)
}

/**
 * Batch insert helper
 */
export async function batchInsert<DB, TB extends keyof DB>(
  db: Kysely<DB>,
  table: TB,
  values: Array<DB[TB]>,
  batchSize = 1000
): Promise<void> {
  for (let i = 0; i < values.length; i += batchSize) {
    const batch = values.slice(i, i + batchSize)
    await db.insertInto(table).values(batch as any).execute()
  }
}

/**
 * Safe JSON column value extraction
 */
export function jsonColumn<T>(column: unknown): T | null {
  if (column === null || column === undefined) {
    return null
  }
  
  if (typeof column === 'string') {
    try {
      return JSON.parse(column)
    } catch {
      return null
    }
  }
  
  return column as T
}

/**
 * Create a database timestamp (UTC)
 */
export function dbTimestamp(date?: Date): string {
  return (date || new Date()).toISOString()
}

/**
 * Parse a database timestamp
 */
export function parseDbTimestamp(timestamp: string | Date): Date {
  return timestamp instanceof Date ? timestamp : new Date(timestamp)
}

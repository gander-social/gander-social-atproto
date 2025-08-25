/**
 * Configuration Utilities
 * Common configuration helpers and parsers
 */

import { z } from '../dependencies'

/**
 * Parse environment variable as string
 */
export function parseString(value: string | undefined, defaultValue: string): string
export function parseString(value: string | undefined): string | undefined
export function parseString(
  value: string | undefined,
  defaultValue?: string
): string | undefined {
  if (value === undefined || value === '') {
    return defaultValue
  }
  return value
}

/**
 * Parse environment variable as number
 */
export function parseNumber(value: string | undefined, defaultValue: number): number
export function parseNumber(value: string | undefined): number | undefined
export function parseNumber(
  value: string | undefined,
  defaultValue?: number
): number | undefined {
  if (value === undefined || value === '') {
    return defaultValue
  }
  const parsed = Number(value)
  if (isNaN(parsed)) {
    throw new Error(`Invalid number: ${value}`)
  }
  return parsed
}

/**
 * Parse environment variable as boolean
 */
export function parseBoolean(value: string | undefined, defaultValue: boolean): boolean
export function parseBoolean(value: string | undefined): boolean | undefined
export function parseBoolean(
  value: string | undefined,
  defaultValue?: boolean
): boolean | undefined {
  if (value === undefined || value === '') {
    return defaultValue
  }
  return value === 'true' || value === '1' || value === 'yes'
}

/**
 * Parse environment variable as list
 */
export function parseList(
  value: string | undefined,
  separator = ','
): string[] | undefined {
  if (value === undefined || value === '') {
    return undefined
  }
  return value.split(separator).map((item) => item.trim()).filter(Boolean)
}

/**
 * Parse environment variable as JSON
 */
export function parseJson<T = any>(value: string | undefined): T | undefined {
  if (value === undefined || value === '') {
    return undefined
  }
  try {
    return JSON.parse(value)
  } catch (error) {
    throw new Error(`Invalid JSON: ${value}`)
  }
}

/**
 * Parse environment variable as URL
 */
export function parseUrl(value: string | undefined): URL | undefined {
  if (value === undefined || value === '') {
    return undefined
  }
  try {
    return new URL(value)
  } catch (error) {
    throw new Error(`Invalid URL: ${value}`)
  }
}

/**
 * Get required environment variable
 */
export function getRequired(name: string): string {
  const value = process.env[name]
  if (value === undefined || value === '') {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value
}

/**
 * Get optional environment variable with default
 */
export function getOptional(name: string, defaultValue?: string): string | undefined {
  return process.env[name] || defaultValue
}

/**
 * Build database URL from components
 */
export interface DatabaseUrlOptions {
  host: string
  port?: number
  database: string
  username?: string
  password?: string
  ssl?: boolean
}

export function buildDatabaseUrl(options: DatabaseUrlOptions): string {
  const { host, port = 5432, database, username, password, ssl = false } = options
  
  let url = 'postgresql://'
  
  if (username) {
    url += username
    if (password) {
      url += `:${encodeURIComponent(password)}`
    }
    url += '@'
  }
  
  url += `${host}:${port}/${database}`
  
  if (ssl) {
    url += '?sslmode=require'
  }
  
  return url
}

/**
 * Build Redis URL from components
 */
export interface RedisUrlOptions {
  host: string
  port?: number
  password?: string
  db?: number
}

export function buildRedisUrl(options: RedisUrlOptions): string {
  const { host, port = 6379, password, db = 0 } = options
  
  let url = 'redis://'
  
  if (password) {
    url += `:${encodeURIComponent(password)}@`
  }
  
  url += `${host}:${port}/${db}`
  
  return url
}

/**
 * Load configuration from environment with validation
 */
export function loadConfig<T>(schema: z.ZodSchema<T>): T {
  try {
    return schema.parse(process.env)
  } catch (error) {
    if (error instanceof z.ZodError) {
      const issues = error.errors.map(
        (e) => `  - ${e.path.join('.')}: ${e.message}`
      ).join('\n')
      throw new Error(`Configuration validation failed:\n${issues}`)
    }
    throw error
  }
}

/**
 * Common configuration schemas
 */
export const ConfigSchemas = {
  port: z.string().transform((val) => parseInt(val, 10)).pipe(z.number().min(1).max(65535)),
  hostname: z.string().optional(),
  nodeEnv: z.enum(['development', 'test', 'production']).default('development'),
  logLevel: z.enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace']).default('info'),
  databaseUrl: z.string().url().or(z.string().regex(/^postgresql:\/\/.+/)),
  redisUrl: z.string().url().or(z.string().regex(/^redis:\/\/.+/)),
  publicUrl: z.string().url(),
  did: z.string().regex(/^did:[a-z]+:.+/),
  jwtSecret: z.string().min(32),
  boolean: z.enum(['true', 'false', '1', '0']).transform((val) => val === 'true' || val === '1'),
}

/**
 * Merge configurations with precedence
 */
export function mergeConfig<T extends Record<string, any>>(
  ...configs: Partial<T>[]
): T {
  return configs.reduce((merged, config) => {
    return { ...merged, ...config }
  }, {} as T)
}

/**
 * Environment-specific configuration loader
 */
export function loadEnvConfig<T extends Record<string, any>>(
  base: T,
  envConfigs: Record<string, Partial<T>>
): T {
  const env = process.env.NODE_ENV || 'development'
  const envConfig = envConfigs[env] || {}
  return mergeConfig(base, envConfig)
}

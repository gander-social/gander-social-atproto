/**
 * External NPM Dependencies
 * Re-exports commonly used external packages to centralize dependency management
 */

// Express and middleware
export { default as express } from 'express'
export type { 
  Application as ExpressApplication,
  Request,
  Response,
  NextFunction,
  Request as ExpressRequest,
  Response as ExpressResponse,
  NextFunction as ExpressNextFunction,
  RequestHandler as ExpressRequestHandler,
  ErrorRequestHandler as ExpressErrorRequestHandler
} from 'express'

export { default as compression } from 'compression'
export { default as cors } from 'cors'
export type { CorsOptions } from 'cors'

// HTTP utilities
export { HttpTerminator, createHttpTerminator } from 'http-terminator'

// Database
export { default as pg, Pool } from 'pg'
export type { Pool as PgPool, PoolConfig } from 'pg'
export { Kysely, Migrator as KyselyMigrator, sql } from 'kysely'
export type { 
  Database as KyselyDatabase,
  Migration,
  MigrationProvider,
  Migrator,
  SelectQueryBuilder,
  InsertQueryBuilder,
  UpdateQueryBuilder,
  DeleteQueryBuilder
} from 'kysely'

// Redis
export { default as Redis } from 'ioredis'
export type { Redis as RedisClient, RedisOptions } from 'ioredis'

// Logging
export { default as pino } from 'pino'
export { default as pinoHttp } from 'pino-http'
export type { Logger, Logger as PinoLogger, LoggerOptions as PinoLoggerOptions } from 'pino'

// Crypto and encoding
export { importJWK, exportJWK, SignJWT, jwtVerify } from 'jose'
export type { JWK, JWTPayload } from 'jose'
export { CID } from 'multiformats'
export { toString as uint8ToString, fromString as uint8FromString } from 'uint8arrays'

// Queue
export { default as PQueue } from 'p-queue'
export type { Options as PQueueOptions } from 'p-queue'

// HTTP client
export { fetch, Request, Response, Headers } from 'undici'

// Validation
export { z } from 'zod'
export type { ZodSchema, ZodType, ZodError } from 'zod'

// Events
export { default as TypedEmitter } from 'typed-emitter'

// Structured headers
export { parseDict, parseDictionary, serializeDict } from 'structured-headers'

// DID
export * as didPlc from '@did-plc/lib'

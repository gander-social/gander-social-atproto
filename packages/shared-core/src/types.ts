/**
 * Shared TypeScript Types
 * Common type definitions used across multiple packages
 */

import type { Request, Response, NextFunction } from 'express'
import type { Logger } from 'pino'

/**
 * Common Express middleware type
 */
export type Middleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => void | Promise<void>

/**
 * Common error handler middleware type
 */
export type ErrorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => void | Promise<void>

/**
 * Common async handler wrapper type
 */
export type AsyncHandler<T = any> = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<T>

/**
 * Standard server configuration interface
 */
export interface ServerConfig {
  port: number
  hostname?: string
  publicUrl?: string
  did?: string
  version?: string
}

/**
 * Standard database configuration
 */
export interface DatabaseConfig {
  url: string
  poolSize?: number
  poolMaxUses?: number
  poolIdleTimeoutMs?: number
  schema?: string
}

/**
 * Standard Redis configuration
 */
export interface RedisConfig {
  host?: string
  port?: number
  password?: string
  db?: number
  sentinel?: {
    name: string
    hosts: Array<{ host: string; port: number }>
  }
}

/**
 * Common context interface for services
 */
export interface ServiceContext {
  logger: Logger
  config: Record<string, any>
  secrets?: Record<string, any>
}

/**
 * Common pagination parameters
 */
export interface PaginationParams {
  limit?: number
  cursor?: string
}

/**
 * Common pagination response
 */
export interface PaginatedResponse<T> {
  data: T[]
  cursor?: string
  hasMore?: boolean
}

/**
 * Common error response
 */
export interface ErrorResponse {
  error: string
  message: string
  details?: any
}

/**
 * Common success response
 */
export interface SuccessResponse<T = any> {
  success: boolean
  data?: T
  message?: string
}

/**
 * Common health check response
 */
export interface HealthCheckResponse {
  status: 'ok' | 'degraded' | 'error'
  version?: string
  uptime?: number
  checks?: Record<string, {
    status: 'ok' | 'error'
    message?: string
  }>
}

/**
 * Common JWT payload
 */
export interface JWTPayload {
  sub: string
  aud?: string | string[]
  iss?: string
  exp?: number
  iat?: number
  jti?: string
  [key: string]: any
}

/**
 * Common DID document types
 */
export interface DidDocument {
  id: string
  alsoKnownAs?: string[]
  verificationMethod?: VerificationMethod[]
  service?: Service[]
}

export interface VerificationMethod {
  id: string
  type: string
  controller: string
  publicKeyMultibase?: string
  publicKeyJwk?: any
}

export interface Service {
  id: string
  type: string
  serviceEndpoint: string | Record<string, any>
}

/**
 * Utility type for making all properties optional recursively
 */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

/**
 * Utility type for extracting promise type
 */
export type UnwrapPromise<T> = T extends Promise<infer U> ? U : T

/**
 * Utility type for nullable values
 */
export type Nullable<T> = T | null | undefined

/**
 * Utility type for required keys
 */
export type RequireKeys<T, K extends keyof T> = T & Required<Pick<T, K>>

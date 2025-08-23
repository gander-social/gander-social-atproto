/**
 * @gander-social-atproto/shared-core
 * 
 * Central package for shared dependencies and utilities across the
 * gander-social-atproto monorepo. This package consolidates commonly
 * used external dependencies and internal packages to reduce duplication
 * and simplify dependency management.
 */

// Re-export all external dependencies
export * from './dependencies'

// Re-export all internal packages
export * from './internal'

// Export shared types
export * from './types'

// Export shared constants
export * from './constants'

// Export high-priority utilities
export * from './errors'
export * from './database'
export * from './cache'
export * from './auth'

// Export utility modules
export * from './utils/server'
export * from './utils/middleware'
export * from './utils/config'

// Convenience exports for commonly used items
export {
  // Express and middleware
  express,
  compression,
  cors,
  type ExpressApplication,
  type ExpressRequest,
  type ExpressResponse,
  type ExpressNextFunction,
  
  // HTTP utilities
  HttpTerminator,
  createHttpTerminator,
  
  // Database
  Kysely,
  pg,
  
  // Redis
  Redis,
  
  // Logging
  pino,
  pinoHttp,
  
  // Validation
  z,
  
  // Common time constants
  DAY,
  HOUR,
  MINUTE,
  SECOND,
  
  // Common AT Protocol types
  AtUri,
  NSID,
  Keypair,
  IdResolver,
  
  // XRPC
  XrpcClient,
  XrpcServer,
} from './dependencies'

// Version info
export const SHARED_CORE_VERSION = '0.1.0'

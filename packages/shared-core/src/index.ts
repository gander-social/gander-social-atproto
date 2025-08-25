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

// Convenience re-exports are already handled by export * from './dependencies'
// and export * from './internal' above

// Version info
export const SHARED_CORE_VERSION = '0.1.0'

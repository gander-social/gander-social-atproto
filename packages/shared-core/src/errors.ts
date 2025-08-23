/**
 * Common Error Classes
 * Standardized error types used across all packages
 */

/**
 * Base error class for XRPC errors
 */
export class XRPCError extends Error {
  public status: number
  public errorCode: string
  
  constructor(status: number, errorCode: string, message: string, cause?: Error) {
    super(message)
    this.name = 'XRPCError'
    this.status = status
    this.errorCode = errorCode
    this.cause = cause
    Error.captureStackTrace(this, this.constructor)
  }

  toJSON() {
    return {
      error: this.errorCode,
      message: this.message,
    }
  }
}

/**
 * Authentication error
 */
export class AuthError extends XRPCError {
  constructor(message = 'Authentication required', errorCode = 'AuthenticationRequired') {
    super(401, errorCode, message)
    this.name = 'AuthError'
  }
}

/**
 * Authorization/Forbidden error
 */
export class ForbiddenError extends XRPCError {
  constructor(message = 'Forbidden', errorCode = 'Forbidden') {
    super(403, errorCode, message)
    this.name = 'ForbiddenError'
  }
}

/**
 * Not found error
 */
export class NotFoundError extends XRPCError {
  constructor(message = 'Not found', errorCode = 'NotFound') {
    super(404, errorCode, message)
    this.name = 'NotFoundError'
  }
}

/**
 * Invalid request error
 */
export class InvalidRequestError extends XRPCError {
  constructor(message = 'Invalid request', errorCode = 'InvalidRequest') {
    super(400, errorCode, message)
    this.name = 'InvalidRequestError'
  }
}

/**
 * Validation error with details
 */
export class ValidationError extends InvalidRequestError {
  public errors: Array<{ field: string; message: string }>

  constructor(errors: Array<{ field: string; message: string }>) {
    const message = errors.map(e => `${e.field}: ${e.message}`).join(', ')
    super(message, 'ValidationError')
    this.name = 'ValidationError'
    this.errors = errors
  }

  toJSON() {
    return {
      error: this.errorCode,
      message: this.message,
      errors: this.errors,
    }
  }
}

/**
 * Rate limit error
 */
export class RateLimitError extends XRPCError {
  public retryAfter?: number

  constructor(message = 'Rate limit exceeded', retryAfter?: number) {
    super(429, 'RateLimitExceeded', message)
    this.name = 'RateLimitError'
    this.retryAfter = retryAfter
  }
}

/**
 * Internal server error
 */
export class InternalServerError extends XRPCError {
  constructor(message = 'Internal server error', cause?: Error) {
    super(500, 'InternalServerError', message, cause)
    this.name = 'InternalServerError'
  }
}

/**
 * Service unavailable error
 */
export class ServiceUnavailableError extends XRPCError {
  constructor(message = 'Service unavailable') {
    super(503, 'ServiceUnavailable', message)
    this.name = 'ServiceUnavailableError'
  }
}

/**
 * Upstream error from another service
 */
export class UpstreamError extends XRPCError {
  constructor(message = 'Upstream service error', status = 502) {
    super(status, 'UpstreamError', message)
    this.name = 'UpstreamError'
  }
}

/**
 * Account-related errors
 */
export class AccountNotFoundError extends NotFoundError {
  constructor(message = 'Account not found') {
    super(message, 'AccountNotFound')
    this.name = 'AccountNotFoundError'
  }
}

export class AccountDeactivatedError extends ForbiddenError {
  constructor(message = 'Account is deactivated') {
    super(message, 'AccountDeactivated')
    this.name = 'AccountDeactivatedError'
  }
}

export class AccountSuspendedError extends ForbiddenError {
  constructor(message = 'Account is suspended') {
    super(message, 'AccountSuspended')
    this.name = 'AccountSuspendedError'
  }
}

export class AccountTakedownError extends ForbiddenError {
  constructor(message = 'Account has been taken down') {
    super(message, 'AccountTakedown')
    this.name = 'AccountTakedownError'
  }
}

/**
 * Token/Session errors
 */
export class InvalidTokenError extends AuthError {
  constructor(message = 'Invalid token') {
    super(message, 'InvalidToken')
    this.name = 'InvalidTokenError'
  }
}

export class ExpiredTokenError extends AuthError {
  constructor(message = 'Token expired') {
    super(message, 'ExpiredToken')
    this.name = 'ExpiredTokenError'
  }
}

/**
 * Error handling utilities
 */

/**
 * Create a standardized error response
 */
export function createErrorResponse(error: Error): {
  error: string
  message: string
  status?: number
} {
  if (error instanceof XRPCError) {
    return {
      error: error.errorCode,
      message: error.message,
      status: error.status,
    }
  }
  
  return {
    error: 'InternalServerError',
    message: error.message || 'An unexpected error occurred',
    status: 500,
  }
}

/**
 * Check if an error is retryable
 */
export function isRetryableError(error: Error): boolean {
  if (error instanceof XRPCError) {
    // 5xx errors are generally retryable (except 501 Not Implemented)
    if (error.status >= 500 && error.status !== 501) {
      return true
    }
    // Rate limit errors are retryable after a delay
    if (error.status === 429) {
      return true
    }
    // Request timeout
    if (error.status === 408) {
      return true
    }
  }
  
  // Network errors are often retryable
  if (error.message?.includes('ECONNREFUSED') || 
      error.message?.includes('ETIMEDOUT') ||
      error.message?.includes('ENOTFOUND')) {
    return true
  }
  
  return false
}

/**
 * Convert an error to an HTTP status code
 */
export function errorToStatus(error: Error): number {
  if (error instanceof XRPCError) {
    return error.status
  }
  
  // Map common error types to status codes
  if (error.name === 'ValidationError') return 400
  if (error.name === 'UnauthorizedError') return 401
  if (error.name === 'ForbiddenError') return 403
  if (error.name === 'NotFoundError') return 404
  if (error.name === 'ConflictError') return 409
  
  return 500
}

/**
 * Safely get error message
 */
export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message
  }
  if (typeof error === 'string') {
    return error
  }
  return 'An unexpected error occurred'
}

/**
 * Type guard for XRPC errors
 */
export function isXRPCError(error: unknown): error is XRPCError {
  return error instanceof XRPCError
}

/**
 * Assert a condition and throw an error if false
 */
export function assert(condition: boolean, error: Error | string): asserts condition {
  if (!condition) {
    throw typeof error === 'string' ? new InvalidRequestError(error) : error
  }
}

/**
 * Assert that a value is not null or undefined
 */
export function assertDefined<T>(
  value: T | null | undefined,
  name: string
): asserts value is T {
  if (value === null || value === undefined) {
    throw new InvalidRequestError(`${name} is required`)
  }
}

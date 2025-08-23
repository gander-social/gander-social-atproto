/**
 * Middleware Utilities
 * Common middleware patterns for AT Protocol services
 */

import type { Request, Response, NextFunction } from 'express'
import type { Logger } from 'pino'
import { z } from 'zod'

/**
 * Rate limiting middleware options
 */
export interface RateLimitOptions {
  windowMs?: number
  max?: number
  message?: string
  keyGenerator?: (req: Request) => string
}

/**
 * Simple in-memory rate limiter
 * For production, use a Redis-based solution
 */
export function createRateLimiter(options: RateLimitOptions = {}) {
  const {
    windowMs = 5 * 60 * 1000, // 5 minutes
    max = 100,
    message = 'Too many requests',
    keyGenerator = (req) => req.ip || 'unknown',
  } = options

  const requests = new Map<string, { count: number; resetTime: number }>()

  return (req: Request, res: Response, next: NextFunction) => {
    const key = keyGenerator(req)
    const now = Date.now()
    const record = requests.get(key)

    if (!record || now > record.resetTime) {
      requests.set(key, {
        count: 1,
        resetTime: now + windowMs,
      })
      return next()
    }

    if (record.count >= max) {
      return res.status(429).json({
        error: 'RateLimitExceeded',
        message,
      })
    }

    record.count++
    next()
  }
}

/**
 * Request validation middleware
 */
export function validateRequest<T>(schema: z.ZodSchema<T>) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const validated = schema.parse(req.body)
      req.body = validated
      next()
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          error: 'ValidationError',
          message: 'Invalid request data',
          details: error.errors,
        })
      }
      next(error)
    }
  }
}

/**
 * Query parameters validation middleware
 */
export function validateQuery<T>(schema: z.ZodSchema<T>) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const validated = schema.parse(req.query)
      req.query = validated as any
      next()
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          error: 'ValidationError',
          message: 'Invalid query parameters',
          details: error.errors,
        })
      }
      next(error)
    }
  }
}

/**
 * Timing middleware for performance monitoring
 */
export function createTimingMiddleware(logger?: Logger) {
  return (req: Request, res: Response, next: NextFunction) => {
    const start = Date.now()

    res.on('finish', () => {
      const duration = Date.now() - start
      const message = `${req.method} ${req.originalUrl} ${res.statusCode} ${duration}ms`
      
      if (logger) {
        logger.info({
          method: req.method,
          url: req.originalUrl,
          statusCode: res.statusCode,
          duration,
        }, message)
      } else {
        console.log(message)
      }
    })

    next()
  }
}

/**
 * Cache control middleware
 */
export interface CacheOptions {
  maxAge?: number
  sMaxAge?: number
  public?: boolean
  private?: boolean
  noCache?: boolean
  noStore?: boolean
  mustRevalidate?: boolean
}

export function setCacheControl(options: CacheOptions = {}) {
  return (req: Request, res: Response, next: NextFunction) => {
    const directives: string[] = []

    if (options.public) directives.push('public')
    if (options.private) directives.push('private')
    if (options.noCache) directives.push('no-cache')
    if (options.noStore) directives.push('no-store')
    if (options.mustRevalidate) directives.push('must-revalidate')
    if (options.maxAge !== undefined) directives.push(`max-age=${options.maxAge}`)
    if (options.sMaxAge !== undefined) directives.push(`s-maxage=${options.sMaxAge}`)

    if (directives.length > 0) {
      res.setHeader('Cache-Control', directives.join(', '))
    }

    next()
  }
}

/**
 * No cache middleware
 */
export function noCache() {
  return setCacheControl({
    noCache: true,
    noStore: true,
    mustRevalidate: true,
  })
}

/**
 * Security headers middleware
 */
export function securityHeaders() {
  return (req: Request, res: Response, next: NextFunction) => {
    res.setHeader('X-Content-Type-Options', 'nosniff')
    res.setHeader('X-Frame-Options', 'DENY')
    res.setHeader('X-XSS-Protection', '1; mode=block')
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin')
    res.setHeader(
      'Content-Security-Policy',
      "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'"
    )
    next()
  }
}

/**
 * Request context middleware
 */
export interface RequestContext {
  requestId: string
  startTime: number
  [key: string]: any
}

declare global {
  namespace Express {
    interface Request {
      context?: RequestContext
    }
  }
}

export function createRequestContext() {
  return (req: Request, res: Response, next: NextFunction) => {
    req.context = {
      requestId: req.headers['x-request-id'] as string || generateId(),
      startTime: Date.now(),
    }
    next()
  }
}

/**
 * Pagination middleware
 */
export interface PaginationOptions {
  defaultLimit?: number
  maxLimit?: number
}

export function pagination(options: PaginationOptions = {}) {
  const { defaultLimit = 50, maxLimit = 100 } = options

  return (req: Request, res: Response, next: NextFunction) => {
    const limit = Math.min(
      parseInt(req.query.limit as string) || defaultLimit,
      maxLimit
    )
    const cursor = req.query.cursor as string

    req.query.limit = limit.toString()
    req.query.cursor = cursor

    next()
  }
}

/**
 * Helper to generate unique IDs
 */
function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`
}

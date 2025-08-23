/**
 * Server Utilities
 * Common server setup and configuration helpers
 */

import express from 'express'
import compression from 'compression'
import cors from 'cors'
import { createHttpTerminator, HttpTerminator } from 'http-terminator'
import { pinoHttp } from 'pino-http'
import type { Logger } from 'pino'
import type { CorsOptions } from 'cors'
import type { Server } from 'http'

export interface CreateAppOptions {
  logger?: Logger
  corsOptions?: CorsOptions
  trustProxy?: boolean
  jsonLimit?: string
  compression?: boolean
}

/**
 * Creates a configured Express application with standard middleware
 */
export function createApp(options: CreateAppOptions = {}): express.Application {
  const app = express()

  // Trust proxy if specified
  if (options.trustProxy) {
    app.set('trust proxy', true)
  }

  // Add request logging if logger provided
  if (options.logger) {
    app.use(
      pinoHttp({
        logger: options.logger,
        serializers: {
          req: (req) => ({
            method: req.method,
            url: req.url,
            query: req.query,
            params: req.params,
          }),
          res: (res) => ({
            statusCode: res.statusCode,
          }),
        },
      })
    )
  }

  // Add compression
  if (options.compression !== false) {
    app.use(compression())
  }

  // Add CORS
  const corsOptions = options.corsOptions || {
    origin: true,
    credentials: true,
  }
  app.use(cors(corsOptions))

  // Add JSON parsing
  app.use(express.json({ limit: options.jsonLimit || '100kb' }))

  return app
}

/**
 * Gracefully starts an Express server
 */
export async function startServer(
  app: express.Application,
  port: number,
  hostname?: string
): Promise<{ server: Server; terminator: HttpTerminator }> {
  return new Promise((resolve, reject) => {
    const server = app.listen(port, hostname || '0.0.0.0', () => {
      const terminator = createHttpTerminator({ server })
      resolve({ server, terminator })
    })

    server.on('error', reject)
  })
}

/**
 * Gracefully stops a server
 */
export async function stopServer(terminator: HttpTerminator): Promise<void> {
  await terminator.terminate()
}

/**
 * Creates a health check endpoint
 */
export function createHealthCheck(
  checks?: Record<string, () => Promise<boolean>>
): express.RequestHandler {
  return async (req, res) => {
    const results: Record<string, { status: 'ok' | 'error'; message?: string }> = {}
    let hasError = false

    if (checks) {
      for (const [name, check] of Object.entries(checks)) {
        try {
          const isHealthy = await check()
          results[name] = { status: isHealthy ? 'ok' : 'error' }
          if (!isHealthy) hasError = true
        } catch (error) {
          results[name] = {
            status: 'error',
            message: error instanceof Error ? error.message : 'Unknown error',
          }
          hasError = true
        }
      }
    }

    const status = hasError ? 'degraded' : 'ok'
    const statusCode = hasError ? 503 : 200

    res.status(statusCode).json({
      status,
      version: process.env.npm_package_version,
      uptime: process.uptime(),
      checks: results,
    })
  }
}

/**
 * Creates a standard error handler middleware
 */
export function createErrorHandler(logger?: Logger): express.ErrorRequestHandler {
  return (err, req, res, next) => {
    if (res.headersSent) {
      return next(err)
    }

    // Log the error
    if (logger) {
      logger.error(
        {
          err,
          req: {
            method: req.method,
            url: req.url,
            query: req.query,
            params: req.params,
          },
        },
        'Request error'
      )
    } else {
      console.error('Request error:', err)
    }

    // Determine status code
    const statusCode = err.statusCode || err.status || 500
    const message = err.message || 'Internal Server Error'
    const error = err.error || 'InternalServerError'

    res.status(statusCode).json({
      error,
      message,
    })
  }
}

/**
 * Async handler wrapper to catch errors in async route handlers
 */
export function asyncHandler<T = any>(
  fn: (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => Promise<T>
): express.RequestHandler {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next)
  }
}

/**
 * Creates a request ID middleware
 */
export function createRequestId(): express.RequestHandler {
  return (req, res, next) => {
    const requestId = req.headers['x-request-id'] || generateRequestId()
    req.headers['x-request-id'] = requestId as string
    res.setHeader('x-request-id', requestId)
    next()
  }
}

/**
 * Generates a request ID
 */
function generateRequestId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`
}

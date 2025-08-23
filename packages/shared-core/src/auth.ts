/**
 * Authentication & Authorization Utilities
 * JWT handling and auth middleware
 */

import { Request, Response, NextFunction } from 'express'
import { SignJWT, jwtVerify, importJWK, exportJWK } from 'jose'
import { Keypair } from '@gander-social-atproto/crypto'
import { AuthError, ForbiddenError, InvalidTokenError, ExpiredTokenError } from './errors'

/**
 * JWT payload types
 */
export interface AccessTokenPayload {
  sub: string  // Subject (user DID)
  aud?: string | string[]  // Audience
  scope?: string  // Space-separated scopes
  iat?: number  // Issued at
  exp?: number  // Expiration
  jti?: string  // JWT ID
}

export interface RefreshTokenPayload {
  sub: string
  tokenId: string
  iat?: number
  exp?: number
}

export interface ServiceAuthPayload {
  iss: string  // Issuer (service DID)
  aud: string  // Audience (target service)
  exp: number
  lxm?: string  // Lexicon method
  jti?: string
}

/**
 * Auth options for middleware
 */
export interface AuthOptions {
  requireAuth?: boolean
  requireScope?: string | string[]
  requireRole?: string | string[]
  allowExpired?: boolean
}

/**
 * Authenticated request with user info
 */
export interface AuthenticatedRequest extends Request {
  auth?: {
    did: string
    scope?: string[]
    role?: string[]
    token: string
  }
}

/**
 * Create an access token
 */
export async function createAccessToken(
  payload: AccessTokenPayload,
  secret: string | Uint8Array,
  options: {
    expiresIn?: string | number  // e.g., '15m' or 900 (seconds)
    audience?: string | string[]
    issuer?: string
  } = {}
): Promise<string> {
  const jwt = new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setSubject(payload.sub)

  if (options.expiresIn) {
    jwt.setExpirationTime(options.expiresIn)
  }

  if (options.audience) {
    jwt.setAudience(options.audience)
  }

  if (options.issuer) {
    jwt.setIssuer(options.issuer)
  }

  if (payload.jti) {
    jwt.setJti(payload.jti)
  }

  const secretKey = typeof secret === 'string' 
    ? new TextEncoder().encode(secret)
    : secret

  return await jwt.sign(secretKey)
}

/**
 * Create a refresh token
 */
export async function createRefreshToken(
  payload: RefreshTokenPayload,
  secret: string | Uint8Array,
  options: {
    expiresIn?: string | number  // e.g., '7d' or 604800
    audience?: string | string[]
    issuer?: string
  } = {}
): Promise<string> {
  const jwt = new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setSubject(payload.sub)

  if (options.expiresIn) {
    jwt.setExpirationTime(options.expiresIn)
  }

  if (options.audience) {
    jwt.setAudience(options.audience)
  }

  if (options.issuer) {
    jwt.setIssuer(options.issuer)
  }

  const secretKey = typeof secret === 'string'
    ? new TextEncoder().encode(secret)
    : secret

  return await jwt.sign(secretKey)
}

/**
 * Verify a JWT token
 */
export async function verifyToken<T = any>(
  token: string,
  secret: string | Uint8Array,
  options: {
    audience?: string | string[]
    issuer?: string
    clockTolerance?: number
  } = {}
): Promise<T> {
  try {
    const secretKey = typeof secret === 'string'
      ? new TextEncoder().encode(secret)
      : secret

    const { payload } = await jwtVerify(token, secretKey, {
      audience: options.audience,
      issuer: options.issuer,
      clockTolerance: options.clockTolerance,
    })

    return payload as T
  } catch (error: any) {
    if (error.code === 'ERR_JWT_EXPIRED') {
      throw new ExpiredTokenError('Token has expired')
    }
    throw new InvalidTokenError(error.message)
  }
}

/**
 * Extract bearer token from Authorization header
 */
export function extractBearerToken(authHeader?: string): string | null {
  if (!authHeader) return null
  
  const parts = authHeader.split(' ')
  if (parts.length !== 2 || parts[0].toLowerCase() !== 'bearer') {
    return null
  }
  
  return parts[1]
}

/**
 * Create service-to-service JWT
 */
export async function createServiceJWT(
  issuerDid: string,
  audienceDid: string,
  keypair: Keypair,
  options: {
    expiresIn?: number  // seconds
    lexiconMethod?: string
  } = {}
): Promise<string> {
  const now = Math.floor(Date.now() / 1000)
  const exp = now + (options.expiresIn ?? 60)

  const payload: ServiceAuthPayload = {
    iss: issuerDid,
    aud: audienceDid,
    exp,
    ...(options.lexiconMethod && { lxm: options.lexiconMethod }),
  }

  const jwt = new SignJWT(payload)
    .setProtectedHeader({ alg: keypair.jwtAlg })
    .setIssuedAt(now)
    .setExpirationTime(exp)

  return await jwt.sign(await keypair.export())
}

/**
 * Verify service-to-service JWT
 */
export async function verifyServiceJWT(
  token: string,
  expectedAudience: string,
  getPublicKey: (issuerDid: string) => Promise<any>
): Promise<ServiceAuthPayload> {
  // Decode to get issuer
  const parts = token.split('.')
  if (parts.length !== 3) {
    throw new InvalidTokenError('Invalid JWT format')
  }

  const payload = JSON.parse(
    Buffer.from(parts[1], 'base64url').toString()
  ) as ServiceAuthPayload

  // Get public key for issuer
  const publicKey = await getPublicKey(payload.iss)
  
  // Verify
  const { payload: verified } = await jwtVerify(token, publicKey, {
    audience: expectedAudience,
  })

  return verified as ServiceAuthPayload
}

/**
 * Auth middleware factory
 */
export function requireAuth(
  verifyFn: (token: string) => Promise<any>,
  options: AuthOptions = {}
): (req: Request, res: Response, next: NextFunction) => Promise<void> {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = extractBearerToken(req.headers.authorization)
      
      if (!token) {
        if (options.requireAuth !== false) {
          throw new AuthError('No authorization token provided')
        }
        return next()
      }

      const payload = await verifyFn(token)
      
      // Check scopes if required
      if (options.requireScope) {
        const requiredScopes = Array.isArray(options.requireScope) 
          ? options.requireScope 
          : [options.requireScope]
        const userScopes = payload.scope?.split(' ') || []
        
        const hasScope = requiredScopes.some(scope => 
          userScopes.includes(scope)
        )
        
        if (!hasScope) {
          throw new ForbiddenError('Insufficient scope')
        }
      }

      // Check roles if required
      if (options.requireRole) {
        const requiredRoles = Array.isArray(options.requireRole)
          ? options.requireRole
          : [options.requireRole]
        const userRoles = payload.role || []
        
        const hasRole = requiredRoles.some(role =>
          userRoles.includes(role)
        )
        
        if (!hasRole) {
          throw new ForbiddenError('Insufficient role')
        }
      }

      // Attach auth info to request
      (req as AuthenticatedRequest).auth = {
        did: payload.sub || payload.iss,
        scope: payload.scope?.split(' '),
        role: payload.role,
        token,
      }

      next()
    } catch (error) {
      next(error)
    }
  }
}

/**
 * Optional auth middleware
 */
export function optionalAuth(
  verifyFn: (token: string) => Promise<any>
): (req: Request, res: Response, next: NextFunction) => Promise<void> {
  return requireAuth(verifyFn, { requireAuth: false })
}

/**
 * Require specific scope middleware
 */
export function requireScope(
  scope: string | string[]
): (req: Request, res: Response, next: NextFunction) => void {
  return (req: Request, res: Response, next: NextFunction) => {
    const authReq = req as AuthenticatedRequest
    
    if (!authReq.auth) {
      return next(new AuthError('Authentication required'))
    }

    const requiredScopes = Array.isArray(scope) ? scope : [scope]
    const userScopes = authReq.auth.scope || []
    
    const hasScope = requiredScopes.some(s => userScopes.includes(s))
    
    if (!hasScope) {
      return next(new ForbiddenError(`Scope required: ${requiredScopes.join(' or ')}`))
    }
    
    next()
  }
}

/**
 * Require specific role middleware
 */
export function requireRole(
  role: string | string[]
): (req: Request, res: Response, next: NextFunction) => void {
  return (req: Request, res: Response, next: NextFunction) => {
    const authReq = req as AuthenticatedRequest
    
    if (!authReq.auth) {
      return next(new AuthError('Authentication required'))
    }

    const requiredRoles = Array.isArray(role) ? role : [role]
    const userRoles = authReq.auth.role || []
    
    const hasRole = requiredRoles.some(r => userRoles.includes(r))
    
    if (!hasRole) {
      return next(new ForbiddenError(`Role required: ${requiredRoles.join(' or ')}`))
    }
    
    next()
  }
}

/**
 * Create a token pair (access + refresh)
 */
export async function createTokenPair(
  subject: string,
  secret: string,
  options: {
    accessTokenExpiry?: string | number  // e.g., '15m'
    refreshTokenExpiry?: string | number  // e.g., '7d'
    scope?: string
    audience?: string | string[]
    issuer?: string
    tokenId?: string
  } = {}
): Promise<{ accessToken: string; refreshToken: string }> {
  const accessToken = await createAccessToken(
    {
      sub: subject,
      scope: options.scope,
    },
    secret,
    {
      expiresIn: options.accessTokenExpiry || '15m',
      audience: options.audience,
      issuer: options.issuer,
    }
  )

  const refreshToken = await createRefreshToken(
    {
      sub: subject,
      tokenId: options.tokenId || generateTokenId(),
    },
    secret,
    {
      expiresIn: options.refreshTokenExpiry || '7d',
      audience: options.audience,
      issuer: options.issuer,
    }
  )

  return { accessToken, refreshToken }
}

/**
 * Generate a unique token ID
 */
function generateTokenId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`
}

/**
 * Parse scopes from string
 */
export function parseScopes(scopeString?: string): string[] {
  if (!scopeString) return []
  return scopeString.split(' ').filter(Boolean)
}

/**
 * Check if user has required scope
 */
export function hasScope(
  userScopes: string[],
  requiredScope: string | string[]
): boolean {
  const required = Array.isArray(requiredScope) ? requiredScope : [requiredScope]
  return required.some(scope => userScopes.includes(scope))
}

/**
 * Check if user has required role
 */
export function hasRole(
  userRoles: string[],
  requiredRole: string | string[]
): boolean {
  const required = Array.isArray(requiredRole) ? requiredRole : [requiredRole]
  return required.some(role => userRoles.includes(role))
}

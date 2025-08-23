# PDS Migration to Shared-Core

This document outlines the migration of the PDS package to use shared-core utilities, reducing code duplication and improving maintainability.

## Phase 1: High-Priority Migrations

### 1. Error Handling Migration

**Current Implementation:**
- `src/error.ts` - Custom error handler using XRPCError from xrpc-server

**Migration Steps:**
```typescript
// Before (src/error.ts)
import { XRPCError } from '@gander-social-atproto/xrpc-server'

// After (src/error.ts)
import { 
  XRPCError, 
  createErrorResponse,
  InternalServerError 
} from '@gander-social-atproto/shared-core'
```

### 2. Database Utilities Migration

**Current Implementation:**
- `src/db/migrator.ts` - Exact duplicate of shared-core Migrator
- `src/db/pagination.ts` - Complex keyset pagination implementation

**Migration Steps:**
```typescript
// Before (src/db/migrator.ts)
import { Kysely, Migration, Migrator as KyselyMigrator } from 'kysely'
export class Migrator<T> extends KyselyMigrator { ... }

// After - DELETE src/db/migrator.ts and update imports
import { Migrator } from '@gander-social-atproto/shared-core'
```

### 3. Redis/Cache Migration

**Current Implementation:**
- `src/redis.ts` - Basic Redis client setup

**Migration Steps:**
```typescript
// Before (src/redis.ts)
import { Redis } from 'ioredis'
export const getRedisClient = (host: string, password?: string): Redis => { ... }

// After - Use shared-core cache utilities
import { 
  RedisCache,
  TwoLevelCache,
  MemoryCache 
} from '@gander-social-atproto/shared-core'
```

### 4. Authentication Migration

**Current Implementation:**
- `src/auth-verifier.ts` - JWT verification and auth handling

**Migration Steps:**
```typescript
// Use shared-core auth utilities
import {
  verifyToken,
  createAccessToken,
  createRefreshToken,
  requireAuth,
  optionalAuth,
  extractBearerToken,
  AuthenticatedRequest
} from '@gander-social-atproto/shared-core'
```

## Phase 2: Service Layer Refactoring

### Before: Scattered Utilities
```typescript
// Multiple files with duplicated patterns
import { XRPCError } from '@gander-social-atproto/xrpc-server'
import { Kysely } from 'kysely'
import { Redis } from 'ioredis'
import { InvalidRequestError } from '@gander-social-atproto/xrpc-server'
```

### After: Centralized Imports
```typescript
// Single import from shared-core
import {
  // Errors
  XRPCError,
  InvalidRequestError,
  AuthError,
  ForbiddenError,
  NotFoundError,
  
  // Database
  Kysely,
  Migrator,
  withTransaction,
  withRetry,
  paginate,
  processPaginatedResults,
  
  // Cache
  RedisCache,
  MemoryCache,
  cacheKey,
  
  // Auth
  verifyToken,
  requireAuth,
  AuthenticatedRequest,
  
  // Other utilities
  express,
  Redis,
  pino,
  z
} from '@gander-social-atproto/shared-core'
```

## Phase 3: Context Refactoring

Update `src/context.ts` to use shared utilities:

```typescript
import {
  createPgPool,
  Migrator,
  RedisCache,
  MemoryCache,
  TwoLevelCache,
  type DbConfig,
  type Cache
} from '@gander-social-atproto/shared-core'

export type AppContext = {
  // Use shared cache interface
  cache: Cache
  didCache: Cache
  // ... rest of context
}

// In constructor
this.cache = new TwoLevelCache(redis, {
  memoryOptions: { maxSize: 1000, maxTTL: HOUR },
  redisOptions: { prefix: 'pds:cache:' }
})
```

## Migration Benefits

### Before Migration
- **27 direct dependencies** in package.json
- **~300 lines** of duplicated error handling code
- **~200 lines** of duplicated database utilities
- **~150 lines** of cache implementation
- **~500 lines** of auth verification code

### After Migration
- **~10 direct dependencies** (rest from shared-core)
- **0 lines** of duplicated utilities
- **Single source of truth** for common patterns
- **Consistent error handling** across services
- **Unified caching strategy**
- **Standardized auth flow**

## Implementation Example

Let's start by migrating the database utilities:

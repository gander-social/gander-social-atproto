# @gander-social-atproto/shared-core

Central package for shared dependencies and utilities across the gander-social-atproto monorepo.

## Purpose

This package consolidates commonly used external dependencies and internal packages to:
- Reduce code duplication across packages
- Simplify dependency management
- Ensure version consistency
- Provide common utilities and patterns
- Improve build times and reduce bundle sizes

## Installation

```bash
pnpm add @gander-social-atproto/shared-core
```

## Usage

### Import Everything

```typescript
import * as Core from '@gander-social-atproto/shared-core'

// Use external dependencies
const app = Core.express()
app.use(Core.compression())
app.use(Core.cors())

// Use internal packages
const uri = new Core.AtUri('at://did:plc:example/app.gndr.feed.post/123')

// Use utilities
const server = await Core.startServer(app, 3000)
```

### Import Specific Items

```typescript
import {
  express,
  compression,
  cors,
  createApp,
  startServer,
  AtUri,
  DAY,
  HOUR,
  z
} from '@gander-social-atproto/shared-core'

// Create configured Express app
const app = createApp({
  compression: true,
  corsOptions: { origin: true }
})

// Start server
const { server, terminator } = await startServer(app, 3000)
```

### Use Middleware Utilities

```typescript
import {
  validateRequest,
  validateQuery,
  createRateLimiter,
  securityHeaders,
  noCache,
  z
} from '@gander-social-atproto/shared-core'

// Request validation
const createPostSchema = z.object({
  text: z.string().max(300),
  createdAt: z.string().datetime()
})

app.post('/posts', 
  validateRequest(createPostSchema),
  async (req, res) => {
    // req.body is now typed and validated
    const { text, createdAt } = req.body
    // ...
  }
)

// Rate limiting
app.use('/api', createRateLimiter({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 100 // limit each IP to 100 requests per window
}))

// Security headers
app.use(securityHeaders())

// Cache control
app.get('/api/feed', noCache(), getFeedHandler)
```

### Use Configuration Utilities

```typescript
import {
  loadConfig,
  parseNumber,
  parseBoolean,
  getRequired,
  ConfigSchemas,
  z
} from '@gander-social-atproto/shared-core'

// Define configuration schema
const configSchema = z.object({
  PORT: ConfigSchemas.port,
  NODE_ENV: ConfigSchemas.nodeEnv,
  DATABASE_URL: ConfigSchemas.databaseUrl,
  REDIS_URL: ConfigSchemas.redisUrl.optional(),
  PUBLIC_URL: ConfigSchemas.publicUrl,
  DID: ConfigSchemas.did,
  JWT_SECRET: ConfigSchemas.jwtSecret,
  ENABLE_METRICS: ConfigSchemas.boolean.default('false')
})

// Load and validate configuration
const config = loadConfig(configSchema)

// Or use individual parsers
const port = parseNumber(process.env.PORT, 3000)
const isDev = parseBoolean(process.env.DEV_MODE, false)
const apiKey = getRequired('API_KEY')
```

## Package Structure

### External Dependencies (`dependencies.ts`)
Re-exports commonly used npm packages:
- Express and middleware (express, cors, compression)
- Database (pg, kysely)
- Redis (ioredis)
- Logging (pino, pino-http)
- Crypto (jose, multiformats)
- HTTP utilities (undici, http-terminator)
- Validation (zod)
- And more...

### Internal Packages (`internal.ts`)
Re-exports workspace packages:
- @gander-social-atproto/common
- @gander-social-atproto/common-web
- @gander-social-atproto/syntax
- @gander-social-atproto/lexicon
- @gander-social-atproto/crypto
- @gander-social-atproto/identity
- @gander-social-atproto/xrpc
- @gander-social-atproto/xrpc-server

### Shared Types (`types.ts`)
Common TypeScript interfaces and types:
- Server configuration types
- Database and Redis configuration
- Request/Response types
- Pagination interfaces
- DID document types
- Utility types

### Constants (`constants.ts`)
Shared constants across packages:
- HTTP status codes
- Content types
- Headers
- Time constants
- Rate limits
- Cache TTLs
- Error codes
- Regex patterns

### Utilities

#### Server Utilities (`utils/server.ts`)
- `createApp()` - Create configured Express app
- `startServer()` - Start server with graceful shutdown
- `stopServer()` - Gracefully stop server
- `createHealthCheck()` - Health check endpoint
- `createErrorHandler()` - Error handling middleware
- `asyncHandler()` - Async route wrapper

#### Middleware Utilities (`utils/middleware.ts`)
- `createRateLimiter()` - Rate limiting
- `validateRequest()` - Request body validation
- `validateQuery()` - Query parameter validation
- `createTimingMiddleware()` - Request timing
- `setCacheControl()` - Cache headers
- `securityHeaders()` - Security headers
- `pagination()` - Pagination middleware

#### Configuration Utilities (`utils/config.ts`)
- `parseString()` - Parse string env var
- `parseNumber()` - Parse number env var
- `parseBoolean()` - Parse boolean env var
- `parseList()` - Parse list env var
- `parseJson()` - Parse JSON env var
- `getRequired()` - Get required env var
- `loadConfig()` - Load config with validation
- `ConfigSchemas` - Common config schemas

## Migration Guide

### Before (in each package)

```typescript
// packages/gndr/src/index.ts
import events from 'node:events'
import http from 'node:http'
import { AtpAgent } from '@gander-social-atproto/api'
import { DAY, SECOND } from '@gander-social-atproto/common'
import { Keypair } from '@gander-social-atproto/crypto'
import { IdResolver } from '@gander-social-atproto/identity'
import compression from 'compression'
import cors from 'cors'
import express from 'express'
import { HttpTerminator, createHttpTerminator } from 'http-terminator'
// ... many more imports
```

### After (using shared-core)

```typescript
// packages/gndr/src/index.ts
import events from 'node:events'
import http from 'node:http'
import {
  AtpAgent,
  DAY,
  SECOND,
  Keypair,
  IdResolver,
  compression,
  cors,
  express,
  HttpTerminator,
  createHttpTerminator,
  // ... all from one package
} from '@gander-social-atproto/shared-core'
```

## Benefits

1. **Reduced Bundle Size**: Dependencies are deduplicated across packages
2. **Easier Maintenance**: Update dependencies in one place
3. **Consistent Versions**: All packages use the same dependency versions
4. **Faster Development**: Import everything from one package
5. **Type Safety**: Centralized TypeScript types and interfaces
6. **Code Reuse**: Common utilities and patterns available everywhere

## Contributing

When adding new dependencies or utilities:

1. Determine if the dependency/utility is truly shared (used by 3+ packages)
2. Add to the appropriate file:
   - External npm dependencies → `dependencies.ts`
   - Internal packages → `internal.ts`
   - Types → `types.ts`
   - Constants → `constants.ts`
   - Utilities → `utils/` directory
3. Update this README with usage examples
4. Test the changes across dependent packages

## License

MIT

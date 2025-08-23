# Migration Example: Updating gndr Package

## Example migration for packages/gndr/src/index.ts

### Original File (Before)
```typescript
import events from 'node:events'
import http from 'node:http'
import { AddressInfo } from 'node:net'
import { AtpAgent } from '@gander-social-atproto/api'
import { DAY, SECOND } from '@gander-social-atproto/common'
import { Keypair } from '@gander-social-atproto/crypto'
import { IdResolver } from '@gander-social-atproto/identity'
import compression from 'compression'
import cors from 'cors'
import { Etcd3 } from 'etcd3'
import express from 'express'
import { HttpTerminator, createHttpTerminator } from 'http-terminator'
// ... more imports
```

### Updated File (After)
```typescript
import events from 'node:events'
import http from 'node:http'
import { AddressInfo } from 'node:net'
import { Etcd3 } from 'etcd3'  // Not in shared-core (specific to gndr)
import {
  // From @gander-social-atproto/api
  AtpAgent,
  
  // From @gander-social-atproto/common
  DAY,
  SECOND,
  
  // From @gander-social-atproto/crypto
  Keypair,
  
  // From @gander-social-atproto/identity
  IdResolver,
  
  // External dependencies
  compression,
  cors,
  express,
  HttpTerminator,
  createHttpTerminator,
  
  // Can also use utility functions
  createApp,
  createHealthCheck,
  createErrorHandler,
} from '@gander-social-atproto/shared-core'

// Package-specific imports remain unchanged
import API, { blobResolver, health, wellKnown } from './api'
// ... rest of the file
```

## Step-by-Step Migration Process

### 1. Update package.json

```json
{
  "name": "@gander-social-atproto/gndr",
  "dependencies": {
    "@gander-social-atproto/shared-core": "workspace:^",
    // Remove these (now in shared-core):
    // "@gander-social-atproto/common": "workspace:^",
    // "@gander-social-atproto/crypto": "workspace:^",
    // "@gander-social-atproto/identity": "workspace:^",
    // "@gander-social-atproto/lexicon": "workspace:^",
    // "@gander-social-atproto/syntax": "workspace:^",
    // "@gander-social-atproto/xrpc-server": "workspace:^",
    // "compression": "^1.7.4",
    // "cors": "^2.8.5",
    // "express": "^4.17.2",
    // "http-terminator": "^3.2.0",
    // "ioredis": "^5.3.2",
    // "jose": "^5.0.1",
    // "kysely": "^0.22.0",
    // "multiformats": "^9.9.0",
    // "p-queue": "^6.6.2",
    // "pg": "^8.10.0",
    // "pino": "^8.21.0",
    // "pino-http": "^8.2.1",
    // "structured-headers": "^1.0.1",
    // "typed-emitter": "^2.1.0",
    // "uint8arrays": "3.0.0",
    // "undici": "^6.19.8",
    
    // Keep package-specific dependencies:
    "@bufbuild/protobuf": "^1.5.0",
    "@connectrpc/connect": "^1.1.4",
    "@connectrpc/connect-express": "^1.1.4",
    "@connectrpc/connect-node": "^1.1.4",
    "etcd3": "^1.1.2",
    "key-encoder": "^2.0.3",
    "murmurhash": "^2.0.1",
    "sharp": "^0.33.5",
    "statsig-node": "^5.23.1"
  }
}
```

### 2. Update Import Statements

Use your IDE's find and replace feature with regex:

#### Find patterns:
```regex
import .* from '@gander-social-atproto/(common|crypto|identity|lexicon|syntax|xrpc-server)'
import .* from '(compression|cors|express|http-terminator|ioredis|jose|kysely|multiformats|p-queue|pg|pino|pino-http|typed-emitter|uint8arrays|undici)'
```

#### Replace with:
Group the imports from shared-core:
```typescript
import {
  // Add the specific exports you need
} from '@gander-social-atproto/shared-core'
```

### 3. Use Shared Utilities

Replace custom implementations with shared utilities:

#### Before:
```typescript
// Custom server setup
const app = express()
app.use(compression())
app.use(cors())
app.use(express.json())

// Custom health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

// Custom error handling
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ error: 'Internal Server Error' })
})
```

#### After:
```typescript
import {
  createApp,
  createHealthCheck,
  createErrorHandler,
} from '@gander-social-atproto/shared-core'

// Use shared utilities
const app = createApp({
  logger: ctx.logger,
  compression: true,
  corsOptions: { origin: true }
})

// Use shared health check
app.get('/health', createHealthCheck({
  database: async () => ctx.db.isHealthy(),
  redis: async () => ctx.redis.ping() === 'PONG'
}))

// Use shared error handler
app.use(createErrorHandler(ctx.logger))
```

### 4. Test the Migration

```bash
# Build the shared-core package
cd packages/shared-core
pnpm build

# Build and test the migrated package
cd ../gndr
pnpm build
pnpm test
```

### 5. Verify Bundle Size Reduction

```bash
# Check package size before migration
du -sh node_modules

# After migration
pnpm install
du -sh node_modules
```

## Common Issues and Solutions

### Issue: Type conflicts
**Solution**: Ensure you're importing types from shared-core, not the original packages.

### Issue: Missing exports
**Solution**: Add the missing export to shared-core if it's used by 3+ packages, otherwise keep the direct import.

### Issue: Version mismatch
**Solution**: Ensure all packages use `workspace:^` for shared-core dependency.

### Issue: Build errors
**Solution**: Clear build cache and rebuild all packages:
```bash
pnpm clean
pnpm build
```

## Benefits After Migration

1. **Reduced node_modules size**: ~30-40% reduction in duplicated dependencies
2. **Faster installs**: Fewer packages to resolve and download
3. **Simpler imports**: One import statement instead of many
4. **Consistent behavior**: Shared utilities ensure uniform behavior
5. **Easier updates**: Update dependencies in one place

## Next Steps

After migrating one package:
1. Run all tests to ensure functionality
2. Check bundle sizes
3. Document any package-specific changes
4. Proceed with migrating other packages
5. Update CI/CD pipelines if needed

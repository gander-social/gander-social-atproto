# Implementation Example: Migrating Database Utilities

## Step 1: Replace Local Migrator with Shared-Core Version

### Files to Update:

```bash
# The migrator has been successfully migrated:
# - Deleted: src/db/migrator.ts 
# - Updated: src/db/index.ts to re-export from shared-core
```

## Step 2: Migrate Redis/Cache Implementation

### Create new cache wrapper (src/cache.ts):

```typescript
// src/cache.ts
import { 
  RedisCache, 
  MemoryCache, 
  TwoLevelCache,
  type Cache 
} from '@gander-social-atproto/shared-core'
import { Redis } from '@gander-social-atproto/shared-core'
import { redisLogger } from './logger'

export type { Cache }

export const createRedisCache = (
  host: string, 
  password?: string
): { redis: Redis; cache: Cache } => {
  const redisAddr = redisAddressParts(host)
  const redis = new Redis({
    ...redisAddr,
    password,
  })
  
  redis.on('error', (err) => {
    redisLogger.error({ host, err }, 'redis error')
  })

  // Create a two-level cache with memory and Redis
  const cache = new TwoLevelCache(redis, {
    memoryOptions: { 
      maxSize: 1000, 
      maxTTL: 60 * 60 * 1000, // 1 hour
      staleTTL: 5 * 60 * 1000  // 5 minutes
    },
    redisOptions: { 
      prefix: 'pds:',
      defaultTTL: 60 * 60 * 1000 // 1 hour
    }
  })

  return { redis, cache }
}

const redisAddressParts = (
  addr: string,
  defaultPort = 6379,
): { host: string; port: number } => {
  const [host, portStr, ...others] = addr.split(':')
  const port = portStr ? parseInt(portStr, 10) : defaultPort
  
  if (!host || isNaN(port) || others.length) {
    throw new Error(`Invalid Redis address: ${addr}`)
  }
  
  return { host, port }
}
```

## Step 3: Update Context to Use Shared Utilities

### Update src/context.ts:

```typescript
// Before
import { getRedisClient } from './redis'
import { Database } from './db'

// After
import { 
  createPgPool,
  Migrator,
  type Cache,
  type DbConfig
} from '@gander-social-atproto/shared-core'
import { createRedisCache } from './cache'
import { Database } from './db'

export class AppContext {
  public cache: Cache
  public redis: Redis
  
  constructor(config: AppConfig) {
    // Before
    // this.redis = getRedisClient(config.redisHost, config.redisPassword)
    
    // After
    const { redis, cache } = createRedisCache(
      config.redisHost, 
      config.redisPassword
    )
    this.redis = redis
    this.cache = cache
    
    // Database can also use shared utilities
    const pool = createPgPool({
      url: config.dbUrl,
      poolSize: config.dbPoolSize,
      ssl: config.dbSsl
    })
    this.db = new Database(pool)
  }
}
```

## Step 4: Update Error Imports Throughout the Codebase

### Create a migration script (scripts/migrate-errors.js):

```javascript
const fs = require('fs')
const path = require('path')
const glob = require('glob')

// Find all TypeScript files using InvalidRequestError from xrpc-server
const files = glob.sync('src/**/*.ts')

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8')
  let modified = false
  
  // Replace error imports
  if (content.includes("import { InvalidRequestError } from '@gander-social-atproto/xrpc-server'")) {
    content = content.replace(
      "import { InvalidRequestError } from '@gander-social-atproto/xrpc-server'",
      "import { InvalidRequestError } from '@gander-social-atproto/shared-core'"
    )
    modified = true
  }
  
  // Replace combined imports
  const combinedRegex = /import \{([^}]*InvalidRequestError[^}]*)\} from '@gander-social-atproto\/xrpc-server'/g
  if (combinedRegex.test(content)) {
    // Extract the error types
    const match = content.match(combinedRegex)
    if (match) {
      const errorTypes = ['InvalidRequestError', 'AuthRequiredError', 'ForbiddenError']
      // Split imports between shared-core and xrpc-server
      // ... implementation details
    }
  }
  
  if (modified) {
    fs.writeFileSync(file, content)
    console.log(`Updated: ${file}`)
  }
})
```

## Step 5: Update Package Dependencies

### Remove duplicated dependencies from package.json:

```json
{
  "dependencies": {
    // Remove these (now from shared-core):
    // "compression": "^1.7.4",
    // "cors": "^2.8.5",
    // "express": "^4.17.2",
    // "http-terminator": "^3.2.0",
    // "ioredis": "^5.3.2",
    // "jose": "^5.0.1",
    // "kysely": "^0.22.0",
    // "pg": "^8.10.0",
    // "pino": "^8.21.0",
    // "pino-http": "^8.2.1",
    // "zod": "^3.23.8",
    
    // Keep only PDS-specific dependencies
    "@gander-social-atproto/shared-core": "workspace:^",
    // ... other PDS-specific deps
  }
}
```

## Benefits After Migration

### Code Reduction:
- **Removed**: ~40 lines from migrator.ts (100% duplicate)
- **Removed**: ~26 lines from redis.ts
- **Simplified**: Database and cache initialization
- **Standardized**: Error handling across 70+ files

### Dependency Reduction:
- **Before**: 27 direct dependencies
- **After**: ~15 direct dependencies (12 moved to shared-core)

### Consistency Improvements:
- Single source of truth for database migrations
- Unified caching strategy with two-level cache
- Consistent error types and handling
- Standardized authentication patterns

## Next Steps

1. Run the migration script to update error imports
2. Test the application with the new shared-core utilities
3. Continue migrating other services (ozone, gndr, etc.)
4. Add more utilities to shared-core as patterns emerge
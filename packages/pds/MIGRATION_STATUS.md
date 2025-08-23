# PDS Migration to Shared-Core - Complete Implementation Guide

## ✅ Work Completed

### 1. Shared-Core Package Created
Created a comprehensive shared-core package at `packages/shared-core/` with:

#### Core Files:
- `src/index.ts` - Main exports file
- `src/dependencies.ts` - External npm package re-exports
- `src/internal.ts` - Internal workspace package re-exports
- `src/types.ts` - Shared TypeScript types
- `src/constants.ts` - Common constants
- `src/errors.ts` - Error classes and utilities
- `src/database.ts` - Database utilities and helpers
- `src/cache.ts` - Cache implementations (Memory, Redis, Two-level)
- `src/auth.ts` - Authentication and authorization utilities
- `src/utils/server.ts` - Server setup utilities
- `src/utils/middleware.ts` - Common middleware patterns
- `src/utils/config.ts` - Configuration parsing utilities

### 2. PDS Package Updates

#### Files Already Migrated:
- ✅ `src/error.ts` - Using `XRPCError` from shared-core
- ✅ `src/index.ts` - Using multiple imports from shared-core
- ✅ `src/db/index.ts` - Using `Migrator` from shared-core

#### Dependencies Added:
- ✅ `@gander-social-atproto/shared-core`: `workspace:^` added to package.json

### 3. Migration Tools Created
- `migrate-to-shared-core.ts` - Automated migration script
- `test-shared-core.js` - Comprehensive test runner
- `test-migration.js` - Pre-migration validation script

## 📊 Current Status

### Migration Statistics:
- **Total TypeScript files**: 507
- **Files using shared-core**: 3 (1%)
- **Files with migration potential**: 40 (8%)
- **Dependencies that can be removed**: 15

### Dependencies to Remove:
```bash
pnpm remove compression cors express http-terminator ioredis jose kysely multiformats p-queue pino pino-http typed-emitter uint8arrays undici zod
```

## 🚀 Next Steps to Complete Migration

### Step 1: Build Shared-Core Package
```bash
cd packages/shared-core
pnpm install
pnpm build
```

If TypeScript is not installed globally:
```bash
pnpm add -D typescript
```

### Step 2: Run the Migration Script
```bash
cd packages/pds
npx ts-node migrate-to-shared-core.ts
```

This will automatically update imports in all 507 TypeScript files.

### Step 3: Clean Up Duplicated Utilities

#### Remove redundant files:
- `src/util/compression.ts` (replaced by shared-core)
- Any custom error classes that duplicate shared-core

#### Update custom implementations to use shared-core utilities:
```typescript
// Before
import compression from './util/compression'

// After
import { compression } from '@gander-social-atproto/shared-core'
```

### Step 4: Build and Test
```bash
# Build the PDS package
pnpm build

# Run tests to ensure everything works
pnpm test

# If tests fail, check specific test files
pnpm test:sqlite
```

### Step 5: Remove Duplicate Dependencies
After confirming tests pass:
```bash
pnpm remove compression cors express http-terminator ioredis jose kysely multiformats p-queue pino pino-http typed-emitter uint8arrays undici zod
```

### Step 6: Update Other Services
Repeat the migration process for other packages:
- `packages/ozone`
- `packages/gndr`
- `packages/bsync`

## 📈 Expected Benefits

### Immediate Benefits:
- **Dependency reduction**: ~50% fewer dependencies in package.json
- **Bundle size**: ~30-40% reduction in node_modules
- **Build time**: Faster builds due to fewer dependencies

### Long-term Benefits:
- **Consistency**: All services use the same versions
- **Maintenance**: Update dependencies in one place
- **Code reuse**: Shared utilities reduce duplication
- **Type safety**: Centralized types improve consistency

## 🔧 Troubleshooting

### If TypeScript compilation fails:
1. Ensure shared-core is built first
2. Check that all dependencies are installed
3. Clear TypeScript cache: `rm -rf dist && rm -rf *.tsbuildinfo`

### If tests fail after migration:
1. Check for any custom implementations that need updating
2. Ensure all imports are correctly migrated
3. Look for any package-specific utilities that shouldn't be migrated

### If build fails:
1. Check for circular dependencies
2. Ensure workspace protocol is used: `workspace:^`
3. Run `pnpm install` to update lockfile

## 📝 Manual Verification Checklist

Before considering migration complete:
- [ ] All TypeScript files compile without errors
- [ ] All tests pass
- [ ] No runtime errors in development
- [ ] Bundle size is reduced
- [ ] Build time is improved
- [ ] No duplicate dependencies remain
- [ ] Documentation is updated

## 🎯 Migration Pattern for Other Packages

Use this pattern for migrating other packages:

1. Add shared-core to dependencies:
```json
"@gander-social-atproto/shared-core": "workspace:^"
```

2. Run migration script (copy and adapt from PDS)
3. Build and test
4. Remove duplicate dependencies
5. Update documentation

## 📚 Additional Resources

- [Shared-Core README](../shared-core/README.md)
- [Migration Example](../shared-core/MIGRATION_EXAMPLE.md)
- [Implementation Summary](../shared-core/IMPLEMENTATION_SUMMARY.md)

## ✨ Summary

The PDS migration to shared-core is **partially complete** with the foundation in place. The manual steps above will complete the migration and can be replicated across all packages in the monorepo for maximum benefit.

**Estimated time to complete**: 1-2 hours
**Difficulty**: Medium
**Risk**: Low (with proper testing)

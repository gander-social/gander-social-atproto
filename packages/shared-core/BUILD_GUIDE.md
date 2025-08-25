# Shared-Core Build Guide

## Issue Summary

You're encountering build errors because:
1. Dependencies haven't been installed yet (`node_modules` missing)
2. The prebuild script was using `npm` instead of `pnpm`
3. Internal dependencies need to be built first

## Fixed Issues

✅ **Fixed prebuild script** - Removed the problematic `prebuild` that was using `npm`
✅ **Fixed imports** - All files now import from internal modules correctly
✅ **Added missing type exports** - Added Request, Response, NextFunction, Logger, etc.

## Build Steps

### Step 1: Install Dependencies

```bash
cd /Users/paulbrooker/IdeaProjects/gander-social-atproto/packages/shared-core
pnpm install
```

### Step 2: Build Internal Dependencies (if needed)

If you get TypeScript errors about missing internal packages, build them first from the repository root:

```bash
cd /Users/paulbrooker/IdeaProjects/gander-social-atproto
pnpm build
```

Or build specific packages:
```bash
cd ../common && pnpm build
cd ../common-web && pnpm build
cd ../syntax && pnpm build
cd ../lexicon && pnpm build
cd ../crypto && pnpm build
cd ../identity && pnpm build
cd ../xrpc && pnpm build
cd ../xrpc-server && pnpm build
```

### Step 3: Build Shared-Core

```bash
cd packages/shared-core
pnpm clean && pnpm build
```

### Alternative: Use the Build Script

```bash
chmod +x build.sh
./build.sh
```

### Step 4: Verify Build

```bash
chmod +x verify-build.sh
./verify-build.sh
```

## Common Issues & Solutions

### "Local package.json exists, but node_modules missing"
**Solution**: Run `pnpm install`

### TypeScript errors about missing modules
**Solution**: Build the internal dependencies first (Step 2)

### Permission denied on scripts
**Solution**: 
```bash
chmod +x build.sh verify-build.sh
```

### Build still failing?
Run the test script to diagnose:
```bash
node test-imports.js
```

## What Changed

1. **package.json**: Removed problematic `prebuild` script
2. **All source files**: Fixed imports to use internal paths
3. **dependencies.ts**: Added missing type exports
4. **Created helper scripts**: 
   - `build.sh` - Automated build process
   - `verify-build.sh` - Checks build environment
   - `test-imports.js` - Tests dependency availability

## Next Steps After Build

Once the build succeeds:

1. **Use in other packages**:
   ```json
   {
     "dependencies": {
       "@gander-social-atproto/shared-core": "workspace:^"
     }
   }
   ```

2. **Import in code**:
   ```typescript
   import { express, cors, Kysely, DAY, AtUri } from '@gander-social-atproto/shared-core'
   ```

3. **Remove duplicate dependencies** from other packages

## Files Created/Modified

- ✅ Fixed `package.json` - Removed problematic prebuild
- ✅ Fixed all imports in source files
- ✅ Added missing type exports to `dependencies.ts`
- ✅ Created `build.sh` - Automated build script
- ✅ Created `verify-build.sh` - Build verification script
- ✅ Created `test-imports.js` - Dependency test script
- ✅ Created `BUILD_INSTRUCTIONS.md` - This guide

The package is now ready to build! Just follow the steps above.

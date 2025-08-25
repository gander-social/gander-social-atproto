# Build Instructions for shared-core

## Quick Build

```bash
# Make the build script executable (first time only)
chmod +x build.sh

# Run the build
./build.sh
```

## Manual Build Steps

If you prefer to build manually:

```bash
# 1. Install dependencies (if not already installed)
pnpm install

# 2. Clean previous build
rm -rf dist

# 3. Build TypeScript
pnpm exec tsc --build tsconfig.build.json
```

## Troubleshooting

### Missing node_modules
If you see the warning "Local package.json exists, but node_modules missing", run:
```bash
pnpm install
```

### TypeScript errors
If you encounter TypeScript compilation errors, it might be because dependent packages need to be built first:

```bash
# From the root of the monorepo
pnpm build
```

Or build the specific dependencies:
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

### Permission denied
If you get permission denied when running build.sh:
```bash
chmod +x build.sh
```

## Verify Build

After a successful build, you should see:
- `dist/` directory created
- `dist/index.js` - main entry point
- `dist/index.d.ts` - TypeScript definitions
- All other compiled files

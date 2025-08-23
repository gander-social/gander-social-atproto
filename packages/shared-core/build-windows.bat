@echo off
REM Build script for shared-core package that ensures TypeScript is installed

echo ========================================
echo    Building Shared-Core Package
echo ========================================
echo.

cd /d "C:\Users\pdbro\IdeaProjects\gander-social-atproto\packages\shared-core"

echo Step 1: Installing dependencies (including TypeScript)...
echo ----------------------------------------
call pnpm install
if %errorlevel% neq 0 (
    echo ERROR: Failed to install dependencies
    exit /b 1
)

echo.
echo Step 2: Verifying TypeScript is installed...
echo ----------------------------------------
if exist node_modules\.bin\tsc.cmd (
    echo SUCCESS: TypeScript is installed locally
) else (
    echo WARNING: TypeScript not found, installing explicitly...
    call pnpm add -D typescript
)

echo.
echo Step 3: Building TypeScript files...
echo ----------------------------------------
call pnpm build
if %errorlevel% neq 0 (
    echo.
    echo Trying alternative build method...
    call node_modules\.bin\tsc --build tsconfig.build.json
)

echo.
echo Step 4: Verifying build output...
echo ----------------------------------------
if exist dist (
    echo SUCCESS: Build completed successfully!
    echo.
    echo Output files:
    dir dist /b
) else (
    echo ERROR: Build failed - no dist folder created
    echo.
    echo Troubleshooting:
    echo 1. Check for TypeScript errors in the source files
    echo 2. Ensure all dependencies are installed
    echo 3. Try running: pnpm add -D typescript
    exit /b 1
)

echo.
echo ========================================
echo    Build Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Navigate to PDS: cd ..\pds
echo 2. Run migration: npx ts-node migrate-to-shared-core.ts
echo 3. Build PDS: pnpm build
echo 4. Test: pnpm test

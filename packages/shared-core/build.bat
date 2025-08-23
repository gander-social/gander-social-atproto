@echo off
REM Build script for shared-core package

echo Building shared-core package...
echo.

cd /d "C:\Users\pdbro\IdeaProjects\gander-social-atproto\packages\shared-core"

echo Installing dependencies...
call pnpm install

echo.
echo Building TypeScript...
call pnpm build

echo.
echo Build complete!
echo.
echo Checking output:
if exist dist (
    echo Success! dist folder created.
    dir dist
) else (
    echo Warning: No dist folder found - build may have failed
)

@echo off
echo Installing TypeScript and building shared-core...
echo.

cd /d "C:\Users\pdbro\IdeaProjects\gander-social-atproto\packages\shared-core"

echo Step 1: Installing TypeScript explicitly...
call pnpm add -D typescript

echo.
echo Step 2: Running build...
call pnpm build

echo.
if exist dist (
    echo SUCCESS! Build completed.
    dir dist
) else (
    echo Build failed. Trying direct command...
    call npx typescript tsc --build tsconfig.build.json
)

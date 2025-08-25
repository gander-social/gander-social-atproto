#!/bin/bash

# Build script for shared-core package

echo "🚀 Building @gander-social-atproto/shared-core..."

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf dist

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    pnpm install
fi

# Build TypeScript
echo "🔨 Compiling TypeScript..."
pnpm exec tsc --build tsconfig.build.json

# Check if build was successful
if [ -d "dist" ] && [ -f "dist/index.js" ]; then
    echo "✅ Build successful!"
    echo "📁 Output files in: dist/"
    ls -la dist/
else
    echo "❌ Build failed!"
    exit 1
fi

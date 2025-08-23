#!/bin/bash
# Script to build the shared-core package

echo "🚀 Building shared-core package..."
echo ""

# Navigate to shared-core directory
cd /mnt/c/Users/pdbro/IdeaProjects/gander-social-atproto/packages/shared-core

echo "📦 Installing dependencies..."
pnpm install

echo ""
echo "🔨 Building TypeScript..."
pnpm build

echo ""
echo "✅ Build complete!"
echo ""
echo "📁 Checking output:"
ls -la dist/ 2>/dev/null || echo "⚠️  No dist folder yet - build may have failed"

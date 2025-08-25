#!/bin/bash
# Quick fix script for shared-core build issues

echo "🔧 Fixing shared-core build issues..."
echo ""

# Make scripts executable
echo "Making scripts executable..."
chmod +x build.sh verify-build.sh

# Install dependencies
echo "Installing dependencies..."
pnpm install

# Clean any previous build attempts
echo "Cleaning previous build..."
rm -rf dist

# Try to build
echo "Building shared-core..."
pnpm build

# Check if build succeeded
if [ -d "dist" ] && [ -f "dist/index.js" ]; then
    echo ""
    echo "✅ Build successful!"
    echo "The shared-core package is now ready to use."
else
    echo ""
    echo "⚠️  Build failed. This is likely because internal dependencies need to be built first."
    echo ""
    echo "Please run from the repository root:"
    echo "  cd ../.. && pnpm build"
    echo ""
    echo "Then come back here and run:"
    echo "  pnpm build"
fi

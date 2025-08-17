#!/bin/bash
# Build Docker images for Gander Social development

set -e

echo "🔨 Building Gander Social Docker images..."

# Check if we have all necessary files
if [ ! -d "tsconfig" ]; then
    echo "❌ Error: tsconfig directory not found!"
    echo "Make sure you're running this from the repository root."
    exit 1
fi

if [ ! -f "pnpm-lock.yaml" ]; then
    echo "❌ Error: pnpm-lock.yaml not found!"
    echo "Run 'pnpm install' first to generate the lockfile."
    exit 1
fi

# Detect if we have gndr or need to use bsky
if [ -d "packages/gndr" ]; then
    APPVIEW_PACKAGE="gndr"
    echo "✓ Found gndr package"
else
    APPVIEW_PACKAGE="bsky"
    echo "⚠ Using bsky package (gndr not found)"
fi

# Build PDS image
echo "Building PDS image..."
docker build -t gander-social/pds:dev \
    -f packages/pds/Dockerfile \
    . || {
    echo "❌ PDS build failed!"
    echo "Trying simplified build..."
    docker build -t gander-social/pds:dev \
        -f Dockerfile.dev-simple \
        --build-arg PACKAGE=pds \
        .
}

# Build Gndr/Bsky image
echo "Building $APPVIEW_PACKAGE image..."
docker build -t gander-social/$APPVIEW_PACKAGE:dev \
    -f packages/$APPVIEW_PACKAGE/Dockerfile \
    . || {
    echo "❌ $APPVIEW_PACKAGE build failed!"
    echo "Trying simplified build..."
    docker build -t gander-social/$APPVIEW_PACKAGE:dev \
        -f Dockerfile.dev-simple \
        --build-arg PACKAGE=$APPVIEW_PACKAGE \
        .
}

echo "✅ Docker images built successfully!"
echo ""
echo "Images created:"
echo "  - gander-social/pds:dev"
echo "  - gander-social/$APPVIEW_PACKAGE:dev"
echo ""
echo "Start services with:"
echo "  docker-compose -f docker-compose.dev-env.yml up"
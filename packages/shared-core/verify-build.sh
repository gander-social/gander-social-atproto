#!/bin/bash
# Build verification and troubleshooting script for shared-core

echo "🔍 Verifying shared-core build environment..."
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if we're in the right directory
if [ ! -f "package.json" ] || [ ! -f "tsconfig.json" ]; then
    echo -e "${RED}❌ Error: Not in shared-core directory${NC}"
    echo "Please run this script from packages/shared-core/"
    exit 1
fi

# Check Node.js and pnpm
echo "1. Checking Node.js and pnpm..."
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    echo -e "${GREEN}✓ Node.js${NC}: $NODE_VERSION"
else
    echo -e "${RED}✗ Node.js not found${NC}"
    exit 1
fi

if command -v pnpm &> /dev/null; then
    PNPM_VERSION=$(pnpm --version)
    echo -e "${GREEN}✓ pnpm${NC}: $PNPM_VERSION"
else
    echo -e "${RED}✗ pnpm not found${NC}"
    echo "Install with: npm install -g pnpm"
    exit 1
fi

echo ""
echo "2. Checking dependencies..."

# Check if node_modules exists
if [ -d "node_modules" ]; then
    echo -e "${GREEN}✓ node_modules exists${NC}"
else
    echo -e "${YELLOW}⚠ node_modules missing${NC}"
    echo "Running: pnpm install"
    pnpm install
fi

echo ""
echo "3. Checking required internal packages..."

# List of required internal packages
REQUIRED_PACKAGES=(
    "@gander-social-atproto/common"
    "@gander-social-atproto/common-web"
    "@gander-social-atproto/syntax"
    "@gander-social-atproto/lexicon"
    "@gander-social-atproto/crypto"
    "@gander-social-atproto/identity"
    "@gander-social-atproto/xrpc"
    "@gander-social-atproto/xrpc-server"
)

MISSING_PACKAGES=()

for pkg in "${REQUIRED_PACKAGES[@]}"; do
    PKG_DIR="../../node_modules/$pkg"
    if [ -d "$PKG_DIR" ] && [ -f "$PKG_DIR/dist/index.js" ]; then
        echo -e "${GREEN}✓ $pkg${NC}"
    else
        echo -e "${RED}✗ $pkg${NC} - needs to be built"
        MISSING_PACKAGES+=("$pkg")
    fi
done

echo ""
echo "4. Checking TypeScript configuration..."

if [ -f "tsconfig.json" ] && [ -f "tsconfig.build.json" ]; then
    echo -e "${GREEN}✓ TypeScript config files exist${NC}"
else
    echo -e "${RED}✗ TypeScript config files missing${NC}"
fi

echo ""
echo "5. Checking source files..."

SOURCE_FILES=(
    "src/index.ts"
    "src/dependencies.ts"
    "src/internal.ts"
    "src/types.ts"
    "src/constants.ts"
    "src/errors.ts"
    "src/database.ts"
    "src/cache.ts"
    "src/auth.ts"
    "src/utils/server.ts"
    "src/utils/middleware.ts"
    "src/utils/config.ts"
)

MISSING_SOURCES=()

for file in "${SOURCE_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✓ $file${NC}"
    else
        echo -e "${RED}✗ $file${NC} - missing"
        MISSING_SOURCES+=("$file")
    fi
done

echo ""
echo "----------------------------------------"
echo "SUMMARY:"
echo "----------------------------------------"

if [ ${#MISSING_PACKAGES[@]} -eq 0 ] && [ ${#MISSING_SOURCES[@]} -eq 0 ]; then
    echo -e "${GREEN}✅ Everything looks good!${NC}"
    echo ""
    echo "You can now build with:"
    echo "  pnpm clean && pnpm build"
else
    echo -e "${YELLOW}⚠️  Some issues found:${NC}"
    
    if [ ${#MISSING_PACKAGES[@]} -gt 0 ]; then
        echo ""
        echo "Missing internal packages:"
        for pkg in "${MISSING_PACKAGES[@]}"; do
            echo "  - $pkg"
        done
        echo ""
        echo "To fix, run from the repository root:"
        echo "  pnpm build"
    fi
    
    if [ ${#MISSING_SOURCES[@]} -gt 0 ]; then
        echo ""
        echo "Missing source files:"
        for file in "${MISSING_SOURCES[@]}"; do
            echo "  - $file"
        done
    fi
fi

echo ""
echo "----------------------------------------"
echo "QUICK FIX COMMANDS:"
echo "----------------------------------------"
echo "# If dependencies are missing:"
echo "pnpm install"
echo ""
echo "# If internal packages need building (from repo root):"
echo "pnpm build"
echo ""
echo "# To build shared-core:"
echo "pnpm clean && pnpm build"
echo ""
echo "# Alternative: use the build script"
echo "chmod +x build.sh && ./build.sh"

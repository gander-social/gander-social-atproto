#!/bin/bash
# Quick fix script for Gander Social dev environment

echo "Fixing Gander Social dev environment..."

# Apply patches
cd packages/dev-env
if [ ! -f ".patched" ]; then
    echo "Applying patches to skip external service dependencies..."

    # Create a simple patch inline
    cat > temp.patch << 'EOF'
--- a/src/mock/index.ts
+++ b/src/mock/index.ts
@@ -514,7 +514,11 @@
   await thread.aliceAndBob(sc, sc.posts[alice][0].ref)
   await thread.bobAndCarol(sc, sc.posts[bob][0].ref)

-  await thread.mutes(sc)
+  // Skip mutes for Gander Social
+  if (process.env.SKIP_MUTE_OPERATIONS !== 'true') {
+    await thread.mutes(sc)
+  }
+
   await thread.blocks(sc)
EOF

    patch -p1 < temp.patch
    rm temp.patch
    touch .patched
    echo "Patches applied successfully"
fi

# Build the dev environment
cd ../..
echo "Building packages..."
make build

# Start services
echo "Starting local services..."
docker-compose -f docker-compose.dev-env.yml up -d

# Wait for services
echo "Waiting for services to be ready..."
sleep 10

# Run dev environment with overrides
echo "Starting Gander dev environment..."
cd packages/dev-env
SKIP_MUTE_OPERATIONS=true \
SKIP_REPORT_OPERATIONS=true \
SEED_SIMPLIFIED=true \
NODE_ENV=development \
pnpm run start
# packages/pds/Dockerfile
FROM node:20-alpine AS builder

# Install build dependencies
RUN apk add --no-cache python3 make g++ git

# Set working directory
WORKDIR /app

# Copy required files (these must exist)
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY tsconfig.json ./
COPY tsconfig/ ./tsconfig/
COPY packages/ ./packages/
COPY lexicons/ ./lexicons/

# Install pnpm
RUN npm install -g pnpm@8

# Install all dependencies
RUN pnpm install --frozen-lockfile --recursive

# Build all packages
RUN pnpm run build

# Production image
FROM node:20-alpine

# Install runtime dependencies
RUN apk add --no-cache sqlite openssl

# Create app directory
WORKDIR /app

# Create data directory
RUN mkdir -p /pds

# Copy built application and dependencies
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/packages /app/packages
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/pnpm-workspace.yaml /app/pnpm-workspace.yaml

# Set working directory to PDS package
WORKDIR /app/packages/pds

# Create a startup script
RUN echo '#!/bin/sh' > /app/start.sh && \
    echo 'cd /app/packages/pds' >> /app/start.sh && \
    echo '' >> /app/start.sh && \
    echo '# Run migrations if needed' >> /app/start.sh && \
    echo 'if [ "$RUN_MIGRATIONS" = "true" ]; then' >> /app/start.sh && \
    echo '  if [ -f "dist/db/migrations/index.js" ]; then' >> /app/start.sh && \
    echo '    node dist/db/migrations/index.js' >> /app/start.sh && \
    echo '  fi' >> /app/start.sh && \
    echo 'fi' >> /app/start.sh && \
    echo '' >> /app/start.sh && \
    echo '# Start the PDS server' >> /app/start.sh && \
    echo 'exec node dist/index.js' >> /app/start.sh && \
    chmod +x /app/start.sh

# Expose PDS port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/xrpc/_health', (r) => process.exit(r.statusCode === 200 ? 0 : 1))"

# Volume for data persistence
VOLUME ["/pds"]

# Environment variables (can be overridden)
ENV NODE_ENV=production \
    PDS_PORT=3000 \
    PDS_DATA_DIRECTORY=/pds \
    PDS_BLOBSTORE_DISK_LOCATION=/pds/blocks \
    PDS_DID_CACHE_MAX_TTL=3600000 \
    PDS_ID_RESOLVER_TIMEOUT=3000 \
    LOG_ENABLED=true

# Run the startup script
CMD ["/app/start.sh"]
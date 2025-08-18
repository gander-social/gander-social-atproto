# packages/gndr/Dockerfile
FROM node:20-alpine AS builder

# Install build dependencies
RUN apk add --no-cache python3 make g++ git

# Set working directory
WORKDIR /app

# Copy required files
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
RUN apk add --no-cache openssl

# Create app directory
WORKDIR /app

# Copy built application
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/packages /app/packages
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/pnpm-workspace.yaml /app/pnpm-workspace.yaml

# Determine which package exists and set working directory
RUN if [ -d "/app/packages/gndr" ]; then \
      echo "gndr" > /app/package_name; \
    elif [ -d "/app/packages/bsky" ]; then \
      echo "bsky" > /app/package_name; \
    else \
      echo "Error: Neither gndr nor bsky package found!"; exit 1; \
    fi

# Create startup script that works for both gndr and bsky
RUN echo '#!/bin/sh' > /app/start.sh && \
    echo 'PACKAGE_NAME=$(cat /app/package_name)' >> /app/start.sh && \
    echo 'cd /app/packages/$PACKAGE_NAME' >> /app/start.sh && \
    echo '' >> /app/start.sh && \
    echo '# Run migrations if needed' >> /app/start.sh && \
    echo 'if [ "$RUN_MIGRATIONS" = "true" ] && [ -f "dist/db/migrations/index.js" ]; then' >> /app/start.sh && \
    echo '  node dist/db/migrations/index.js' >> /app/start.sh && \
    echo 'fi' >> /app/start.sh && \
    echo '' >> /app/start.sh && \
    echo '# Start the Gndr/Bsky server' >> /app/start.sh && \
    echo 'exec node dist/index.js' >> /app/start.sh && \
    chmod +x /app/start.sh

# Expose Gndr port
EXPOSE 2585

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:2585/xrpc/_health', (r) => process.exit(r.statusCode === 200 ? 0 : 1))"

# Environment variables
ENV NODE_ENV=production \
    GNDR_PORT=2585 \
    GNDR_HOSTNAME=localhost \
    LOG_ENABLED=true \
    LOG_LEVEL=info

# Run the startup script
CMD ["/app/start.sh"]
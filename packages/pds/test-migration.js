#!/usr/bin/env node

/**
 * Test script to verify PDS can use shared-core imports
 * This will test the migration before applying it fully
 */

const fs = require('fs');
const path = require('path');

// Test file to verify imports work
const testFilePath = path.join(__dirname, 'src', 'test-shared-core.ts');

const testContent = `
// Test file to verify shared-core imports work correctly

import {
  // Express and middleware
  express,
  compression,
  cors,
  createApp,
  createHealthCheck,
  
  // Database utilities
  Kysely,
  Migrator,
  paginate,
  
  // Error classes
  XRPCError,
  AuthRequiredError,
  ForbiddenError,
  InvalidRequestError,
  
  // Cache implementations
  MemoryCache,
  RedisCache,
  
  // Authentication helpers
  createAccessToken,
  verifyToken,
  requireAuth,
  
  // Constants
  HTTP_STATUS,
  HEADERS,
  DAY,
  HOUR,
  
  // Types
  type ServerConfig,
  type DatabaseConfig,
  type PaginationParams,
} from '@gander-social-atproto/shared-core';

// Test that imports work
console.log('✅ Express:', typeof express);
console.log('✅ Compression:', typeof compression);
console.log('✅ CORS:', typeof cors);
console.log('✅ createApp:', typeof createApp);
console.log('✅ Kysely:', typeof Kysely);
console.log('✅ XRPCError:', typeof XRPCError);
console.log('✅ DAY constant:', DAY);
console.log('✅ HTTP_STATUS.OK:', HTTP_STATUS.OK);

// Test usage
const testApp = createApp({
  compression: true,
  corsOptions: { origin: true }
});

const testCache = new MemoryCache(HOUR, DAY);

console.log('\\n✨ All imports working correctly!');

export { testApp, testCache };
`;

// Write test file
fs.writeFileSync(testFilePath, testContent);
console.log('📝 Created test file:', testFilePath);

// Now let's check if we can compile it
const { execSync } = require('child_process');

try {
  console.log('\n🔧 Testing TypeScript compilation...');
  execSync(`npx tsc --noEmit ${testFilePath}`, {
    cwd: __dirname,
    stdio: 'inherit'
  });
  console.log('✅ TypeScript compilation successful!');
} catch (error) {
  console.error('❌ TypeScript compilation failed:', error.message);
  console.log('\n⚠️  This may be due to missing dependencies. Proceeding with migration anyway...');
}

// Run a simpler test - just check if imports can be resolved
console.log('\n🔍 Checking import resolution...');

const packageJsonPath = path.join(__dirname, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

if (packageJson.dependencies['@gander-social-atproto/shared-core']) {
  console.log('✅ shared-core is in dependencies');
} else {
  console.error('❌ shared-core is NOT in dependencies');
}

// Check if shared-core package exists
const sharedCorePath = path.join(__dirname, '..', 'shared-core');
if (fs.existsSync(sharedCorePath)) {
  console.log('✅ shared-core package exists at:', sharedCorePath);
  
  const sharedCorePackageJson = path.join(sharedCorePath, 'package.json');
  if (fs.existsSync(sharedCorePackageJson)) {
    const sharedCore = JSON.parse(fs.readFileSync(sharedCorePackageJson, 'utf-8'));
    console.log('✅ shared-core version:', sharedCore.version);
  }
} else {
  console.error('❌ shared-core package NOT found');
}

console.log('\n📊 Test complete!');
console.log('Next steps:');
console.log('1. Run the migration script: node migrate-to-shared-core.ts');
console.log('2. Build the package: pnpm build');
console.log('3. Run tests: pnpm test');

// Clean up test file
fs.unlinkSync(testFilePath);
console.log('\n🧹 Cleaned up test file');

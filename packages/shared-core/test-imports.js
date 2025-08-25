// Quick test to check if imports are working
console.log('Testing shared-core imports...\n');

try {
  // Test external dependencies
  console.log('Testing external dependencies:');
  require('express');
  console.log('✓ express');
  require('cors');
  console.log('✓ cors');
  require('compression');
  console.log('✓ compression');
  require('kysely');
  console.log('✓ kysely');
  require('ioredis');
  console.log('✓ ioredis');
  require('pino');
  console.log('✓ pino');
  
  console.log('\nTesting internal dependencies:');
  // Test internal dependencies (these will fail if not built)
  try {
    require('@gander-social-atproto/common');
    console.log('✓ @gander-social-atproto/common');
  } catch (e) {
    console.log('✗ @gander-social-atproto/common - needs to be built');
  }
  
  try {
    require('@gander-social-atproto/common-web');
    console.log('✓ @gander-social-atproto/common-web');
  } catch (e) {
    console.log('✗ @gander-social-atproto/common-web - needs to be built');
  }
  
  try {
    require('@gander-social-atproto/syntax');
    console.log('✓ @gander-social-atproto/syntax');
  } catch (e) {
    console.log('✗ @gander-social-atproto/syntax - needs to be built');
  }
  
  try {
    require('@gander-social-atproto/lexicon');
    console.log('✓ @gander-social-atproto/lexicon');
  } catch (e) {
    console.log('✗ @gander-social-atproto/lexicon - needs to be built');
  }
  
  try {
    require('@gander-social-atproto/crypto');
    console.log('✓ @gander-social-atproto/crypto');
  } catch (e) {
    console.log('✗ @gander-social-atproto/crypto - needs to be built');
  }
  
  try {
    require('@gander-social-atproto/identity');
    console.log('✓ @gander-social-atproto/identity');
  } catch (e) {
    console.log('✗ @gander-social-atproto/identity - needs to be built');
  }
  
  try {
    require('@gander-social-atproto/xrpc');
    console.log('✓ @gander-social-atproto/xrpc');
  } catch (e) {
    console.log('✗ @gander-social-atproto/xrpc - needs to be built');
  }
  
  try {
    require('@gander-social-atproto/xrpc-server');
    console.log('✓ @gander-social-atproto/xrpc-server');
  } catch (e) {
    console.log('✗ @gander-social-atproto/xrpc-server - needs to be built');
  }
  
  console.log('\n✅ All available dependencies are importable!');
  console.log('\nNext steps:');
  console.log('1. Install dependencies: pnpm install');
  console.log('2. Build dependent packages that show ✗ above');
  console.log('3. Run: pnpm build');
  
} catch (error) {
  console.error('\n❌ Error:', error.message);
  console.log('\nMake sure to run: pnpm install');
}

#!/usr/bin/env node

/**
 * Comprehensive test runner for PDS shared-core migration
 * This script will validate that all migrated imports work correctly
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

function log(message, color = colors.reset) {
  console.log(color + message + colors.reset);
}

function logSection(title) {
  console.log('\n' + colors.bright + colors.blue + '═'.repeat(60));
  console.log('  ' + title);
  console.log('═'.repeat(60) + colors.reset + '\n');
}

function checkFile(filePath, description) {
  if (fs.existsSync(filePath)) {
    log(`✅ ${description}`, colors.green);
    return true;
  } else {
    log(`❌ ${description} - NOT FOUND`, colors.red);
    return false;
  }
}

function analyzeImports(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const imports = {
    sharedCore: [],
    remaining: []
  };
  
  // Find all imports from shared-core
  const sharedCoreRegex = /import\s+(?:{[^}]+}|.*?)\s+from\s+['"]@gander-social-atproto\/shared-core['"]/g;
  const matches = content.match(sharedCoreRegex);
  
  if (matches) {
    imports.sharedCore = matches;
  }
  
  // Check for remaining direct imports that could be migrated
  const directImports = [
    /import.*from\s+['"]express['"]/,
    /import.*from\s+['"]cors['"]/,
    /import.*from\s+['"]compression['"]/,
    /import.*from\s+['"]kysely['"]/,
    /import.*from\s+['"]ioredis['"]/,
    /import.*from\s+['"]pino['"]/,
    /import.*from\s+['"]zod['"]/
  ];
  
  directImports.forEach(regex => {
    const match = content.match(regex);
    if (match) {
      imports.remaining.push(match[0]);
    }
  });
  
  return imports;
}

async function main() {
  logSection('PDS Shared-Core Migration Test');
  
  // 1. Check prerequisites
  log('Checking prerequisites...', colors.cyan);
  
  const pdsPath = __dirname;
  const sharedCorePath = path.join(__dirname, '..', 'shared-core');
  
  checkFile(path.join(pdsPath, 'package.json'), 'PDS package.json');
  checkFile(path.join(sharedCorePath, 'package.json'), 'Shared-core package.json');
  checkFile(path.join(sharedCorePath, 'src', 'index.ts'), 'Shared-core index.ts');
  
  // 2. Verify shared-core is in dependencies
  logSection('Dependency Check');
  
  const pdsPackageJson = JSON.parse(fs.readFileSync(path.join(pdsPath, 'package.json'), 'utf-8'));
  
  if (pdsPackageJson.dependencies['@gander-social-atproto/shared-core']) {
    log(`✅ shared-core is in dependencies (${pdsPackageJson.dependencies['@gander-social-atproto/shared-core']})`, colors.green);
  } else {
    log('❌ shared-core is NOT in dependencies', colors.red);
    log('  Add it with: pnpm add @gander-social-atproto/shared-core@workspace:^', colors.yellow);
  }
  
  // 3. Analyze migrated files
  logSection('Analyzing Migrated Imports');
  
  const filesToCheck = [
    { path: 'src/error.ts', name: 'Error handler' },
    { path: 'src/index.ts', name: 'Main index' },
    { path: 'src/db/index.ts', name: 'Database exports' }
  ];
  
  filesToCheck.forEach(file => {
    const fullPath = path.join(pdsPath, file.path);
    if (fs.existsSync(fullPath)) {
      log(`\n📄 ${file.name} (${file.path}):`, colors.bright);
      const imports = analyzeImports(fullPath);
      
      if (imports.sharedCore.length > 0) {
        log(`  ✅ Using shared-core imports (${imports.sharedCore.length} imports)`, colors.green);
        imports.sharedCore.forEach(imp => {
          log(`    → ${imp.replace(/\n/g, ' ').substring(0, 80)}...`, colors.cyan);
        });
      }
      
      if (imports.remaining.length > 0) {
        log(`  ⚠️  Direct imports that could be migrated:`, colors.yellow);
        imports.remaining.forEach(imp => {
          log(`    → ${imp}`, colors.yellow);
        });
      }
    }
  });
  
  // 4. Test TypeScript compilation
  logSection('TypeScript Compilation Test');
  
  const testFile = path.join(pdsPath, 'src', 'test-compile.ts');
  const testContent = `
// Test compilation with shared-core imports
import {
  express,
  cors,
  compression,
  XRPCError,
  AuthRequiredError,
  Kysely,
  Migrator,
  DAY,
  HOUR,
  HTTP_STATUS,
} from '@gander-social-atproto/shared-core';

// Test that types are resolved correctly
const app: express.Application = express();
const error = new XRPCError('InvalidRequest', 'Test error');
const statusCode: number = HTTP_STATUS.OK;
const oneDay: number = DAY;

console.log('Types resolved successfully');
`;
  
  fs.writeFileSync(testFile, testContent);
  
  try {
    log('Testing TypeScript compilation...', colors.cyan);
    execSync(`npx tsc --noEmit ${testFile}`, {
      cwd: pdsPath,
      stdio: 'pipe'
    });
    log('✅ TypeScript compilation successful!', colors.green);
  } catch (error) {
    log('❌ TypeScript compilation failed', colors.red);
    const errorMessage = error.stdout ? error.stdout.toString() : error.message;
    console.error(errorMessage);
    
    log('\n💡 This might be because:', colors.yellow);
    log('  1. shared-core needs to be built first', colors.yellow);
    log('  2. Dependencies need to be installed', colors.yellow);
    log('  3. TypeScript configuration needs updating', colors.yellow);
  } finally {
    // Clean up test file
    if (fs.existsSync(testFile)) {
      fs.unlinkSync(testFile);
    }
  }
  
  // 5. Count potential savings
  logSection('Migration Impact Analysis');
  
  const srcDir = path.join(pdsPath, 'src');
  const countImports = (dir) => {
    let count = { total: 0, migrated: 0, potential: 0 };
    
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !file.includes('test')) {
        const subCount = countImports(fullPath);
        count.total += subCount.total;
        count.migrated += subCount.migrated;
        count.potential += subCount.potential;
      } else if (file.endsWith('.ts')) {
        const content = fs.readFileSync(fullPath, 'utf-8');
        count.total++;
        
        if (content.includes('@gander-social-atproto/shared-core')) {
          count.migrated++;
        }
        
        // Count potential migrations
        const potentialPatterns = [
          /from ['"]express['"]/,
          /from ['"]cors['"]/,
          /from ['"]compression['"]/,
          /from ['"]kysely['"]/,
          /from ['"]ioredis['"]/,
        ];
        
        if (potentialPatterns.some(pattern => pattern.test(content))) {
          count.potential++;
        }
      }
    });
    
    return count;
  };
  
  const stats = countImports(srcDir);
  
  log(`📊 File Statistics:`, colors.bright);
  log(`  Total TypeScript files: ${stats.total}`);
  log(`  Files using shared-core: ${stats.migrated} (${Math.round(stats.migrated / stats.total * 100)}%)`, colors.green);
  log(`  Files with potential migrations: ${stats.potential} (${Math.round(stats.potential / stats.total * 100)}%)`, colors.yellow);
  
  // 6. Final recommendations
  logSection('Recommendations');
  
  if (stats.migrated < stats.potential) {
    log('📝 To complete the migration:', colors.bright);
    log('  1. Run the migration script: ts-node migrate-to-shared-core.ts', colors.cyan);
    log('  2. Build shared-core: cd ../shared-core && pnpm build', colors.cyan);
    log('  3. Build PDS: pnpm build', colors.cyan);
    log('  4. Run tests: pnpm test', colors.cyan);
    log('  5. Remove unnecessary dependencies from package.json', colors.cyan);
  } else {
    log('✨ Migration appears to be complete!', colors.green);
    log('  Next: Build and test the package', colors.cyan);
  }
  
  // 7. Dependency cleanup suggestions
  logSection('Dependency Cleanup');
  
  const duplicateDeps = [
    'compression',
    'cors',
    'express',
    'http-terminator',
    'ioredis',
    'jose',
    'kysely',
    'multiformats',
    'p-queue',
    'pino',
    'pino-http',
    'typed-emitter',
    'uint8arrays',
    'undici',
    'zod'
  ];
  
  const depsToRemove = duplicateDeps.filter(dep => pdsPackageJson.dependencies[dep]);
  
  if (depsToRemove.length > 0) {
    log('🧹 Dependencies that can be removed from package.json:', colors.yellow);
    depsToRemove.forEach(dep => {
      log(`  - ${dep}`, colors.yellow);
    });
    log(`\n  Run: pnpm remove ${depsToRemove.join(' ')}`, colors.cyan);
  } else {
    log('✅ No duplicate dependencies found', colors.green);
  }
  
  console.log('\n' + colors.bright + colors.green + '✨ Test complete!' + colors.reset);
}

// Run the test
main().catch(error => {
  log(`\n❌ Test failed: ${error.message}`, colors.red);
  process.exit(1);
});

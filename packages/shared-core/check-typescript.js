#!/usr/bin/env node

/**
 * Quick diagnostic script to check TypeScript installation
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔍 TypeScript Installation Diagnostic\n');
console.log('=' .repeat(50));

const sharedCorePath = path.join(__dirname);
console.log(`📁 Working directory: ${sharedCorePath}\n`);

// Check if node_modules exists
const nodeModulesPath = path.join(sharedCorePath, 'node_modules');
if (fs.existsSync(nodeModulesPath)) {
  console.log('✅ node_modules folder exists');
  
  // Check for TypeScript
  const tscPath = path.join(nodeModulesPath, '.bin', 'tsc');
  const tscCmdPath = path.join(nodeModulesPath, '.bin', 'tsc.cmd');
  const typescriptPath = path.join(nodeModulesPath, 'typescript');
  
  if (fs.existsSync(typescriptPath)) {
    console.log('✅ TypeScript package is installed');
    
    const packageJson = JSON.parse(
      fs.readFileSync(path.join(typescriptPath, 'package.json'), 'utf-8')
    );
    console.log(`   Version: ${packageJson.version}`);
  } else {
    console.log('❌ TypeScript package NOT found');
  }
  
  if (fs.existsSync(tscPath) || fs.existsSync(tscCmdPath)) {
    console.log('✅ tsc executable found in node_modules/.bin');
  } else {
    console.log('❌ tsc executable NOT found in node_modules/.bin');
  }
} else {
  console.log('❌ node_modules folder does NOT exist');
  console.log('   Run: pnpm install');
}

console.log('\n' + '=' .repeat(50));
console.log('📋 Package.json check:\n');

const packageJsonPath = path.join(sharedCorePath, 'package.json');
if (fs.existsSync(packageJsonPath)) {
  const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
  
  if (pkg.devDependencies && pkg.devDependencies.typescript) {
    console.log(`✅ TypeScript in devDependencies: ${pkg.devDependencies.typescript}`);
  } else {
    console.log('❌ TypeScript NOT in devDependencies');
  }
  
  console.log('\nBuild scripts:');
  if (pkg.scripts) {
    Object.entries(pkg.scripts).forEach(([name, cmd]) => {
      if (name.includes('build')) {
        console.log(`  ${name}: ${cmd}`);
      }
    });
  }
} else {
  console.log('❌ package.json NOT found');
}

console.log('\n' + '=' .repeat(50));
console.log('🔧 Recommended Actions:\n');

if (!fs.existsSync(nodeModulesPath)) {
  console.log('1. Install dependencies:');
  console.log('   pnpm install\n');
} else if (!fs.existsSync(path.join(nodeModulesPath, 'typescript'))) {
  console.log('1. Install TypeScript explicitly:');
  console.log('   pnpm add -D typescript\n');
}

console.log('2. Try building with direct path:');
console.log('   node_modules\\.bin\\tsc --build tsconfig.build.json\n');

console.log('3. Or use the build script:');
console.log('   build-windows.bat\n');

console.log('=' .repeat(50));

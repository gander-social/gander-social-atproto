#!/usr/bin/env node

/**
 * Migration script to update error imports from xrpc-server to shared-core
 * This script will update all PDS files to use shared-core for common errors
 */

const fs = require('fs')
const path = require('path')
const glob = require('glob')

// Errors that should come from shared-core
const SHARED_CORE_ERRORS = [
  'InvalidRequestError',
  'AuthRequiredError',
  'ForbiddenError',
  'ServerError'
]

// Track changes for reporting
const changes = {
  files: 0,
  imports: 0,
  errors: []
}

console.log('🔄 Starting PDS migration to shared-core...\n')

// Find all TypeScript files in PDS src directory
const files = glob.sync(path.join(__dirname, '../src/**/*.ts'))

console.log(`📁 Found ${files.length} TypeScript files to process\n`)

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8')
    let modified = false
    const relativePath = path.relative(path.join(__dirname, '..'), file)
    
    // Check if file imports from xrpc-server
    if (content.includes("from '@gander-social-atproto/xrpc-server'")) {
      // Extract import statement
      const importRegex = /import\s+{([^}]+)}\s+from\s+['"]@gander-social-atproto\/xrpc-server['"]/g
      let match
      
      while ((match = importRegex.exec(content)) !== null) {
        const importedItems = match[1]
          .split(',')
          .map(item => item.trim())
          .filter(Boolean)
        
        // Separate shared-core errors from xrpc-server specific imports
        const sharedCoreImports = []
        const xrpcServerImports = []
        
        importedItems.forEach(item => {
          // Handle 'as' aliases
          const baseName = item.split(' as ')[0].trim()
          if (SHARED_CORE_ERRORS.includes(baseName)) {
            sharedCoreImports.push(item)
          } else {
            xrpcServerImports.push(item)
          }
        })
        
        if (sharedCoreImports.length > 0) {
          // Build new import statements
          let newImports = ''
          
          // Add shared-core import if needed
          if (sharedCoreImports.length > 0) {
            newImports += `import { ${sharedCoreImports.join(', ')} } from '@gander-social-atproto/shared-core'\n`
          }
          
          // Keep xrpc-server import if there are remaining items
          if (xrpcServerImports.length > 0) {
            newImports += `import { ${xrpcServerImports.join(', ')} } from '@gander-social-atproto/xrpc-server'`
          }
          
          // Replace the original import
          content = content.replace(match[0], newImports.trim())
          modified = true
          changes.imports++
        }
      }
    }
    
    // Also check for standalone shared-core error imports
    SHARED_CORE_ERRORS.forEach(errorName => {
      const standaloneRegex = new RegExp(
        `import\\s+{\\s*${errorName}\\s*}\\s+from\\s+['"]@gander-social-atproto/xrpc-server['"]`,
        'g'
      )
      if (standaloneRegex.test(content)) {
        content = content.replace(
          standaloneRegex,
          `import { ${errorName} } from '@gander-social-atproto/shared-core'`
        )
        modified = true
        changes.imports++
      }
    })
    
    // Handle Kysely and other database imports
    if (content.includes("from 'kysely'")) {
      const kyselyRegex = /import\s+{([^}]+)}\s+from\s+['"]kysely['"]/g
      let match
      
      while ((match = kyselyRegex.exec(content)) !== null) {
        const importedItems = match[1]
        // Check if Migration or Migrator is imported
        if (importedItems.includes('Migration') || importedItems.includes('Migrator')) {
          // Add comment about shared-core
          const comment = '// Note: Consider using Migrator from @gander-social-atproto/shared-core\n'
          if (!content.includes(comment)) {
            const index = content.indexOf(match[0])
            content = content.slice(0, index) + comment + content.slice(index)
            modified = true
          }
        }
      }
    }
    
    // Handle Redis imports
    if (content.includes("from 'ioredis'")) {
      const redisRegex = /import\s+(?:{[^}]+}|[^'"]+)\s+from\s+['"]ioredis['"]/g
      if (redisRegex.test(content)) {
        // Add comment about shared-core cache utilities
        const comment = '// Note: Consider using cache utilities from @gander-social-atproto/shared-core\n'
        if (!content.includes(comment) && !content.includes('shared-core')) {
          const index = content.search(redisRegex)
          if (index > -1) {
            content = content.slice(0, index) + comment + content.slice(index)
            modified = true
          }
        }
      }
    }
    
    if (modified) {
      fs.writeFileSync(file, content)
      changes.files++
      console.log(`✅ Updated: ${relativePath}`)
    }
  } catch (error) {
    changes.errors.push({ file, error: error.message })
    console.error(`❌ Error processing ${file}: ${error.message}`)
  }
})

// Report results
console.log('\n' + '='.repeat(50))
console.log('📊 Migration Summary:')
console.log('='.repeat(50))
console.log(`✅ Files updated: ${changes.files}`)
console.log(`📦 Imports migrated: ${changes.imports}`)

if (changes.errors.length > 0) {
  console.log(`\n❌ Errors encountered: ${changes.errors.length}`)
  changes.errors.forEach(({ file, error }) => {
    console.log(`  - ${path.basename(file)}: ${error}`)
  })
}

console.log('\n💡 Next steps:')
console.log('1. Review the changes using: git diff')
console.log('2. Run tests: npm test')
console.log('3. Update package.json to remove duplicate dependencies')
console.log('4. Commit the changes')

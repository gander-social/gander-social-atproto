#!/usr/bin/env ts-node

/**
 * Script to migrate PDS package to use shared-core
 * This will update imports across all files
 */

import fs from 'fs/promises'
import path from 'path'
import glob from 'glob'
import { promisify } from 'util'

const globAsync = promisify(glob)

interface ImportReplacement {
  pattern: RegExp
  replacement: string
  description: string
}

const importReplacements: ImportReplacement[] = [
  // Error imports from xrpc-server
  {
    pattern: /import\s*{\s*([^}]+)\s*}\s*from\s*['"]@gander-social-atproto\/xrpc-server['"]/g,
    replacement: (match: string, imports: string) => {
      const errorImports = ['XRPCError', 'AuthRequiredError', 'ForbiddenError', 'InvalidRequestError', 'ServerError']
      const importList = imports.split(',').map(i => i.trim())
      const sharedCoreImports = importList.filter(i => errorImports.includes(i))
      const remainingImports = importList.filter(i => !errorImports.includes(i))
      
      let result = ''
      if (sharedCoreImports.length > 0) {
        result += `import { ${sharedCoreImports.join(', ')} } from '@gander-social-atproto/shared-core'`
      }
      if (remainingImports.length > 0) {
        if (result) result += '\n'
        result += `import { ${remainingImports.join(', ')} } from '@gander-social-atproto/xrpc-server'`
      }
      return result
    },
    description: 'Update error imports from xrpc-server to shared-core'
  },
  
  // Common utilities from @gander-social-atproto/common
  {
    pattern: /import\s*{\s*([^}]+)\s*}\s*from\s*['"]@gander-social-atproto\/common['"]/g,
    replacement: (match: string, imports: string) => {
      const sharedImports = ['DAY', 'HOUR', 'MINUTE', 'SECOND', 'wait', 'bailableWait']
      const importList = imports.split(',').map(i => i.trim())
      const sharedCoreImports = importList.filter(i => sharedImports.includes(i))
      const remainingImports = importList.filter(i => !sharedImports.includes(i))
      
      let result = ''
      if (sharedCoreImports.length > 0) {
        result += `import { ${sharedCoreImports.join(', ')} } from '@gander-social-atproto/shared-core'`
      }
      if (remainingImports.length > 0) {
        if (result) result += '\n'
        result += `import { ${remainingImports.join(', ')} } from '@gander-social-atproto/common'`
      }
      return result
    },
    description: 'Update common imports to shared-core'
  },
  
  // Express and middleware
  {
    pattern: /import\s+express\s+from\s+['"]express['"]/g,
    replacement: `import { express } from '@gander-social-atproto/shared-core'`,
    description: 'Update express import to shared-core'
  },
  {
    pattern: /import\s+compression\s+from\s+['"]compression['"]/g,
    replacement: `import { compression } from '@gander-social-atproto/shared-core'`,
    description: 'Update compression import to shared-core'
  },
  {
    pattern: /import\s+cors\s+from\s+['"]cors['"]/g,
    replacement: `import { cors } from '@gander-social-atproto/shared-core'`,
    description: 'Update cors import to shared-core'
  },
  
  // Database imports
  {
    pattern: /import\s*{\s*Kysely([^}]*)\s*}\s*from\s*['"]kysely['"]/g,
    replacement: (match: string, additionalImports: string) => {
      if (additionalImports.trim()) {
        return `import { Kysely${additionalImports} } from '@gander-social-atproto/shared-core'`
      }
      return `import { Kysely } from '@gander-social-atproto/shared-core'`
    },
    description: 'Update Kysely imports to shared-core'
  },
  
  // Redis
  {
    pattern: /import\s+(?:Redis|\*\s+as\s+Redis)\s+from\s+['"]ioredis['"]/g,
    replacement: `import { Redis } from '@gander-social-atproto/shared-core'`,
    description: 'Update Redis import to shared-core'
  },
  
  // Pino logging
  {
    pattern: /import\s+pino\s+from\s+['"]pino['"]/g,
    replacement: `import { pino } from '@gander-social-atproto/shared-core'`,
    description: 'Update pino import to shared-core'
  },
  {
    pattern: /import\s+pinoHttp\s+from\s+['"]pino-http['"]/g,
    replacement: `import { pinoHttp } from '@gander-social-atproto/shared-core'`,
    description: 'Update pino-http import to shared-core'
  },
  
  // Zod
  {
    pattern: /import\s*{\s*z\s*}\s*from\s+['"]zod['"]/g,
    replacement: `import { z } from '@gander-social-atproto/shared-core'`,
    description: 'Update zod import to shared-core'
  },
]

async function processFile(filePath: string): Promise<boolean> {
  try {
    let content = await fs.readFile(filePath, 'utf-8')
    let modified = false
    
    for (const { pattern, replacement, description } of importReplacements) {
      const originalContent = content
      if (typeof replacement === 'string') {
        content = content.replace(pattern, replacement)
      } else {
        // Handle function replacements
        let match
        const matches: Array<{ start: number; end: number; replacement: string }> = []
        
        // Reset the pattern
        pattern.lastIndex = 0
        
        while ((match = pattern.exec(originalContent)) !== null) {
          const newText = replacement(match[0], match[1] || '')
          matches.push({
            start: match.index,
            end: match.index + match[0].length,
            replacement: newText
          })
        }
        
        // Apply replacements in reverse order to maintain indices
        for (const m of matches.reverse()) {
          content = content.slice(0, m.start) + m.replacement + content.slice(m.end)
        }
      }
      
      if (content !== originalContent) {
        modified = true
        console.log(`  ✓ ${description}`)
      }
    }
    
    if (modified) {
      await fs.writeFile(filePath, content)
      return true
    }
    
    return false
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error)
    return false
  }
}

async function main() {
  console.log('🚀 Starting migration to shared-core...\n')
  
  const srcDir = path.join(__dirname, 'src')
  const pattern = '**/*.ts'
  
  const files = await globAsync(pattern, {
    cwd: srcDir,
    absolute: true,
    ignore: ['**/node_modules/**', '**/*.test.ts', '**/*.spec.ts']
  })
  
  console.log(`Found ${files.length} TypeScript files to process\n`)
  
  let modifiedCount = 0
  
  for (const file of files) {
    const relativePath = path.relative(__dirname, file)
    console.log(`Processing: ${relativePath}`)
    
    const wasModified = await processFile(file)
    if (wasModified) {
      modifiedCount++
      console.log(`  ✅ File updated\n`)
    } else {
      console.log(`  ⏭️  No changes needed\n`)
    }
  }
  
  console.log('=' .repeat(50))
  console.log(`\n✨ Migration complete!`)
  console.log(`📊 Modified ${modifiedCount} out of ${files.length} files`)
  
  if (modifiedCount > 0) {
    console.log('\n📝 Next steps:')
    console.log('1. Review the changes with: git diff')
    console.log('2. Build the package: pnpm build')
    console.log('3. Run tests: pnpm test')
    console.log('4. Commit the changes')
  }
}

// Run the migration
main().catch(console.error)

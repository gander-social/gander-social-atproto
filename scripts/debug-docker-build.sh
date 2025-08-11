#!/bin/bash
# Debug script to understand what files are needed

echo "🔍 Checking repository structure..."

echo ""
echo "Root files:"
ls -la | grep -E "^-" | awk '{print "  - " $9}'

echo ""
echo "Directories:"
ls -la | grep -E "^d" | grep -v "^\." | awk '{print "  - " $9}'

echo ""
echo "Checking for TypeScript configs:"
find . -maxdepth 2 -name "tsconfig*.json" -type f | head -20

echo ""
echo "Checking package structure:"
ls -la packages/ | grep -E "^d" | grep -v "^\." | awk '{print "  - packages/" $9}'

echo ""
echo "Checking for build-related files:"
for file in "turbo.json" "nx.json" "lerna.json" ".npmrc" ".nvmrc"; do
    if [ -f "$file" ]; then
        echo "  ✓ Found: $file"
    else
        echo "  ✗ Missing: $file"
    fi
done

echo ""
echo "Checking internal packages:"
if [ -d "packages/internal" ]; then
    ls -la packages/internal/ | grep -E "^d" | grep -v "^\." | awk '{print "  - packages/internal/" $9}'
fi

echo ""
echo "To fix build issues, ensure all these files are included in the Dockerfile COPY commands."
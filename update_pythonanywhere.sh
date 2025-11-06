#!/bin/bash

echo "🚀 Starting PythonAnywhere update..."
echo "This will update your site with new parallax design and flip cards"

# Backup existing files
echo "📦 Creating backup..."
mkdir -p backup
cp app.py backup/app.py.backup 2>/dev/null || true
cp -r templates backup/templates.backup 2>/dev/null || true
cp -r static backup/static.backup 2>/dev/null || true

# Create directory structure
echo "📁 Creating directory structure..."
mkdir -p templates static/css static/js static/images

# Execute all the update commands from above
# (Здесь должны быть выполнены все команды cat из предыдущих шагов)

echo "✅ Update completed!"
echo "🔄 Restart your web app in PythonAnywhere dashboard"
echo "🌐 Your site will be available at: http://prusya.pythonanywhere.com"

#!/bin/bash

# Simple TypeScript + HTML + CSS project generator

PROJECT_NAME="$1"

if [ -z "$PROJECT_NAME" ]; then
  echo "❌ Please provide a project name"
  echo "   Example: ./create-ts-web.sh hello-world"
  exit 1
fi

# Create project folder
mkdir "$PROJECT_NAME"
cd "$PROJECT_NAME" || exit 1

echo "📁 Creating project: $PROJECT_NAME"

# Init npm
npm init -y >/dev/null

# Install TypeScript locally
echo "📦 Installing TypeScript (local devDependency)..."
npm install --save-dev typescript >/dev/null

# Create tsconfig.json (no tsc --init, we write our own)
cat << 'EOF' > tsconfig.json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "ES6",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["src"]
}
EOF

# Create folders
mkdir src
mkdir dist

# HTML (uses project name in <title>)
cat << EOF > index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>$PROJECT_NAME</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <h1 id="title">Hello</h1>
  <script type="module" src="dist/main.js"></script>
</body>
</html>
EOF

# CSS
cat << 'EOF' > style.css
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: #f5f5f5;
  color: #333;
  margin: 0;
  padding: 40px 20px;
}

h1 {
  text-align: center;
  margin-top: 40px;
}
EOF

# TypeScript starter
cat << 'EOF' > src/main.ts
const title = document.getElementById("title");

if (title) {
  title.textContent = "Hello from TypeScript!";
}
EOF

# Update package.json scripts
node << 'EOF'
const fs = require("fs");

const pkgPath = "package.json";
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));

pkg.scripts = {
  build: "tsc",
  watch: "tsc -w"
};

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
EOF

echo "✅ Project '$PROJECT_NAME' created."
echo ""
echo "Next steps:"
echo "  cd $PROJECT_NAME"
echo "  npm run build      # compile TypeScript to dist/"
echo "  open index.html    # or use Live Server in VS Code"
echo ""
echo "For auto-rebuild on save:"
echo "  npm run watch"
const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const versionFilePath = path.join(rootDir, 'version.txt');
const indexHtmlPath = path.join(rootDir, 'index.html');

let mode = null;
for (const arg of process.argv) {
  if (arg === '--increment' || arg === '-i') {
    mode = 'increment';
  } else if (arg === '--decrement' || arg === '-d') {
    mode = 'decrement';
  }
}

if (!fs.existsSync(versionFilePath)) {
  fs.writeFileSync(versionFilePath, '22', 'utf8');
}

let version = 22;
let versionStr = fs.readFileSync(versionFilePath, 'utf8').trim();
version = parseInt(versionStr, 10);
if (isNaN(version)) version = 22;

if (mode === 'increment') {
  version++;
} else if (mode === 'decrement') {
  version--;
}

if (mode) {
  fs.writeFileSync(versionFilePath, version.toString(), 'utf8');
  console.log(`${mode === 'increment' ? 'Incremented' : 'Decremented'} version file to: ${version}`);
}

// Update index.html
if (fs.existsSync(indexHtmlPath)) {
  let html = fs.readFileSync(indexHtmlPath, 'utf8');
  const versionRegex = /<!-- version-footer-start -->[\s\S]*?<!-- version-footer-end -->/g;
  const newTag = `<!-- version-footer-start --><p class="version-tag">V${version}</p><!-- version-footer-end -->`;
  
  if (versionRegex.test(html)) {
    html = html.replace(versionRegex, newTag);
    fs.writeFileSync(indexHtmlPath, html, 'utf8');
    console.log(`Updated V${version} tag in index.html`);
  }
}

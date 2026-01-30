const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [400, 800, 1200];
const validExt = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'];

async function processFile(filePath) {
  try {
    const { dir, name, ext } = path.parse(filePath);
    const data = fs.readFileSync(filePath);
    for (const s of sizes) {
      const outName = `${name}-${s}.avif`;
      const outPath = path.join(dir, outName);
      await sharp(data).resize({ width: s }).avif({ quality: 50 }).toFile(outPath);
      console.log('created:', outPath);
    }
  } catch (e) {
    console.error('error processing', filePath, e.message);
  }
}

function walk(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const it of items) {
    const full = path.join(dir, it.name);
    if (it.isDirectory()) walk(full);
    else {
      const ext = path.extname(it.name);
      if (validExt.includes(ext)) processFile(full);
    }
  }
}

const photoDir = path.join(__dirname, '..', '..', 'site de vente', 'photo');
if (!fs.existsSync(photoDir)) {
  console.error('photo dir not found:', photoDir);
  process.exit(1);
}
walk(photoDir);

import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(import.meta.dirname, '..');
const heartPath = path.join(ROOT, 'public/images/logo/logo-heart.png');
const appDir = path.join(ROOT, 'app');
const MARGIN_RATIO = 0.1;

if (!fs.existsSync(heartPath)) {
  console.error(`Missing ${heartPath}. Add logo-heart.png before running generate-favicons.`);
  process.exit(1);
}

const sizes = [
  { file: 'favicon.ico', size: 32 },
  { file: 'icon.png', size: 192 },
  { file: 'apple-icon.png', size: 180 },
];

async function writeSquareIcon({ file, size }) {
  const margin = Math.round(size * MARGIN_RATIO);
  const inner = size - margin * 2;
  const artwork = await sharp(heartPath)
    .resize(inner, inner, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .toBuffer();

  const output = path.join(appDir, file);
  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: artwork, gravity: 'center' }])
    .png()
    .toFile(output);

  console.log(`Wrote ${output} (${size}x${size}, ${Math.round(MARGIN_RATIO * 100)}% margin)`);
}

for (const icon of sizes) {
  await writeSquareIcon(icon);
}

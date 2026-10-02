import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(import.meta.dirname, '..');
const PUBLIC = path.join(ROOT, 'public');
const MAX_BYTES = 150 * 1024;

const jobs = [
  {
    input: 'images/9_e041d01a-9b54-4e65-a423-b91cf3493d86_1790778166822.jpeg',
    outputs: [
      { file: 'images/hero-stylist.webp', width: 1140, height: 1018 },
      { file: 'images/og-image.webp', width: 1200, height: 630, fit: 'cover' },
    ],
  },
  {
    input: 'images/2_5be3a031-428d-4e15-8d0f-d6b5ad78456e_1790778166801.jpeg',
    outputs: [{ file: 'images/certificate.webp', width: 760, height: 950 }],
  },
  {
    input: 'images/3_78eabd8e-201c-4064-a621-0ea72eeec8fb_1790778166805.jpeg',
    outputs: [{ file: 'images/gallery-unicorn.webp', width: 800, height: 600 }],
  },
  {
    input: 'images/7_b2014115-9170-409b-b33a-588d04c6d1f1_1790778166815.jpeg',
    outputs: [{ file: 'images/gallery-play.webp', width: 800, height: 600 }],
  },
  {
    input: 'images/8_d5fe1812-bc0a-4c8b-838f-8a773055d4af_1790778166817.jpeg',
    outputs: [{ file: 'images/gallery-car.webp', width: 800, height: 600 }],
  },
  {
    input: 'images/9_e041d01a-9b54-4e65-a423-b91cf3493d86_1790778166822.jpeg',
    outputs: [{ file: 'images/gallery-stylist.webp', width: 800, height: 600 }],
  },
  {
    input: 'images/photos-lollipop/WhatsApp Image 2026-10-01 at 12.41.40.jpeg',
    outputs: [{ file: 'images/gallery-airplane.webp', width: 1200, height: 1200 }],
  },
  {
    input: 'videos/lollipop-poster.jpg',
    outputs: [{ file: 'videos/lollipop-poster.webp', width: 1280, height: 720 }],
  },
];

async function encodeUnderBudget(inputPath, outputPath, options) {
  const { width, height, fit = 'inside' } = options;

  for (const quality of [82, 74, 66, 58, 50]) {
    const buffer = await sharp(inputPath)
      .rotate()
      .resize(width, height, { fit, withoutEnlargement: true })
      .webp({ quality, effort: 6 })
      .toBuffer();

    if (buffer.length <= MAX_BYTES || quality === 50) {
      fs.writeFileSync(outputPath, buffer);
      return buffer.length;
    }
  }

  return 0;
}

const iconSvg = path.join(ROOT, 'app', 'icon.svg');
const appleIconPath = path.join(PUBLIC, 'apple-touch-icon.png');
if (fs.existsSync(iconSvg)) {
  await sharp(iconSvg).resize(180, 180).png().toFile(appleIconPath);
  console.log('apple-touch-icon.png: 180x180');
}

for (const job of jobs) {
  const inputPath = path.join(PUBLIC, job.input);
  if (!fs.existsSync(inputPath)) {
    console.warn(`Skipping missing input: ${job.input}`);
    continue;
  }

  for (const output of job.outputs) {
    const outputPath = path.join(PUBLIC, output.file);
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    const bytes = await encodeUnderBudget(inputPath, outputPath, output);
    console.log(`${output.file}: ${Math.round(bytes / 1024)} KB`);
  }
}

import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(import.meta.dirname, '..');
const INPUT_CANDIDATES = [
  path.join(ROOT, 'public/images/logo/logo-final.jpg'),
  path.join(ROOT, 'public/images/logo-final.jpeg'),
  path.join(ROOT, 'public/images/logo-final.jpg'),
];
const OUTPUT = path.join(ROOT, 'public/images/logo/logo-final.png');

const CROP = Number(process.env.LOGO_CROP ?? 12);
const TRIM_THRESHOLD = Number(process.env.LOGO_TRIM_THRESHOLD ?? 40);
const WHITE_THRESHOLD = Number(process.env.LOGO_WHITE_THRESHOLD ?? 225);
const SOFT_START = 215;

function findInput() {
  for (const candidate of INPUT_CANDIDATES) {
    if (fs.existsSync(candidate)) {
      return candidate;
    }
  }
  throw new Error(`Logo source not found. Checked:\n${INPUT_CANDIDATES.join('\n')}`);
}

function makeNearWhiteTransparent({ data, info, whiteThreshold, softStart }) {
  const { width, height, channels } = info;

  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const minChannel = Math.min(r, g, b);

    if (r > whiteThreshold && g > whiteThreshold && b > whiteThreshold) {
      data[i + 3] = 0;
      continue;
    }

    if (minChannel >= softStart && minChannel <= whiteThreshold) {
      const blend = (whiteThreshold - minChannel) / (whiteThreshold - softStart);
      data[i + 3] = Math.round(Math.max(0, Math.min(255, data[i + 3] * (1 - blend))));
    }
  }

  return { data, info };
}

async function processLogo() {
  const input = findInput();
  const meta = await sharp(input).metadata();
  const crop = Math.min(
    CROP,
    Math.floor((meta.width - 1) / 2),
    Math.floor((meta.height - 1) / 2),
  );

  if (meta.width <= crop * 2 || meta.height <= crop * 2) {
    throw new Error(`Image too small to crop ${crop}px from ${input}`);
  }

  const croppedBuffer = await sharp(input)
    .extract({
      left: crop,
      top: crop,
      width: meta.width - crop * 2,
      height: meta.height - crop * 2,
    })
    .toBuffer();

  const cropped = await sharp(croppedBuffer)
    .trim({ threshold: TRIM_THRESHOLD })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const processed = makeNearWhiteTransparent({
    data: cropped.data,
    info: cropped.info,
    whiteThreshold: WHITE_THRESHOLD,
    softStart: SOFT_START,
  });

  await sharp(processed.data, {
    raw: {
      width: processed.info.width,
      height: processed.info.height,
      channels: processed.info.channels,
    },
  })
    .png()
    .toFile(OUTPUT);

  const finalMeta = await sharp(OUTPUT).metadata();
  console.log(`Input: ${input}`);
  console.log(`Crop: ${crop}px per edge`);
  console.log(`Trim threshold: ${TRIM_THRESHOLD}`);
  console.log(`White threshold: ${WHITE_THRESHOLD}`);
  console.log(`Output: ${OUTPUT}`);
  console.log(`Final dimensions: ${finalMeta.width} x ${finalMeta.height}`);
}

processLogo().catch((error) => {
  console.error(error);
  process.exit(1);
});

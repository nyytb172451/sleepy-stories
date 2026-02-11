const sharp = require('sharp');

const width = 1600;
const height = 2560;
const imgWidth = 1500;
const imgHeight = Math.round(1500 * 1024 / 1792);

// SVG with title and author text
const svgText = `
<svg width="${width}" height="${height}">
  <style>
    .title { fill: white; font-family: Georgia, serif; font-size: 90px; font-weight: bold; }
    .subtitle { fill: #aabbcc; font-family: Georgia, serif; font-size: 40px; font-style: italic; }
    .author { fill: white; font-family: Georgia, serif; font-size: 50px; }
  </style>
  <text x="50%" y="180" text-anchor="middle" class="title">Pip and the</text>
  <text x="50%" y="290" text-anchor="middle" class="title">Night Train</text>
  <text x="50%" y="370" text-anchor="middle" class="subtitle">A Snoozy Stories Bedtime Book</text>
  <text x="50%" y="2450" text-anchor="middle" class="author">by Snoozy Stories</text>
</svg>`;

sharp('public/illustrations/pip/pip-01-cover.png')
  .resize(imgWidth, imgHeight)
  .toBuffer()
  .then(imgBuffer => {
    return sharp({
      create: {
        width: width,
        height: height,
        channels: 3,
        background: { r: 20, g: 20, b: 50 }
      }
    })
    .composite([
      {
        input: imgBuffer,
        top: 500,
        left: Math.round((width - imgWidth) / 2)
      },
      {
        input: Buffer.from(svgText),
        top: 0,
        left: 0
      }
    ])
    .jpeg({ quality: 95 })
    .toFile('kdp/pip-and-the-night-train/cover-kdp.jpg');
  })
  .then(() => console.log('Cover with text created!'))
  .catch(e => console.log('Error:', e.message));

import { createRequire } from 'module';
// Playwright wird global erwartet; Pfad bei Bedarf anpassen.
const require = createRequire(process.env.PLAYWRIGHT_DIR || '/opt/node-tools/node_modules/');
import { spawn } from 'child_process';
const { chromium } = require('playwright');
const [,, html, out, mode] = process.argv;
const FPS = 30, DUR = 54;
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
await page.addInitScript(() => { window.__capture = true; });
await page.goto('file://' + html, { waitUntil: 'networkidle' });
await page.evaluate(async () => { document.body.classList.add('capture'); await document.fonts.ready; });
await page.waitForTimeout(300);
if (mode === 'stills') {
  for (const t of out.split(',').map(Number)) {
    await page.evaluate(t => window.__render(t), t);
    await page.screenshot({ path: `${process.env.SP}/still_${t}.png` });
  }
} else {
  const ff = spawn('ffmpeg', ['-y', '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'mjpeg', '-i', '-',
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '18', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', out], { stdio: ['pipe', 'ignore', 'inherit'] });
  for (let i = 0; i < FPS * DUR; i++) {
    await page.evaluate(t => window.__render(t), i / FPS);
    const buf = await page.screenshot({ type: 'jpeg', quality: 95 });
    if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
  }
  ff.stdin.end();
  await new Promise(r => ff.on('close', r));
}
await browser.close();

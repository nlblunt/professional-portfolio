#!/usr/bin/env node
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1200, height: 630 } });
  const page = await context.newPage();
  const shots = [
    { url: 'https://www.52weeksoffun.net', path: 'public/assets/52-weeksoffun.png' },
    { url: 'https://www.southcoasthumanebrookings.org', path: 'public/assets/southcoast-humane.png' },
    { url: 'https://jen.52weeksoffun.net', path: 'public/assets/jen-52weeksoffun.png' }
  ];

  for (const s of shots) {
    try {
      console.log('Navigating to', s.url);
      await page.goto(s.url, { waitUntil: 'networkidle', timeout: 60000 });
      // wait a bit for dynamic content
      await page.waitForTimeout(1000);
      await page.screenshot({ path: s.path, fullPage: false });
      console.log('Saved:', s.path);
    } catch (err) {
      console.error('Error capturing', s.url, err.message);
    }
  }

  await browser.close();
})();

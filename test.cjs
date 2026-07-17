const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));
  page.on('console', msg => {
    if(msg.type() === 'error') console.log('CONSOLE ERROR:', msg.text());
  });
  console.log('Navigating...');
  await page.goto('http://localhost:5173/about', { waitUntil: 'networkidle' });
  console.log('Done.');
  await browser.close();
})();

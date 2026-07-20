import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const routes = [
  '/',
  '/chi-sono',
  '/contatti',
  '/servizi/analisi-portafoglio',
  '/servizi/pianificazione-previdenziale-tfr',
  '/servizi/piani-di-accumulo-pac',
  '/servizi/gestione-risorse-patrimonio',
  '/dove-sono/consulente-finanziario-piacenza',
  '/dove-sono/consulente-finanziario-cremona',
  '/privacy-policy'
];

async function main() {
  console.log('\n============================================================');
  console.log('  SSG - STATIC PRE-RENDERING GENERATOR');
  console.log('============================================================\n');

  // 1. Create a simple http server serving dist/ directory
  const server = http.createServer((req, res) => {
    let urlPath = req.url.split('?')[0]; // strip query parameters
    let filePath = path.join(__dirname, 'dist', urlPath === '/' ? 'index.html' : urlPath);

    // If file doesn't exist or is a directory, serve index.html (SPA Fallback)
    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      filePath = path.join(__dirname, 'dist', 'index.html');
    }

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading page');
      } else {
        // Set basic content type header
        if (filePath.endsWith('.html')) res.setHeader('Content-Type', 'text/html');
        else if (filePath.endsWith('.js')) res.setHeader('Content-Type', 'application/javascript');
        else if (filePath.endsWith('.css')) res.setHeader('Content-Type', 'text/css');

        res.writeHead(200);
        res.end(data);
      }
    });
  });

  const PORT = 9999;
  server.listen(PORT);
  console.log(`[OK] Temporary local server listening on port ${PORT}`);

  // 2. Launch Puppeteer
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  console.log('[OK] Headless browser launched');

  // 3. Prerender each route
  for (const route of routes) {
    console.log(`\n⏳ Prerendering: ${route}`);
    const page = await browser.newPage();
    
    // Set viewport
    await page.setViewport({ width: 1200, height: 800 });

    // Navigate to local server
    await page.goto(`http://localhost:${PORT}${route}`, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    // Extract rendered HTML
    const html = await page.content();

    // Create target directory in dist/
    const routeDir = path.join(__dirname, 'dist', route === '/' ? '' : route);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }

    // Write index.html
    fs.writeFileSync(path.join(routeDir, 'index.html'), html);
    console.log(`✅ Saved static page to: dist${route === '/' ? '' : route}/index.html`);
    
    await page.close();
  }

  // 4. Close browser and server
  await browser.close();
  server.close();
  console.log('\n============================================================');
  console.log('  SSG BUILD COMPLETED SUCCESSFULLY ✨');
  console.log('============================================================\n');
}

main().catch((err) => {
  console.error('[ERROR] Prerender failed:', err);
  process.exit(1);
});

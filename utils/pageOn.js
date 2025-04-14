export function registerEventListeners(page) {
    // Log failed network requests
    page.on('requestfailed', request => {
      console.error(`❌ Request failed: ${request.url()} | Reason: ${request.failure()?.errorText}`);
    });
  
    // DOM is ready
    page.on('domcontentloaded', () => {
      console.log('🚀 DOM content loaded.');
    });
  
    // All resources (CSS, JS, images) are loaded
    page.on('load', () => {
      console.log('✅ Full page load completed.');
    });
  
    // Log JS console messages
    page.on('console', msg => {
      console.log(`📋 Console [${msg.type()}]: ${msg.text()}`);
      if (msg.type() === 'error') {
        console.error(`❌ Console error: ${msg.text()}`);
      }
    });
  
    // Catch JS runtime errors on the page
    page.on('pageerror', error => {
      console.error(`💥 Uncaught Error: ${error.message}`);
    });
  }
  
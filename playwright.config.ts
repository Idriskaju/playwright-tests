import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // Directory for test files
  timeout: 30 * 1000, // Set test timeout (30 seconds)
  use: {
    headless: false, // Run tests in UI mode
    viewport: { width: 1280, height: 720 }, // Set default screen size
    ignoreHTTPSErrors: true, // Ignore SSL errors
    video: 'retain-on-failure', // Record videos on failures
    trace: 'on', // Enable tracing for debugging
  },


  reporter: [['html', { outputFolder: 'playwright-report' }]],
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    { name: 'firefox', use: { browserName: 'firefox' } },
    { name: 'webkit', use: { browserName: 'webkit' } },
  ],
});

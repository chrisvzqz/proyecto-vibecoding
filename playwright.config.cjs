const { defineConfig } = require('@playwright/test');

const baseURL = 'http://127.0.0.1:8000';

module.exports = defineConfig({
  testDir: './e2e',
  use: { baseURL },
  webServer: {
    command: 'npm start',
    url: baseURL,
  },
});

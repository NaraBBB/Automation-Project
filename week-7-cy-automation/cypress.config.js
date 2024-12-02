const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://dev.delekhomes.com',
    viewportWidth: 1400,  // Set to desired width, e.g., 1400 pixels
    viewportHeight: 900,  // Set to desired height, e.g., 900 pixels
  },
})
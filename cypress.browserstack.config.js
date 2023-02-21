const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 15000,
  env: {
    tags: "@Regression"
  },
  e2e: {
    baseUrl: 'https://www.advantageonlineshopping.com/#/',
    specPattern: 'cypress/e2e/**/cart.spec.js',
  },
  screenshotOnRunFailure: true,
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: 'reporter-config.json'
  },
  screenshotsFolder: 'cypress/reports/mochareports/screenshots',
  videosFolder: 'cypress/reports/mochareports/videos'
})

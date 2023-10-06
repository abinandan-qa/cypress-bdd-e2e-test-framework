const { defineConfig } = require('cypress')
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  defaultCommandTimeout: 15000,
  chromeWebSecurity: false,
  env: {
    tags: "@Regression",
    allure: true,
    // allureResultsPath: 'cypress/reports/mochareports',
    allureReuseAfterSpec: true
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      preprocessor.addCucumberPreprocessorPlugin(on, config);

      on(
          "file:preprocessor",browserify.default(config)
      );

      on('task', {
        log(message) {
          console.log(message)
          return null
        },
        table(message) {
          console.table(message)
          return null
        }
      })
      allureWriter(on, config);
      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
    baseUrl: 'https://www.ebay.com',

    specPattern: [
      'cypress/e2e/**/*.{js,jsx,ts,tsx}',
      'cypress/e2e/**/**/*.feature'
    ],
    excludeSpecPattern: [
      'cypress/e2e/**/*StepDefinition.js'
    ],
  },
  screenshotOnRunFailure: true,
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: 'reporter-config.json'
  },
  screenshotsFolder: 'cypress/reports/mochareports/screenshots',
  videosFolder: 'cypress/reports/mochareports/videos'
})

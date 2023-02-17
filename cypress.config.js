const { defineConfig } = require('cypress')
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

module.exports = defineConfig({
  defaultCommandTimeout: 15000,
  env: {
    tags: "@Regression"
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    async setupNodeEvents(on, config) {
      await preprocessor.addCucumberPreprocessorPlugin(on, config);

      on(
          "file:preprocessor",browserify.default(config)
      );

      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
    baseUrl: 'https://www.advantageonlineshopping.com/#/',
    specPattern: 'cypress/e2e/**/*.feature',
  },
  screenshotOnRunFailure: true,
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: 'reporter-config.json'
  },
  screenshotsFolder: 'cypress/reports/screenshots',
  videosFolder: 'cypress/reports/videos'
})

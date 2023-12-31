// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import '@shelex/cypress-allure-plugin'
import addContext from 'mochawesome/addContext';
import 'cypress-axe'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// https://docs.cypress.io/api/events/catalog-of-events#docusaurus_skipToContent_fallback
Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    // Adding screenshot to mochaawesome report
    const screenshot= `./screenshots/${Cypress.spec.name}/${runnable.parent.title}--${test.title}(failed).png`
    addContext({test}, screenshot);

    // Adding video to mochaawesome report
    const video= `./videos/${Cypress.spec.name}.mp4`
    addContext({test}, video);
  }
})

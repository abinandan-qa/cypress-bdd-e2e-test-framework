// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('getText', (locator) => {
    cy.get(locator).then(($el) => {
        return cy.wrap($el.text())
    })
})

Cypress.Commands.add('elementTextEquals', (locator,value) => {
    cy.get(locator).then(($el) => {
        expect($el.text()).to.eq(value)
    })
})

Cypress.Commands.add('elementHasText', (locator,value) => {
    cy.get(locator).should('have.text', value)
})

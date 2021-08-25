import { Given } from "cypress-cucumber-preprocessor/steps";

Given('I open Shopping Site', () => {
    cy.visit(Cypress.config("baseUrl"))
})
When('I go to {string} in the Product categories', (category) => {
    homePage.getCategories().contains(category).click()
})
And('I go to {string} in the Product categories', (category) => {
    homePage.getCategories().contains(category).click()
})
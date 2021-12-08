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
import ProductsListingPage from '../support/page-object/Products.Listing.Page';
import ProductsDetailsPage from '../support/page-object/Products.Details.Page';

Cypress.Commands.add('getText', {prevSubject: 'element'},
    ($element) => {
      return cy.wrap($element).invoke('text')
    },
)
Cypress.Commands.add('selectProduct',
    (productName) => {
      const productDetailsPage = new ProductsDetailsPage()
      const productListingPage = new ProductsListingPage()
      productListingPage.getProduct(productName).click()
      productDetailsPage.getAddToCart().click()
    },
)

// /<reference types= 'cypress'/>
import HomePage from '../../support/page-object/Home.Page';
describe('Testing the cart', function() {
  let data
  const homePage = new HomePage()
  before(function() {
    cy.fixture('productsDetails').then(function(testdata) {
      data = testdata
    })
  })

  it('adding product to the cart', function() {
    // visit site
    cy.visit(Cypress.config('baseUrl'))

    // go to speakers page
    homePage.getCategories().contains(data.productCategories.speakers).click()

    data.addToCartProducts.forEach((product) => {
      cy.selectProduct(product)
      cy.go('back')
    })
  })
})

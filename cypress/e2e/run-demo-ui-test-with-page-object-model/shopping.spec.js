import HomePage from '../../support/page-object/Home.Page';
import ProductsListingPage from '../../support/page-object/Products.Listing.Page';
import ProductsDetailsPage from '../../support/page-object/Products.Details.Page';
import Navbar from '../../support/page-object/Navbar';
import OrderPaymentPage from '../../support/page-object/Order.Payment.Page';
import CartPage from '../../support/page-object/Cart.Page';
import CreateAccountPage from "../../support/page-object/Create.Account.Page";

describe('Buy a product', function() {
  let data
  let messages
  let profile
  const homePage = new HomePage()
  const productDetailsPage = new ProductsDetailsPage()
  const productListingPage = new ProductsListingPage()
  const navbar = new Navbar()
  const cartPage = new CartPage()
  const orderPaymentPage = new OrderPaymentPage()
  const createAccountPage = new CreateAccountPage()

  before(function() {
    cy.fixture('productsDetails').then(function(testdata) {
      data = testdata
    })

    cy.fixture('messages').then(function(testdata) {
      messages = testdata
    })

    cy.fixture('profile').then(function(testdata) {
      profile = testdata
    })
  })

  it('Purchase a product', () => {
    // visit site
    cy.visit(Cypress.config('baseUrl'))

    // go to speakers page
    homePage.getCategories().contains(data.productCategories.speakers).click()

    // select a speaker
    productListingPage.getProduct(data.productname).click()

    // add product to cart
    productDetailsPage.getAddToCart().click()

    // go to cart
    navbar.getCart().click()

    // checkout
    cartPage.getCheckoutBtn().click()

    // verify price
    cy.wait(5000) // wait for the cart mini window to close
    orderPaymentPage.getOrderTotal().should('have.text', data.price)

    // register to place order
    let username = 'TA' + Date.now()
    cy.get('button#registration_btnundefined').click()
    createAccountPage.getUsername().type(username)
    createAccountPage.getPassword().type(password)
    createAccountPage.getEmail().type(username + '@test.com')
    createAccountPage.getConfirmPassword().type(password, {force: true})
    createAccountPage.getIAgreeCheckbox().check()
    createAccountPage.getRegisterButton().click()

    // click next in shipping details
    orderPaymentPage.getNextBtn().click('bottom')

    // make payment using safepay option and verify message
    orderPaymentPage.getPayNowBtn().click()
    orderPaymentPage.getOrderStatusMessage().should('have.text', messages.orderPlacedMsg)

    // log order details
    cy.wait(3000)
    orderPaymentPage.getOrderNumber().getText().then((text) => {
      cy.log(text)
    })
  })
})

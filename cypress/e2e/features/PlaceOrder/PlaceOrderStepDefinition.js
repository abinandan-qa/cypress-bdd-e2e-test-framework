import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import CartPage from '../../../support/page-object/Cart.Page';
import HomePage from '../../../support/page-object/Home.Page';
import Navbar from '../../../support/page-object/Navbar';
import LoginPage from '../../../support/page-object/Login.Page';
import OrderPaymentPage from '../../../support/page-object/Order.Payment.Page';
import ProductsDetailsPage from '../../../support/page-object/Products.Details.Page';
import ProductsListingPage from '../../../support/page-object/Products.Listing.Page';
import CreateAccountPage from '../../../support/page-object/Create.Account.Page';

const homePage = new HomePage()
const productListingPage = new ProductsListingPage()
const productDetailsPage = new ProductsDetailsPage()
const navbar = new Navbar()
const loginPage = new LoginPage()
const cartPage = new CartPage()
const orderPaymentPage = new OrderPaymentPage()
const createAccountPage = new CreateAccountPage()
let username, password

Given('I create a test user', () => {
  username='T' + Date.now()
  password='Test@12345'
  navbar.getMenuUserLink().click()
  loginPage.getCreateNewAccountLink().click()
  createAccountPage.getUsername().type(username)
  createAccountPage.getPassword().type(password)
  createAccountPage.getEmail().type('testautomation@test.com')
  cy.wait(2000)
  createAccountPage.getConfirmPassword().type(password, {force: true})
  createAccountPage.getIAgreeCheckbox().check()
  createAccountPage.getRegisterButton().click()

})

Given('I open Shopping Site', () => {
  cy.visit(Cypress.config('baseUrl'))
})
When('I go to {string} in the Product categories', (category) => {
  homePage.getCategories().contains(category).click()
})
When('I select  {string}', (product) => {
  productListingPage.getProduct(product).click()
})
When('I add products to the cart', (dataTable)=>{
  homePage.getCategories().contains(dataTable.rawTable[1][0]).click()
  productListingPage.getProduct(dataTable.rawTable[1][1]).click()
  productDetailsPage.getAddToCart().click()
  cy.visit(Cypress.config('baseUrl'))
})
When('I add the product to cart', () => {
  productDetailsPage.getAddToCart().click()
})
When('I go to cart page', () => {
  navbar.getCart().click()
})
When('I checkout', () => {
  cartPage.getCheckoutBtn().click()
})
When('I verify price', () => {
  cy.wait(5000) // wait for the cart mini window to close
  orderPaymentPage.getOrderTotal().should('have.text', data.price)
})
When('I make payment using master credit', () => {
  orderPaymentPage.getNextBtn().click('bottom')

  // click on pay now in payment method and verify message
  orderPaymentPage.getMasterCreditRadioBtn().click()
  orderPaymentPage.getCardNumber().type('123456789012')
  cy.wait(2000)
  orderPaymentPage.getCVVNumber().type('1234')
  orderPaymentPage.getCardHolderName().type(username)
  orderPaymentPage.getSaveCardCheckbox().uncheck()
  orderPaymentPage.getPayNowBtn().click()

})

When('I make payment', () => {
  orderPaymentPage.getNextBtn().click('bottom')
  orderPaymentPage.getSafePayUsername().type('safepay')
  orderPaymentPage.getSafePayPassword().type('Safepay1')
  orderPaymentPage.getSaveSafePayCheckbox().uncheck()
  orderPaymentPage.getSafePayPayNowBtn().click()

})
Then('I see success message {string}', (message) => {
  orderPaymentPage.getOrderStatusMessage().should('have.text', message)
})
Then('Order number is generated', () => {
  cy.wait(3000)
  orderPaymentPage.getOrderNumber().getText().then((text) => {
    cy.log(text)
  })
})

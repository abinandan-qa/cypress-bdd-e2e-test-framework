import HomePage from "../support/page-object/Home.Page";
import ProductsListingPage from "../support/page-object/Products.Listing.Page";
import ProductsDetailsPage from "../support/page-object/Products.Details.Page";
import Navbar from "../support/page-object/Navbar";
import OrderPaymentPage from "../support/page-object/Order.Payment.Page";
import CartPage from "../support/page-object/Cart.Page";

describe('Buy a product', function() {
    let data
    const homePage = new HomePage()
    const productDetailsPage = new ProductsDetailsPage()
    const productListingPage = new ProductsListingPage()
    const navbar = new Navbar()
    const cartPage = new CartPage()
    const orderPaymentPage = new OrderPaymentPage()

    before(function (){
        cy.fixture('productsDetails').then(function (testdata){
            data = testdata
        })
    })

    it('Purchase a product', () => {

        //visit site
        cy.visit('https://www.advantageonlineshopping.com/#/')

        //go to speakers page
        homePage.getSpeaker().click()

        //select a speaker
        productListingPage.getProduct(data.productname).click()

        //add product to cart
        productDetailsPage.getAddToCart().click()

        //go to cart
        navbar.getCart().click()

        //checkout
        cartPage.getCheckoutBtn().click()

        //verify price
        cy.wait(5000) //wait for the cart mini window to close
        orderPaymentPage.getOrderTotal().should('have.text', data.price)

        //login to place order
        orderPaymentPage.getUsername().type('testautomation')
        orderPaymentPage.getPassword().type('Test@12345')
        orderPaymentPage.getLoginBtn().click()

        //click next in shipping details
        orderPaymentPage.getNextBtn().click('bottom')

        //click on pay now in payment method and verify message
        orderPaymentPage.getPayNowBtn().click()
        orderPaymentPage.getOrderStatusMessage().should('have.text','Thank you for buying with Advantage')

        //log order details
        cy.wait(3000)
        orderPaymentPage.getOrderNumber().getText().then(text => {cy.log(text)})
    })
})

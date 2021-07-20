import HomePage from "../support/page-object/Home.Page";
import ProductsListingPage from "../support/page-object/Products.Listing.Page";
import ProductsDetailsPage from "../support/page-object/Products.Details.Page";

describe('Buy a product', function() {
    let data
    const homePage = new HomePage()
    const productDetailsPage = new ProductsDetailsPage()
    const productListingPage = new ProductsListingPage()

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
        cy.get('#shoppingCartLink').click()

        //checkout
        cy.get('#checkOutButton').click()

        //verify price and login to place order
        cy.wait(5000) //wait for the cart mini window to close
        cy.elementTextEquals('.roboto-bold > .roboto-medium', data.price)
        cy.get('[name="usernameInOrderPayment"]').type('testautomation')
        cy.get('[name="passwordInOrderPayment"]').type('Test@12345')
        cy.get('#login_btnundefined').click()

        //click next in shipping details
        cy.get('#next_btn').click('bottom')

        //click on pay now in payment method and verify message
        cy.get('[name="pay_now_btn_MasterCredit"]').click()
        cy.elementHasText('#orderPaymentSuccess h2 span','Thank you for buying with Advantage')

        //log order details
        cy.wait(3000)
        cy.getText('#trackingNumberLabel').then((orderNo) => {
            cy.log("Order No. --------->"+orderNo)
        })
    })
})

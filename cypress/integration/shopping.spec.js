import HomePage from "../support/page-object/Home.Page";
import ProductsListingPage from "../support/page-object/Products.Listing.Page";
import ProductsDetailsPage from "../support/page-object/Products.Details.Page";

describe('Buy a product', () => {
beforeEach(function (){
        cy.fixture('productsDetails').then(function (data){
            this.data = data
        })
    })
    it('move to speakers', () => {

        //visit site
        cy.visit('https://www.advantageonlineshopping.com/#/')

        //go to speakers page
        const homePage = new HomePage()
        homePage.getSpeaker().click();
        //select a speaker
       const productListingPage = new ProductsListingPage()
        productListingPage.getProduct(this.data.productName).click()

        //capture price in description and add product to cart
        let price=''
        price = cy.getPrice()

        const productDetailsPage = new ProductsDetailsPage()
        productDetailsPage.getAddToCart().click()

        //go to cart
        cy.get('#shoppingCartLink').click()

        //checkout
        cy.get('#checkOutButton').click()

        //verify price and login to place order
        cy.wait(5000) //wait for the cart mini window to close
        cy.get('.roboto-bold.totalText.ng-binding span').then(($el) => {
            expect($el.text()).to.eq(price)
        })
        cy.get('[name="usernameInOrderPayment"]').type('testautomation')
        cy.get('[name="passwordInOrderPayment"]').type('Test@12345')
        cy.get('#login_btnundefined').click()

        //click next in shipping details
        cy.get('#next_btn').click('bottom')

        //click on pay now in payment method and verify message
        cy.get('[name="pay_now_btn_MasterCredit"]').click()
        cy.get('#orderPaymentSuccess h2 span').should('have.text', 'Thank you for buying with Advantage')

        //log order details
        cy.wait(1000)
        let orderNo = ''
        cy.get('#orderNumberLabel').then(($el) => {
            orderNo = $el.text()
        })
        cy.log("Order No. ---------> "+orderNo)
    })
})

describe("Shop for a Speaker",()=>{
    it("Place an order for speaker", ()=>{
        cy.visit("www.advantageonlineshopping.com")
        cy.get('#speakersImg').click()
        cy.contains("Bose SoundLink Wireless Speaker").click()
        cy.get("button[name=save_to_cart]").click()
        cy.get('#shoppingCartLink').click()
        cy.get('button[id=checkOutButton]').click()

        cy.get('input[name=usernameInOrderPayment]').type("testautomation")
        cy.get('input[name=passwordInOrderPayment]').type("Test@12345")
        cy.get('button[id=login_btnundefined]').click()
        cy.get('button[id=next_btn]').click()
        cy.get("button[id=pay_now_btn_MasterCredit]").click()

        cy.get('#orderPaymentSuccess h2 span').should("have.text","Thank you for buying with Advantage")
    })
})

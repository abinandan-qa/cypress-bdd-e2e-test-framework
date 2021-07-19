describe("Getting started with Cypress",()=>{
    it("Make an assertion",()=>{
        cy.visit("https://example.cypress.io/")
        cy.contains("type").click()

        cy.url().should('include','/commands/actions')
        expect(true).to.equal(true)

        //cy.get('#email1').type('fake@gmail.com').should("have.value","fake@gmail.com")
        cy.get("#email1").type("fake@gmail.com").should("have.value","fake@gmail.com")
    })
})

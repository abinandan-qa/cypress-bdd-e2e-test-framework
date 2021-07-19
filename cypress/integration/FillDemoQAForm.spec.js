describe("Fill form on demoQA website",function(){
    it('Fill Form Details',function(){
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('#firstName').type('Raghav')
        cy.get('#lastName').type('Gupta')
    })
})


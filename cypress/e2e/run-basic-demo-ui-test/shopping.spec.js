describe('Buy a product', function() {
  let example
  before(function() {
    cy.fixture('example.json').then(function(data) {
      example = data
    })
  })

  it('move to speakers', () => {
    // visit site
    cy.visit('https://www.advantageonlineshopping.com/#/')

    // go to speakers page
    cy.get('#speakersImg').click()

    // select a speaker
    cy.contains(example.singleproduct).click()

    // capture price in description and add product to cart
    cy.get('button[name="save_to_cart"]').click()

    // go to cart
    cy.get('#shoppingCartLink').click()

    // checkout
    cy.wait(2000)
    cy.get('#checkOutButton').click()

    // register to place order
    const username = 'TA' + Date.now()
    cy.get('button#registration_btnundefined').click()
    cy.get('input[name=usernameRegisterPage]').type(username)
    cy.get('input[name=passwordRegisterPage]').type('Test@12345')
    cy.get('input[name=emailRegisterPage]').type(username + '@Test.com')
    cy.wait(2000)
    cy.get('input[name=confirm_passwordRegisterPage]').type('Test@12345', {force: true})
    cy.get('input[name=i_agree]').click()
    cy.get('button#register_btnundefined').click()

    // click next in shipping details
    cy.get('#next_btn').click('bottom')

    // make payment via safepay
    cy.get('input[name=safepay_username]').type('TestSafePay')
    cy.get('input[name=safepay_password]').type('Safe@12345')
    cy.get('button#pay_now_btn_SAFEPAY').click()

    cy.get('#orderPaymentSuccess h2 span').should('be.visible')
    cy.get('#orderPaymentSuccess h2 span').should('have.text', 'Thank you for buying with Advantage')

    // log order details
    let orderNo = ''
    cy.get('#orderNumberLabel').then((el) => {
      orderNo = el.text()
      cy.log('Order No. ---------> '+orderNo)
    })
  })
})

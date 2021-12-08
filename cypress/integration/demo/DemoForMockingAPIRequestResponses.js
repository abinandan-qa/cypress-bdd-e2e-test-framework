describe('API request response test', function() {
  let resp
  const accountIdRE = /<ns2:userId>(.*?)<\/ns2:userId>/
  const sessionRE = /<ns2:sessionId>(.*?)<\/ns2:sessionId>/
  const authRE = /<ns2:t_authorization>(.*?)<\/ns2:t_authorization>/

  before(()=> {
    cy.request({
      method: 'POST',
      url: 'https://www.advantageonlineshopping.com//accountservice/ws/AccountLoginRequest', // baseUrl is prepended to url
      body: '<?xml version="1.0" encoding="UTF-8"?>' +
          '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">' +
          '<soap:Body><AccountLoginRequest xmlns="com.advantage.online.store.accountservice"><email></email><loginPassword>Test@12345</loginPassword><loginUser>testautomation</loginUser>' +
          '</AccountLoginRequest></soap:Body></soap:Envelope>',
    }).then((response)=>{
      expect(response.isOkStatusCode)
      resp = response.body
      cy.request({
        method: 'POST',
        url: `https://www.advantageonlineshopping.com/order/api/v1/carts/${resp.match(accountIdRE)[1]}/product/25/color/55CDD5`,
        form: true,
        body: {sessionId: resp.match(sessionRE)[1]},
        headers: {
          Cookie: `JSESSIONID=${resp.match(sessionRE)[1]}; _ga=GA1.2.1856705040.1626768638; _gid=GA1.2.978028705.1631684547; _gat=1`,
          Authorization: `Basic ${resp.match(authRE)[1]}`,
        },
      }).then((response) => {
        expect(response.isOkStatusCode)
      })
    })
  })

  it('should be able to make an http request and validate the response', function() {
    cy.visit('https://www.advantageonlineshopping.com/#/shoppingCart')
    cy.get('#hrefUserIcon').click()
    cy.get('input[name=\'username\']').type('testautomation')
    cy.get('input[name=\'password\']').type('Test@12345')
    cy.get('#sign_in_btnundefined').click()
    cy.get('#checkOutButton').click()

    // click next in shipping details
    cy.get('#next_btn').click('bottom')

    // click on pay now in payment method and verify message
    cy.get('[name="pay_now_btn_MasterCredit"]').click()

    cy.get('#orderPaymentSuccess h2 span').should('be.visible')
    cy.get('#orderPaymentSuccess h2 span').should('have.text', 'Thank you for buying with Advantage')

    // log order details
    let orderNo = ''
    cy.get('#orderNumberLabel').then((el) => {
      orderNo = el.text()
      cy.log('Order No. ---------> '+orderNo)
    })
  });
})


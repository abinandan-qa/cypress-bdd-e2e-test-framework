class OrderPaymentPage {
  getOrderTotal() {
    return cy.get('.totalValue')
  }

  getUsername() {
    return cy.get('[name="usernameInOrderPayment"]')
  }

  getPassword() {
    return cy.get('[name="passwordInOrderPayment"]')
  }

  getLoginBtn() {
    return cy.get('#login_btnundefined')
  }

  getNextBtn() {
    return cy.get('#next_btn')
  }

  getSafePayUsername() {
    return cy.get('input[name=safepay_username]')
  }

  getSafePayPassword() {
    return cy.get('input[name=safepay_password]')
  }

  getSaveSafePayCheckbox() {
    return cy.get('input[name=save_safepay]')
  }

  getSafePayPayNowBtn() {
    return cy.get('button#pay_now_btn_SAFEPAY')
  }

  getMasterCreditRadioBtn() {
    return cy.get('input[name=masterCredit]')
  }

  getCardNumber() {
    return cy.get('input[name=card_number]')
  }

  getCVVNumber() {
    return cy.get('input[name=cvv_number]')
  }

  getCardHolderName() {
    return cy.get('input[name=cardholder_name]')
  }

  getPayNowBtn() {
    return cy.get('button#pay_now_btn_ManualPayment')
  }

  getSaveCardCheckbox() {
    return cy.get('input[name=save_master_credit]')
  }

  getOrderStatusMessage() {
    return cy.get('#orderPaymentSuccess h2 span')
  }

  getOrderNumber() {
    return cy.get('#trackingNumberLabel')
  }
}

export default OrderPaymentPage

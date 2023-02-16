class CreateAccountPage {
  getUsername() {
    return cy.get('input[name=usernameRegisterPage]')
  }
  getEmail() {
    return cy.get('input[name=emailRegisterPage]')
  }
  getPassword() {
    return cy.get('input[name=passwordRegisterPage]')
  }
  getConfirmPassword() {
    return cy.get('input[name=confirm_passwordRegisterPage]')
  }
  getIAgreeCheckbox() {
    return cy.get('input[name=i_agree]')
  }
  getRegisterButton() {
    return cy.get('button#register_btnundefined')
  }
}

export default CreateAccountPage

class LoginPage {
  getCreateNewAccountLink() {
    return cy.get('a.create-new-account')
  }
}

export default LoginPage

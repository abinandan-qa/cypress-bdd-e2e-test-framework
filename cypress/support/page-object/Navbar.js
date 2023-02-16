class Navbar {
  getCart() {
    return cy.get('#shoppingCartLink')
  }
  getMenuUserLink() {
    return cy.get('a#menuUserLink')
  }
}

export default Navbar

class ProductsListingPage {
  getProduct(productName) {
    return cy.contains(productName) // 'Bose SoundLink Wireless Speaker'
  }
}
export default ProductsListingPage

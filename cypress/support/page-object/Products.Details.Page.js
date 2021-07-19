class ProductsDetailsPage{
    getAddToCart(){
     return cy.get('button[name="save_to_cart"]')
    }
}
export default ProductsDetailsPage

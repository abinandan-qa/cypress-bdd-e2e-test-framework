class ProductsDetailsPage{
    getAddToCart(){
     return cy.get('button[name="save_to_cart"]')
    }

    getPrice(){
        return cy.get('#Description h2')
    }
}
export default ProductsDetailsPage

class HomePage {
  shopByCategoryButton() {
    return cy.get("#gh-shop-a");
  }
  searchTextBox(){
    return cy.get('[type="text"]');
  }
  searchButton(){
    return cy.get('#gh-btn')
  }
  resultsFirstResultHyperlink(){
    return cy.get('.s-item__title > span')
  }
}
export default HomePage;

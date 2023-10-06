class CategoryPage {
  allFiltersButton() {
    return cy.get(".brm__all-filters");
  }
  priceOption() {
    return cy.get(`[data-aspecttitle*='price']`);
  }
  itemLocationOption(){
    return cy.get(`[data-aspecttitle*='location']`);
  }
  priceFromTextBox(){
    return cy.get(':nth-child(2) > .x-textrange__block > .x-textrange__input');
  }
  priceToTextBox(){
    return cy.get(':nth-child(4) > .x-textrange__block > .x-textrange__input');
  }
  filterTagsApplied(){
    return cy.get('.brm__aspect-item--applied a > span[class="brm__item-label"]') 
  }
}
export default CategoryPage;

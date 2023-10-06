class CommonPage {
  getCategoryLinkByName(categoryValue) {
    return cy.contains(categoryValue);
  }
}
export default CommonPage;

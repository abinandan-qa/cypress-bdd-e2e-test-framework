import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CommonPage from "../../../../support/page-object/Common.Page";
import HomePage from "../../../../support/page-object/Home.Page";
import CategoryPage from "../../../../support/page-object/Category.Page";

const commonPage = new CommonPage();
const homePage = new HomePage();
const categoryPage = new CategoryPage();

let screenSizeValues = [];
let priceRange;
let itemLocation;

function sanitizePriceRange(value) {
  // Extract the numbers from the input string
  const numbers = value.match(/\d+(\,\d{3})*(\.\d+)?/g);
  const convertedNumbers = numbers.map((number) =>
    parseInt(number.replace(/,/g, ""), 10)
  );
  const sanitizedString = `${convertedNumbers[0]} to ${convertedNumbers[1]}`;
  return sanitizedString;
}

function applyScreenSizeFilter(filterName, options) {
  const values = options.split(",");
  commonPage.getCategoryLinkByName(filterName).click();
  values.forEach((data) => {
    screenSizeValues.push(data.replace(/\s+/g, ""));
    commonPage.getCategoryLinkByName(data.trim()).prev().click();
  });
}

function applyPriceFilter(options) {
  priceRange = options;
  const [priceFrom, priceTo] = options.trim().split(" to ");
  categoryPage.priceOption().click();
  categoryPage.priceFromTextBox().type(priceFrom);
  categoryPage.priceToTextBox().type(priceTo);
}

function applyItemLocationFilter(options) {
  categoryPage.itemLocationOption().click();
  itemLocation = options.trim();
  commonPage.getCategoryLinkByName(itemLocation).prev().click();
}

Given("I open Ebay shopping site", () => {
  cy.visit(Cypress.config("baseUrl"));
});

When(
  "I click on {string} category under Shop by Category Menu",
  (categoryValue) => {
    homePage.shopByCategoryButton().click();
    commonPage.getCategoryLinkByName(categoryValue).click();
  }
);

When(
  "I click on {string} in the left hand sidenavigation section",
  (categoryValue) => {
    commonPage.getCategoryLinkByName(categoryValue).click();
  }
);

When("I click on All Filters button", (categoryValue) => {
  categoryPage.allFiltersButton().click();
});

When("I apply {string} filter with options {string}", (filterName, options) => {
  switch (filterName) {
    case "Screen Size":
      applyScreenSizeFilter(filterName, options);
      break;
    case "Price":
      applyPriceFilter(options);
      break;
    case "Item Location":
      applyItemLocationFilter(options);
      break;
    default:
      throw new Error(`Unknown filter: ${filterName}`);
  }
});

When("I click on apply button", () => {
  commonPage.getCategoryLinkByName("Apply").click();
});

When("I type {string} in the search textbox and hit search", (productName) => {
  homePage.searchTextBox().type(productName);
  homePage.searchButton().click();
});

Then("I should see the applied tags in the filter", () => {
  commonPage.getCategoryLinkByName("filters applied").click();
  categoryPage.filterTagsApplied().each(($el, index) => {
    cy.wrap($el)
      .invoke("text")
      .then((text) => {
        let [filterName, filterValue] = text.split(":");
        switch (filterName) {
          case "Screen Size":
            expect(screenSizeValues).to.include(
              filterValue
                .replace(/\s*filter applied\s*/gi, "")
                .replace(/\s+/g, "")
            );
            break;
          case "Price":
            expect(priceRange).to.eq(sanitizePriceRange(filterValue));
            break;
          case "Item Location":
            expect(itemLocation).to.eq(
              filterValue.replace(/\s*filter applied\s*/gi, "").trim()
            );
            break;
          default:
            throw new Error(`Not an added filter: ${filterName}`);
        }
      });
  });
});

Then("I see the first result name matches with the {string}", (productName) => {
  homePage
    .resultsFirstResultHyperlink()
    .eq(1)
    .each(($el, index) => {
      cy.wrap($el)
        .invoke("text")
        .then((text) => {
          expect(text.toLowerCase()).to.include(productName.toLowerCase());
        });
    });
});

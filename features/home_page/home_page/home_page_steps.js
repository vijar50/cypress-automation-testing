import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { performSearch } from "../../common/common";

When("the user searches for {string}", (searchCriteria) => {
  performSearch(searchCriteria);
});

When("the user scrolls to the bottom of the homepage", () => {
  cy.scrollTo("bottom");
});

Then("the resulting article page title is {string}", (searchCriteria) => {
  cy.get(`[id="firstHeading"]`).contains(searchCriteria);
});

Then(
  "they are presented with links to the following projects:",
  (datatable) => {
    const links = datatable.hashes();
    links.map((link) => {
      cy.get('[id="mp-sister-content"]').contains(link.linkText);
    });
  }
);

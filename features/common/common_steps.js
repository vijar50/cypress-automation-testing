import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("the Wikipedia home page has been opened", () => {
  cy.visit("wikipedia.co.uk");
});

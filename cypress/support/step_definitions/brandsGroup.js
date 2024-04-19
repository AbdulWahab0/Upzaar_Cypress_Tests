import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import brands from "../pageObjects/brandsGroup";

const brandsGroup = new brands();

When("I visit the brand group page", () => {
  cy.visit(Cypress.env("url"));
});
Then("I should see the list of brands", () => {
  brandsGroup.getBrandList();
});

Given("I am on the list of brands page", () => {
  cy.visit(Cypress.env("url"));
});
When("I select any brand from list", () => {
  cy.get(".group").should("be.visible");
});
Then("The brand title {string} should be visible", (content) => {
  brandsGroup.getBrandTitle().should("be.visible").and("have.text", content);
});
And("The brand brand description {string} should be visible", (content) => {
  brandsGroup.getBrandDescription().should("contain.text", content);
});

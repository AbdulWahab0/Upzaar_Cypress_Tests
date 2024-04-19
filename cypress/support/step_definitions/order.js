import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

Given("User is on brand group page", () => {
  cy.visit(Cypress.env("url"));
});
When("the user selects any product", () => {
  cy.selectProduct();
});
And("the user selects option, proteins, extras and add special request", () => {
  cy.addProductDetails();
});
And("the user click on add to cart", () => {
  cy.addCartDetails();
});
And("the user update the counter", () => {
  cy.checkCounter();
});
And("the user delete the item in the cart", () => {
  cy.checkDeleteProduct();
});

And("the user click on checkout button", () => {
  cy.productCheckout();
});

And("the user select delivery option", () => {
  cy.addDeliveryDetails();
});

And("the user click on payments options", () => {
  cy.addPayment();
});

And("the user to confirm order", () => {
  cy.getOrder();
});

Then("the user should be able to place the order successfully", () => {
  cy.orderConfirmation();
});

// Order confirmation with pick up option

Given("User is on brand group page", () => {
  cy.visit(Cypress.env("url"));
});
When("the user selects any product", () => {
  cy.selectProduct();
});
And("the user selects option, proteins, extras and add special request", () => {
  cy.addProductDetails();
});
And("the user click on add to cart", () => {
  cy.addCartDetails();
});

And("the user click on checkout button", () => {
  cy.productCheckout();
});

And("the user select pickup option", () => {
  cy.addPickUpDetails();
});

And("the user click on payments options", () => {
  cy.addPayment();
});

And("the user to confirm order", () => {
  cy.getOrder();
});

Then("the user should be able to place the order successfully", () => {
  cy.orderConfirmation();
});

// Order confirmation in building option

Given("User is on brand group page", () => {
  cy.visit(Cypress.env("url"));
});
When("the user selects any product", () => {
  cy.selectProduct();
});
And("the user selects option, proteins, extras and add special request", () => {
  cy.addProductDetails();
});
And("the user click on add to cart", () => {
  cy.addCartDetails();
});

And("the user click on checkout button", () => {
  cy.productCheckout();
});

And("the user select in building option", () => {
  cy.addInBuildingDetails();
});

And("the user click on payments options", () => {
  cy.addPayment();
});

And("the user to confirm order", () => {
  cy.getOrder();
});

Then("the user should be able to place the order successfully", () => {
  cy.orderConfirmation();
});

//Input Validations

Given("User is on brand group page", () => {
  cy.visit(Cypress.env("url"));
});
When("the user selects any product", () => {
  cy.selectProduct();
});
And("the user selects option, proteins, extras and add special request", () => {
  cy.addProductDetails();
});
And("the user click on add to cart", () => {
  cy.addCartDetails();
});

And("the user click on checkout button", () => {
  cy.productCheckout();
});

Then(
  "the user is able to view name, phone number, email validation errors",
  () => {
    cy.inputValidationsErrors();
  }
);

// Images validations

Given("User is on brand group page", () => {
  cy.visit(Cypress.env("url"));
});

When("the user navigate to Brand Group sections", () => {
  cy.getBrandGroups();
});
Then("the user should see all brand group images loaded successfully", () => {
  cy.brandImage();
});
When("the user selects any product", () => {
  cy.selectProduct();
});
Then(
  "the user should see product banner and products images loaded successfully",
  () => {
    cy.getProductBanner();
  }
);
When("the user click on single product", () => {
  cy.getSingleProduct();
});

Then("the user should see selected product image loaded successfully", () => {
  cy.getSingleProductImage();
});

When("the user click on add to cart button", () => {
  cy.productsImages();
});

Then("the user should see selected product image in the cart", () => {
  cy.shoppingCartImage();
});

When("the user click checkout button", () => {
  cy.checkoutCartButton();
});

Then("the user should see selected product image in summary box", () => {
  cy.checkoutCartImage();
});
When("the user click on payment button", () => {
  cy.getPaymentButton();
});

Then("the user should see selected product image on payment page", () => {
  cy.paymentCartImage();
});

When("the user click on confirm button", () => {
  cy.getConfirmOrderButton();
});

Then("the user should see selected product image on order details page", () => {
  cy.confirmOrderImage();
});

// Test cases for total amount
Given("User is on brand group page", () => {
  cy.visit(Cypress.env("url"));
});
When("the user selects any product", () => {
  cy.selectProduct();
});
And("the user selects option, proteins, extras and add special request", () => {
  cy.addProductDetails();
});
And("the user click on add to cart", () => {
  cy.addCartDetails();
});

And("the user click on checkout button", () => {
  cy.productCheckout();
});

And("the user select delivery option", () => {
  cy.addDeliveryDetails();
});
Then(
  "the user should see the correct total amount, including the sum of items and delivery fee",
  () => {
    cy.getTotalAmount();
  }
);

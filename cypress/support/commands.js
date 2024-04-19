import { or } from "ajv/dist/compile/codegen";
import orders from "../support/pageObjects/order";

const order = new orders();

// Commands for delivery order

Cypress.Commands.add("selectProduct", () => {
  order.getBrandGroup();
  cy.wait(9000);
  order.getBrand();
});
Cypress.Commands.add("addProductDetails", () => {
  cy.wait(900);
  order.getProductDialog();
  cy.wait(900);
  order.getProductOptions();
  order.getProductProteins();
  order.getProductSpecialRequest();
});
Cypress.Commands.add("addCartDetails", () => {
  order.getCartButton();
  cy.viewport(1024, 584);
  cy.wait(3000);
  order.getShoppingCart();
  order.getShoppingCartProduct();
  order.getShoppingCartProductTitle();
});
Cypress.Commands.add("checkCounter", () => {
  order.getShoppingCartProductCounter();
  cy.wait(3000);
  order.geCounterVerification();
});
Cypress.Commands.add("checkDeleteProduct", () => {
  order.getShoppingCartBackButton();
  order.getNewProduct();
  order.getNewProductOptions();
  order.getCartButton();
  order.getDeleteButton().click();
  order.verifyDeletedProduct().should("not.exist");
});
Cypress.Commands.add("productCheckout", () => {
  order.getCheckOutButton();
});
Cypress.Commands.add("addDeliveryDetails", () => {
  order.getDeliveryName();
  order.getDeliveryPhoneNumber();
  order.getDeliveryEmail();
  order.getDeliveryAddress();
  order.selectDeliveryAddress();
  order.verifyDeliveryAddress();
  order.verifyDeliveryFee();
});
Cypress.Commands.add("addPayment", () => {
  order.getPaymentButton().click();
  order.verifyCashOnDelivery();
});
Cypress.Commands.add("getOrder", () => {
  order.getOrderButton().click();
});
Cypress.Commands.add("orderConfirmation", () => {
  order.getOrderConfirmation();
});

// Commands for pick up order
Cypress.Commands.add("addPickUpDetails", () => {
  order.getPickUpButton();
  order.getPickUpName();
  order.getPickUpNumber();
  order.getPickUpEmail();
});
// Commands for in building order
Cypress.Commands.add("addInBuildingDetails", () => {
  order.getInBuildingButton();
  order.getName();
  order.getNumber();
  order.getEmail();
  order.getFloor();
  order.getOffice();
  order.getRecipientName();
});
// Commands for input validations

Cypress.Commands.add("inputValidationsErrors", () => {
  order.getDeliveryAddress();
  order.selectDeliveryAddress();
  order.getPaymentButton();
  order.getNameValidity();
  order.getNameValidationMessage();
  order.getPaymentButton();
  order.getPhoneNumberValidity();
  order.getPhoneNumberValidationMessage();
  order.getPaymentButton();
  order.getNameValidity();
  order.getNameValidationMessage();
  order.getPaymentButton();
  order.getPhoneNumberValidity();
  order.getPhoneNumberValidationMessage();
  order.getPaymentButton();
  order.getEmailValidity();
  order.getEmailValidationMessage();
  order.getEmailValidityForWrongEmail();
  order.getEmailValidationMessageForWrongEmail();
});

//Images validation

Cypress.Commands.add("productsImages", () => {
  cy.wait(900);
  order.getProductDialog();
  cy.wait(900);
  order.getProductOptions();
  order.getCartButton();
  cy.viewport(1024, 584);
  order.getShoppingCart();
});
Cypress.Commands.add("brandImage", () => {
  order.getBrandImage();
});
Cypress.Commands.add("getProductBanner", () => {
  order.getProductBannerImage();
  order.getProductImages();
});
Cypress.Commands.add("getSingleProduct", () => {
  cy.wait(5000);
  order.getSingleProduct();
});
Cypress.Commands.add("getSingleProductImage", () => {
  order.getSingleProductImage();
});
Cypress.Commands.add("shoppingCartImage", () => {
  order.getShoppingCartImage();
  order.getCheckOutButton();
});
Cypress.Commands.add("checkoutCartButton", () => {
  cy.wait(5000);
  order.getDeliveryName();
  order.getDeliveryPhoneNumber();
  order.getDeliveryEmail();
  order.getDeliveryAddress();
  order.selectDeliveryAddress();
});
Cypress.Commands.add("checkoutCartImage", () => {
  order.getCheckoutCartImage();
});

Cypress.Commands.add("getPaymentButton", () => {
  order.getPaymentButton().click();
});
Cypress.Commands.add("paymentCartImage", () => {
  order.getPaymentImage();
});

Cypress.Commands.add("getConfirmOrderButton", () => {
  order.getOrderButton().click();
  cy.wait(5000);
});
Cypress.Commands.add("confirmOrderImage", () => {
  order.getConfirmOrderImage();
});
Cypress.Commands.add("getBrandGroups", () => {
  order.getBrandGroup();
});

// Total amount (Sum and delivery fee)

Cypress.Commands.add("getTotalAmount", () => {
  order.getTotalSum();
});

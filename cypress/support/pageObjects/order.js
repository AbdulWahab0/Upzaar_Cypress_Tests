class order {
  getBrandGroup() {
    return cy
      .get(
        ":nth-child(1) > .mantine-Carousel-root > .mantine-1my8u2w > .mantine-14pwlwp > :nth-child(1) > a > .group > .relative > .mantine-Image-root > .mantine-qenwvq > .mantine-1iugybl > .mantine-60jsyd"
      )
      .click();
  }
  getBrand() {
    return cy
      .get(
        ":nth-child(1) > .mantine-183sane > .grid > :nth-child(1) > .mantine-Paper-root > .mantine-Image-root > .mantine-qenwvq > .mantine-1iugybl > .mantine-60jsyd"
      )
      .click({ force: true });
  }
  getProductDialog() {
    return cy
      .get('[style="opacity: 1; transform: none;"]')
      .should("be.visible");
  }
  getProductOptions() {
    return cy
      .get(
        ":nth-child(1) > .grid > .mantine-Radio-root > .mantine-14n9mxy > .mantine-1svz3tp > .mantine-9gvgd1"
      )
      .click();
  }
  getProductProteins() {
    return cy.get('input[type="checkbox"]').check().should("be.checked");
  }
  getProductSpecialRequest() {
    const testData =
      "Please add Lettuce, Rocca, Avocado Salsa in more quantity";
    return cy
      .get("textarea")
      .first()
      .type(testData)
      .should("have.value", testData);
  }
  getProductDialog() {
    return cy
      .get('[style="opacity: 1; transform: none;"]')
      .should("be.visible");
  }
  getCartButton() {
    return cy.get(".mantine-Button-root").eq(5).click({ force: true });
  }
  getShoppingCart() {
    return cy.get(".mantine-Modal-content").should("be.visible");
  }
  getShoppingCartProduct() {
    return cy
      .get(".mantine-wmxe6c > :nth-child(1) > .grid")
      .should("be.visible");
  }
  getShoppingCartProductTitle() {
    return cy
      .get(".col-span-4 > .mantine-hpmcve > .mantine-Text-root")
      .should("be.visible");
  }
  getShoppingCartProductCounter() {
    return cy.get(".mantine-11q5icf > :nth-child(3)").first().click();
  }
  geCounterVerification() {
    return cy
      .get(".border-none")
      .invoke("val")
      .then((value) => {
        expect(value).to.equal("2");
      });
  }
  getShoppingCartBackButton() {
    return cy.get(".mantine-xg7kom > .mantine-UnstyledButton-root").click();
  }
  getNewProduct() {
    return cy
      .get(
        ":nth-child(1) > .mantine-183sane > .grid > :nth-child(2) > .mantine-Paper-root > .mantine-Image-root > .mantine-qenwvq > .mantine-1iugybl > .mantine-60jsyd"
      )
      .click();
  }
  getNewProductOptions() {
    return cy
      .get(
        ":nth-child(1) > .grid > .mantine-Radio-root > .mantine-14n9mxy > .mantine-1svz3tp > .mantine-9gvgd1"
      )
      .click();
  }
  getDeleteButton() {
    return cy.get(
      ":nth-child(2) > .grid > .col-span-4 > .mantine-hpmcve > .mantine-UnstyledButton-root"
    );
  }
  verifyDeletedProduct() {
    return cy.get(
      ":nth-child(2) > .grid > .col-span-4 > .mantine-hpmcve > .mantine-Text-root"
    );
  }
  getCheckOutButton() {
    return cy.get(".mantine-y8uo48 > .mantine-UnstyledButton-root").click();
  }
  getDeliveryName() {
    return cy.get(".mantine-mpqp3a > .grid > :nth-child(1)").type("John");
  }
  getDeliveryPhoneNumber() {
    return cy.get(".mantine-NumberInput-root").type("123");
  }
  getDeliveryEmail() {
    return cy.get(".grid > :nth-child(3)").type("Test@gmail.com");
  }
  getDeliveryAddress() {
    return cy.get(".mantine-gabuhb").type("Berlin");
  }
  selectDeliveryAddress() {
    return cy
      .get(".mantine-1q7qbpl.mantine-Autocomplete-item")
      .contains("Berlin, Germany")
      .click();
  }
  verifyDeliveryAddress() {
    return cy.get(".go2072408551").should("be.visible");
  }
  verifyDeliveryFee() {
    return cy.get(".mantine-1mnon7l").should("be.visible");
  }
  getPaymentButton() {
    return cy.get(".mantine-10im9cb > .mantine-1wpc1xj");
  }
  verifyCashOnDelivery() {
    return cy.get(".mantine-9gvgd1");
  }
  getOrderButton() {
    return cy.get(".mantine-ofyd0e > .mantine-1wpc1xj").click();
  }
  getOrderConfirmation() {
    return cy
      .get("#confetti > .mantine-Text-root")
      .should("be.visible")
      .and("have.text", "Your Order has been confirmed!");
  }

  // Pick up order options
  getPickUpButton() {
    return cy
      .get("button.mantine-UnstyledButton-root.mantine-Tabs-tab")
      .eq(1)
      .click({ multiple: true });
  }
  getPickUpName() {
    return cy
      .get("input.mantine-Input-input.mantine-TextInput-input.mantine-no1kpf")
      .eq(0)
      .type("John Doe");
  }
  getPickUpNumber() {
    return cy
      .get("input.mantine-Input-input.mantine-NumberInput-input.mantine-no1kpf")
      .type("+96278989364");
  }
  getPickUpEmail() {
    return cy
      .get("input.mantine-Input-input.mantine-TextInput-input.mantine-no1kpf")
      .eq(1)
      .type("butterCloud@gmail.com");
  }
  // In building  order option
  getInBuildingButton() {
    return cy
      .get(
        'button[class="mantine-UnstyledButton-root mantine-Tabs-tab bg-transparent px-5 h-10 rounded-full w-full cursor-pointer font-medium mantine-g35vuh"]'
      )
      .click({ multiple: true });
  }
  getPickUpName() {
    return cy
      .get("input.mantine-Input-input.mantine-TextInput-input.mantine-no1kpf")
      .eq(0)
      .type("John Doe");
  }
  getName() {
    return cy
      .get(".mantine-mpqp3a > .grid > :nth-child(1)")
      .type("TestBuidling");
  }
  getNumber() {
    return cy.get(".mantine-NumberInput-root").type("123");
  }
  getEmail() {
    return cy.get(".grid > :nth-child(3)").clear().type("Test@gmail.com");
  }
  getFloor() {
    return cy
      .get("input.mantine-Input-input.mantine-TextInput-input.mantine-no1kpf")
      .eq(2)
      .type("2");
  }
  getOffice() {
    return cy
      .get("input.mantine-Input-input.mantine-TextInput-input.mantine-no1kpf")
      .eq(3)
      .type("ButterCloud");
  }
  getRecipientName() {
    return cy
      .get("input.mantine-Input-input.mantine-TextInput-input.mantine-no1kpf")
      .eq(4)
      .type("Arek");
  }

  //Input Validations

  getNameValidity() {
    return cy
      .get('input[name="name"]')
      .invoke("prop", "validity")
      .should("have.property", "valid", false);
  }
  getNameValidationMessage() {
    return cy
      .get('input[name="name"]')
      .invoke("prop", "validationMessage")
      .should("equal", "Please fill out this field.");
  }
  getPhoneNumberValidity() {
    return cy
      .get('input[name="phone"]')
      .invoke("prop", "validity")
      .should("have.property", "valid", false);
  }
  getPhoneNumberValidationMessage() {
    return cy
      .get('input[name="phone"]')
      .invoke("prop", "validationMessage")
      .should("equal", "Please fill out this field.");
  }
  getEmailValidity() {
    return cy
      .get('input[name="email"]')
      .invoke("prop", "validity")
      .should("have.property", "valid", false);
  }
  getEmailValidationMessage() {
    return cy
      .get('input[name="email"]')
      .invoke("prop", "validationMessage")
      .should("equal", "Please fill out this field.");
  }
  getEmailValidityForWrongEmail() {
    return cy
      .get('input[name="email"]')
      .type("test.com")
      .invoke("prop", "validity")
      .should("have.property", "valid", false);
  }
  getEmailValidationMessageForWrongEmail() {
    return cy
      .get('input[name="email"]')
      .invoke("prop", "validationMessage")
      .should(
        "equal",
        "Please include an '@' in the email address. 'test.com' is missing an '@'."
      );
  }

  // Images validation
  getShoppingCartImage() {
    return cy
      .get(
        ".grid > .mantine-Image-root > .mantine-qenwvq > .mantine-1iugybl > .mantine-60jsyd"
      )
      .should("be.visible");
  }
  getCheckoutCartImage() {
    return cy.get(".mantine-60jsyd").should("be.visible");
  }
  getPaymentImage() {
    return cy.get(".mantine-60jsyd").should("be.visible");
  }
  getConfirmOrderImage() {
    return cy.get(".mantine-60jsyd").should("be.visible");
  }
  getBrandImage() {
    return cy
      .get("img.mantine-60jsyd.mantine-Image-image")
      .should("be.visible");
  }
  getProductBannerImage() {
    return cy.get(".mantine-BackgroundImage-root").should("be.visible");
  }
  getProductImages() {
    return cy
      .get("img.mantine-60jsyd.mantine-Image-image")
      .should("be.visible");
  }
  getSingleProduct() {
    return cy
      .get(
        ":nth-child(1) > .mantine-183sane > .grid > :nth-child(1) > .mantine-Paper-root > .mantine-Image-root > .mantine-qenwvq > .mantine-1iugybl > .mantine-60jsyd"
      )
      .click({ force: true });
  }
  getSingleProductImage() {
    return cy.get(".mantine-Image-image").should("be.visible");
  }
  getTotalSum() {
    const expectedTotal = 38.83;
    cy.get(".mantine-1s9gg8q > :nth-child(2)")
      .invoke("text")
      .then((subTotalText) => {
        const subTotal = subTotalText.replace("JOD", "").trim();
        cy.get(".mantine-1mnon7l > :nth-child(2)")
          .invoke("text")
          .then((deliveryFeeText) => {
            const deliveryFee = deliveryFeeText.replace("JOD", "").trim();
            const actualTotal = parseFloat(subTotal) + parseFloat(deliveryFee);
            expect(actualTotal).to.equal(expectedTotal);
          });
      });
  }
}

export default order;

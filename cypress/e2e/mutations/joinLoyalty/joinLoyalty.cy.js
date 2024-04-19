import {
  joinLoyaltyMutation,
  joinLoyaltySchema,
} from "../../../support/graphQL_queries/joinLoyalty";
import "../../../support/commands/accounts/accounts";

const Ajv = require("ajv");
const ajv = new Ajv();
describe("Test to create_account", () => {
  const apiKeys = Cypress.env("apiKeys");
  const baseUrl = Cypress.env("baseUrl");
  let brand_uid = "19942948";

  it("Validate the status code should be 200", () => {
    cy.request({
      method: "POST",
      url: baseUrl,
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKeys,
      },
      body: {
        query: joinLoyaltyMutation,
        variables: {
          brand_uid: brand_uid,
          customer_uid: "CreatedManually-282d82c8c914811a",
          joined_from_referral_code: "4224fr",
        },
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
  it("Validate response body should not be null", () => {
    cy.request({
      method: "POST",
      url: baseUrl,
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKeys,
      },
      body: {
        query: joinLoyaltyMutation,
        variables: {
          brand_uid: brand_uid,
          customer_uid: "CreatedManually-282d82c8c914811a",
          joined_from_referral_code: "4224fr",
        },
      },
    }).then((response) => {
      expect(response).to.not.be.null;
    });
  });
  it("Create a join loyalty with all valid values", () => {
    cy.request({
      method: "POST",
      url: baseUrl,
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKeys,
      },
      body: {
        query: joinLoyaltyMutation,
        variables: {
          brand_uid: brand_uid,
          customer_uid: "CreatedManually-282d82c8c914811a",
          joined_from_referral_code: "4224fr",
        },
      },
    }).then(({ body }) => {
      const customer_user = body.data.join_loyalty.errors;
      const customer_status = body.data.join_loyalty.status;
      expect(customer_user).to.be.an("array").that.is.empty;
      expect(customer_status).to.be.an("boolean").true;
    });
  });
  it("Test to create a join loyalty with null customer uid", () => {
    cy.request({
      method: "POST",
      url: baseUrl,
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKeys,
      },
      body: {
        query: joinLoyaltyMutation,
        variables: {
          brand_uid: brand_uid,
          customer_uid: null,
          joined_from_referral_code: "4224fr",
        },
      },
    }).then(({ body }) => {
      const getError = body.errors[0].message;
      expect(getError).to.equal(
        "Variable $customer_uid of type String! was provided invalid value"
      );
    });
  });
  it("Test to create a join loyalty with invalid customer uid", () => {
    cy.request({
      method: "POST",
      url: baseUrl,
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKeys,
      },
      body: {
        query: joinLoyaltyMutation,
        variables: {
          brand_uid: brand_uid,
          customer_uid: "CreatedManually-282d82-c8c914811a",
          joined_from_referral_code: "4224fr",
        },
      },
      failOnStatusCode: false,
    }).then(({ body }) => {
      const customer_user_error = body.errors[0];
      //console.log("ssss", customer_user);
      expect(customer_user_error).to.equal("Couldn't find CustomerUser");
    });
  });
  it("Test to create a join loyalty with empty brand ID", () => {
    cy.request({
      method: "POST",
      url: baseUrl,
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKeys,
      },
      body: {
        query: joinLoyaltyMutation,
        variables: {
          //brand_uid: brand_uid,
          customer_uid: "CreatedManually-282d82-c8c914811a",
          joined_from_referral_code: "4224fr",
        },
      },
      failOnStatusCode: false,
    }).then(({ body }) => {
      const empty_brand_Id = body.errors[0].message;
      //console.log("toba ha", empty_brand_Id);
      expect(empty_brand_Id).to.equal(
        "Variable $brand_uid of type String! was provided invalid value"
      );
    });
  });

  it("Verify the JSON Schema Validation", () => {
    cy.request({
      method: "POST",
      url: baseUrl,
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKeys,
      },
      body: {
        query: joinLoyaltyMutation,
        variables: {
          brand_uid: brand_uid,
          customer_uid: "CreatedManually-282d82c8c914811a",
          joined_from_referral_code: "4224fr",
        },
      },
    }).then((response) => {
      const schema = joinLoyaltySchema;
      const validate = ajv.compile(schema);
      const valid = validate(response.body);
      expect(valid).to.be.true;
    });
  });

  it("Validate an API request with an empty API key", () => {
    cy.request({
      method: "POST",
      url: "https://zandbox-backend.upzaar.io/graphql",
      headers: {
        "Content-Type": "application/json",
        Authorization: "",
      },
      body: {
        query: joinLoyaltyMutation,
        variables: {
          brand_uid: brand_uid,
          customer_uid: "CreatedManually-282d82c8c914811a",
          joined_from_referral_code: "4224fr",
        },
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
  it("Validate an API request with an empty Authorization header", () => {
    cy.request({
      method: "POST",
      url: baseUrl,
      failOnStatusCode: false,
    }).then((response) => {
      const apiKeys = response.body.errors;
      expect(apiKeys).to.include("You must provide an Authorization header");
    });
  });
  it("Validate an API key should not be null", () => {
    cy.request({
      method: "POST",
      url: baseUrl,
      failOnStatusCode: false,
    }).then((response) => {
      const apiKeys = response.body.errors;
      expect(apiKeys).to.not.be.null;
    });
  });
});

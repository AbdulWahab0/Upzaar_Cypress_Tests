import {
  redeemRewardMutation,
  redeemRewardSchema,
} from "../../../support/graphQL_queries/redeemReward";

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
        query: redeemRewardMutation,
        variables: {
          brand_uid: brand_uid,
          reward_id: 6,
          customer_uid: "CreatedManually-282d82c8c914811a",
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
        query: redeemRewardMutation,
        variables: {
          brand_uid: brand_uid,
          reward_id: 6,
          customer_uid: "CreatedManually-282d82c8c914811a",
        },
      },
    }).then((response) => {
      expect(response).to.not.be.null;
    });
  });
  it("Create a redeem reward with all valid values", () => {
    cy.request({
      method: "POST",
      url: baseUrl,
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKeys,
      },
      body: {
        query: redeemRewardMutation,
        variables: {
          brand_uid: brand_uid,
          reward_id: 6,
          customer_uid: "CreatedManually-282d82c8c914811a",
        },
      },
    }).then(({ body }) => {
      const redeem_reward = body.data.redeem_reward.errors;
      const redeem_status = body.data.redeem_reward.status;
      expect(redeem_reward).to.be.an("array").that.is.empty;
      expect(redeem_status).to.be.an("boolean").true;
    });
  });
  it("Test to create a redeem reward with null customer uid", () => {
    cy.request({
      method: "POST",
      url: baseUrl,
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKeys,
      },
      body: {
        query: redeemRewardMutation,
        variables: {
          brand_uid: brand_uid,
          customer_uid: null,
          joined_from_referral_code: "4224fr",
        },
      },
    }).then(({ body }) => {
      const getError = body.errors[0].message;
      expect(getError).to.equal(
        "Variable $reward_id of type ID! was provided invalid value"
      );
    });
  });
  it("Test to create a redeem reward with null reward id", () => {
    cy.request({
      method: "POST",
      url: baseUrl,
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKeys,
      },
      body: {
        query: redeemRewardMutation,
        variables: {
          brand_uid: brand_uid,
          reward_id: null,
          customer_uid: "CreatedManually-282d82c8c914811a",
          joined_from_referral_code: "4224fr",
        },
      },
    }).then(({ body }) => {
      const getError = body.errors[0].message;
      expect(getError).to.equal(
        "Variable $reward_id of type ID! was provided invalid value"
      );
    });
  });
  it("Test to create a redeem reward with invalid customer uid", () => {
    cy.request({
      method: "POST",
      url: baseUrl,
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKeys,
      },
      body: {
        query: redeemRewardMutation,
        variables: {
          brand_uid: brand_uid,
          reward_id: 8,
          customer_uid: ".CreatedManually-282d82-c8c914811a",
          joined_from_referral_code: "4224fr",
        },
      },
      failOnStatusCode: false,
    }).then(({ body }) => {
      const redeem_error = body.data.redeem_reward.errors[0];
      expect(redeem_error).to.equal("Couldn't find customer");
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
        query: redeemRewardMutation,
        variables: {
          //brand_uid: brand_uid,
          customer_uid: "CreatedManually-282d82-c8c914811a",
          joined_from_referral_code: "4224fr",
        },
      },
      failOnStatusCode: false,
    }).then(({ body }) => {
      const empty_brand_Id = body.errors[0].message;
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
        query: redeemRewardMutation,
        variables: {
          brand_uid: brand_uid,
          reward_id: 6,
          customer_uid: "CreatedManually-282d82c8c914811a",
        },
      },
    }).then((response) => {
      const schema = redeemRewardSchema;
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
        query: redeemRewardMutation,
        variables: {
          brand_uid: brand_uid,
          reward_id: 6,
          customer_uid: "CreatedManually-282d82c8c914811a",
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

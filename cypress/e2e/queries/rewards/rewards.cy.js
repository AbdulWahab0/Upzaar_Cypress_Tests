import {
  rewardQuery,
  rewardSchema,
  expectedAmountOffKeys,
  expectedRewardKeys,
  rewardFieldTypes,
  amountOffFieldTypes,
} from "./../../../support/graphQL_queries/reward";
import "./../../../support/commands/rewards/reward";

const Ajv = require("ajv");
const ajv = new Ajv(); // for schema validation

describe("Test Loyalty Rewards for a Brand", () => {
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
        query: rewardQuery,
        variables: {
          brand_uid: brand_uid,
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
        query: rewardQuery,
        variables: {
          brand_uid: brand_uid,
        },
      },
    }).then((response) => {
      expect(response).to.not.be.null;
    });
  });
  it("Validate all expected Keys in the response", () => {
    cy.request({
      method: "POST",
      url: baseUrl,
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKeys,
      },
      body: {
        query: rewardQuery,
        variables: {
          brand_uid: brand_uid,
        },
      },
    }).then(({ body }) => {
      var amount_off = body.data.rewards[0].amount_off;
      var reward = body.data.rewards[0];
      expect(amount_off).to.have.all.keys(expectedAmountOffKeys);
      expect(reward).to.have.all.keys(expectedRewardKeys);
    });
  });
  it("Validate mandatory fields in the response", () => {
    cy.request({
      method: "POST",
      url: baseUrl,
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKeys,
      },
      body: {
        query: rewardQuery,
        variables: {
          brand_uid: brand_uid,
        },
      },
    }).then(({ body }) => {
      var reward = body.data.rewards[0];
      cy.verifyMandatoryFields(reward);
    });
  });
  it("Validate the data types in the response", () => {
    cy.request({
      method: "POST",
      url: baseUrl,
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKeys,
      },
      body: {
        query: rewardQuery,
        variables: {
          brand_uid: brand_uid,
        },
      },
    }).then(({ body }) => {
      var amount_off = body.data.rewards[0].amount_off;
      var reward = body.data.rewards[0];
      for (const field in amountOffFieldTypes) {
        expect(amount_off[field]).to.be.a(amountOffFieldTypes[field]);
      }
      for (const field in rewardFieldTypes) {
        expect(reward[field]).to.be.a(rewardFieldTypes[field]);
      }
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
        query: rewardQuery,
        variables: {
          brand_uid: brand_uid,
        },
      },
    }).then((response) => {
      const schema = rewardSchema;
      const validate = ajv.compile(schema);
      const valid = validate(response.body);
      expect(valid).to.be.false;
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
        query: rewardQuery,
        variables: {
          brand_uid: brand_uid,
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

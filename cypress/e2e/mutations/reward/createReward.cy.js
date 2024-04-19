import {
  createRewardQuery,
  createRewardSchema,
  expectedAmountOffKeys,
  expectedRewardKeys,
  amountOffFieldTypes,
  rewardFieldTypes,
} from "../../../support/graphQL_queries/reward";
import "../../../support/commands/rewards/reward";

const Ajv = require("ajv");
const ajv = new Ajv(); // for schema validation

describe("Test to create a loyalty reward", () => {
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
        query: createRewardQuery,
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
        query: createRewardQuery,
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
        query: createRewardQuery,
        variables: {
          brand_uid: brand_uid,
          data: {
            name: "Reward 3",
            description: "Reward 3 Description",
            amount_off: {
              cents: 40000,
              currency: "JOD",
            },
            percentage_off: 10,
            discount_type: "amount",
            points_to_redeem: 30,
            welcome: false,
            type: "DiscountReward",
          },
        },
      },
    }).then(({ body }) => {
      const { create_reward } = body.data;
      expect(create_reward.errors).to.be.an("array").that.is.empty;
      var getReward = create_reward.reward;
      var getAmountOff = create_reward.reward.amount_off;
      expect(getAmountOff).to.have.all.keys(expectedAmountOffKeys);
      expect(getReward).to.have.all.keys(expectedRewardKeys);
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
        query: createRewardQuery,
        variables: {
          brand_uid: brand_uid,
          data: {
            name: "Reward 3",
            description: "Reward 3 Description",
            amount_off: {
              cents: 40000,
              currency: "JOD",
            },
            percentage_off: 10,
            discount_type: "amount",
            points_to_redeem: 30,
            welcome: false,
            type: "DiscountReward",
          },
        },
      },
    }).then(({ body }) => {
      const { create_reward } = body.data;
      var getReward = create_reward.reward;
      cy.verifyMandatoryFields(getReward);
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
        query: createRewardQuery,
        variables: {
          brand_uid: brand_uid,
          data: {
            name: "Reward 3",
            description: "Reward 3 Description",
            amount_off: {
              cents: 40000,
              currency: "JOD",
            },
            percentage_off: 10,
            discount_type: "amount",
            points_to_redeem: 30,
            welcome: false,
            type: "DiscountReward",
          },
        },
      },
    }).then(({ body }) => {
      const { create_reward } = body.data;
      var amount_off = create_reward.reward.amount_off;
      var getReward = create_reward.reward;
      for (const field in amountOffFieldTypes) {
        expect(amount_off[field]).to.be.a(amountOffFieldTypes[field]);
      }
      for (const field in rewardFieldTypes) {
        expect(getReward[field]).to.be.a(rewardFieldTypes[field]);
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
        query: createRewardQuery,
        variables: {
          brand_uid: brand_uid,
          data: {
            name: "Reward 3",
            description: "Reward 3 Description",
            amount_off: {
              cents: 40000,
              currency: "JOD",
            },
            percentage_off: 10,
            discount_type: "amount",
            points_to_redeem: 30,
            welcome: false,
            type: "DiscountReward",
          },
        },
      },
    }).then((response) => {
      const schema = createRewardSchema;
      const validate = ajv.compile(schema);
      const valid = validate(response.body);
      expect(valid).to.be.false;
    });
  });

  it("Validate API request with empty LoyaltyTierAttributes($data)", () => {
    cy.request({
      method: "POST",
      url: baseUrl,
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKeys,
      },
      body: {
        query: createRewardQuery,
        variables: {
          brand_uid: brand_uid,
        },
      },
    }).then(({ body }) => {
      const emptyData = body.errors[0];
      expect(emptyData.message).to.equal(
        "Variable $data of type LoyaltyRewardAttributes! was provided invalid value"
      );
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
        query: createRewardQuery,
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

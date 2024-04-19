import {
  postTierQuery,
  postTierSchema,
  verifyPostTierMandatoryFields,
  expectedPostTierKeys,
  rewardFieldTypes,
  postTierFieldTypes,
  expectedPostTier,
} from "../../../support/graphQL_queries/tier";
import "../../../support/commands/rewards/reward";

const Ajv = require("ajv");
const ajv = new Ajv(); // for schema validation

describe("Test list of available tiers on a brand", () => {
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
        query: postTierQuery,
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
        query: postTierQuery,
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
        query: postTierQuery,
        variables: {
          brand_uid: brand_uid,
        },
      },
    }).then(({ body }) => {
      const tiers = body.data.tiers[0];
      const loyaltyBenefits = tiers.loyalty_benefits[0];
      const discountableLoyaltyBenefits =
        tiers.discountable_loyalty_benefits[0];
      const pointMultiplierLoyalty = tiers.point_multiplier_loyalty_benefits[0];
      expect(tiers).to.have.all.keys(expectedPostTierKeys);
      expect(loyaltyBenefits).to.have.all.keys(expectedPostTier);
      expect(discountableLoyaltyBenefits).to.have.all.keys(expectedPostTier);
      expect(pointMultiplierLoyalty).to.have.all.keys(expectedPostTier);
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
        query: postTierQuery,
        variables: {
          brand_uid: brand_uid,
        },
      },
    }).then(({ body }) => {
      const tiers = body.data.tiers[0];
      cy.verifyMandatoryFields(tiers);
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
        query: postTierQuery,
        variables: {
          brand_uid: brand_uid,
        },
      },
    }).then(({ body }) => {
      const tiers = body.data.tiers[0];
      for (const field in postTierFieldTypes) {
        expect(tiers[field]).to.be.a(postTierFieldTypes[field]);
      }
    });
  });
  it("Verify the tier with empty/invalid value for BrandID", () => {
    cy.request({
      method: "POST",
      url: baseUrl,
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKeys,
      },
      body: {
        query: postTierQuery,
        variables: {},
      },
    }).then(({ body }) => {
      const emptyTier = body.errors[0];
      expect(emptyTier.message).to.equal(
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
        query: postTierQuery,
        variables: {
          brand_uid: brand_uid,
        },
      },
    }).then((response) => {
      const schema = postTierSchema;
      const validate = ajv.compile(schema);
      const valid = validate(response.body);
      expect(valid).to.be.false;
    });
  });
  it("Verify the Brand ID must match with environment", () => {
    cy.request({
      method: "POST",
      url: baseUrl,
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKeys,
      },
      body: {
        query: postTierQuery,
        variables: {
          brand_uid: brand_uid,
        },
      },
    }).then(({ body }) => {
      const brand_uid = body.data.tiers[0].brand_uid;
      expect(brand_uid).to.equal(brand_uid);
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
        query: postTierQuery,
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

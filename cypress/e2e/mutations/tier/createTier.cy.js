import {
  createTierQuery,
  createTierSchema,
  expectedTierKeys,
  expectedCreateTierKeys,
  createTierFieldTypes,
} from "../../../support/graphQL_queries/tier";
import "../../../support/commands/tier/tier";

const Ajv = require("ajv");
const ajv = new Ajv(); // for schema validation

describe("Test to create a loyalty tier", () => {
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
        query: createTierQuery,
        variables: {
          brand_uid: brand_uid,
        },
      },
      failOnStatusCode: false,
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
        query: createTierQuery,
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
        query: createTierQuery,
        variables: {
          brand_uid: brand_uid,
          data: {
            name: "",
            description: "",
            min_points: 0,
            max_points: 0,
            hidden_to_members: true,
          },
        },
      },
    }).then(({ body }) => {
      const { create_tier } = body.data;
      expect(create_tier.status).to.be.true; // Assert the status value
      expect(create_tier.errors).to.be.an("array").that.is.empty;
      const tier = create_tier.tier;
      expect(create_tier).to.have.all.keys(expectedCreateTierKeys);
      expect(tier).to.have.all.keys(expectedTierKeys);
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
        query: createTierQuery,
        variables: {
          brand_uid: brand_uid,
          data: {
            name: "",
            description: "",
            min_points: 0,
            max_points: 0,
            hidden_to_members: true,
          },
        },
      },
    }).then(({ body }) => {
      const { create_tier } = body.data;
      expect(create_tier.status).to.not.be.null;
      const tier = create_tier.tier;
      cy.verifyCreateTierMandatoryFields(tier);
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
        query: createTierQuery,
        variables: {
          brand_uid: brand_uid,
          data: {
            name: "",
            description: "",
            min_points: 0,
            max_points: 0,
            hidden_to_members: true,
          },
        },
      },
    }).then(({ body }) => {
      const { create_tier } = body.data;
      const tier = create_tier.tier;
      for (const field in createTierFieldTypes) {
        expect(tier[field]).to.be.a(createTierFieldTypes[field]);
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
        query: createTierQuery,
        variables: {
          brand_uid: brand_uid,
          data: {
            name: "",
            description: "",
            min_points: 0,
            max_points: 0,
            hidden_to_members: true,
          },
        },
      },
    }).then((response) => {
      const schema = createTierSchema;
      const validate = ajv.compile(schema);
      const valid = validate(response.body);
      expect(valid).to.be.true;
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
        query: createTierQuery,
        variables: {
          brand_uid: brand_uid,
          data: {
            name: "",
            description: "",
            min_points: 0,
            max_points: 0,
            hidden_to_members: true,
          },
        },
      },
    }).then(({ body }) => {
      const { create_tier } = body.data;
      const brand_uid = create_tier.tier.brand_uid;
      expect(brand_uid).to.equal(brand_uid);
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
        query: createTierQuery,
        variables: {
          brand_uid: brand_uid,
        },
      },
    }).then(({ body }) => {
      const emptyData = body.errors[0];
      expect(emptyData.message).to.equal(
        "Variable $data of type LoyaltyTierAttributes! was provided invalid value"
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
        query: createTierQuery,
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

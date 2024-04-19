import {
  point_collection_activities,
  point_collection_schema,
  expectedKeys,
  fieldTypes,
} from "./../../../support/graphQL_queries/pointCollection";
import "./../../../support/commands/pointCollectionActivities/pointCollectionCommands";

const Ajv = require("ajv");
const ajv = new Ajv(); // for schema validation

describe("Test point collection activities on a brand", () => {
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
        query: point_collection_activities,
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
        query: point_collection_activities,
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
        query: point_collection_activities,
        variables: {
          brand_uid: brand_uid,
        },
      },
    }).then(({ body }) => {
      const point_collection_activities =
        body.data.point_collection_activities[0];
      expect(point_collection_activities).to.have.all.keys(expectedKeys);
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
        query: point_collection_activities,
        variables: {
          brand_uid: brand_uid,
        },
      },
    }).then(({ body }) => {
      const point_collection = body.data.point_collection_activities[0];
      cy.verifyMandatoryFields(point_collection);
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
        query: point_collection_activities,
        variables: {
          brand_uid: brand_uid,
        },
      },
    }).then(({ body }) => {
      const point_collection = body.data.point_collection_activities[0];
      for (const field in fieldTypes) {
        expect(point_collection[field]).to.be.a(fieldTypes[field]);
      }
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
        query: point_collection_activities,
        variables: {
          brand_uid: brand_uid,
        },
      },
    }).then(({ body }) => {
      const responseBrandUid =
        body.data.point_collection_activities[0].brand_uid;
      expect(responseBrandUid).to.equal(brand_uid);
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
        query: point_collection_activities,
        variables: {
          brand_uid: brand_uid,
        },
      },
    }).then((response) => {
      const schema = point_collection_schema;
      const validate = ajv.compile(schema);
      const valid = validate(response.body);
      expect(valid).to.be.true;
    });
  });
  it("Validate an API request with an empty API key.", () => {
    cy.request({
      method: "POST",
      url: "https://zandbox-backend.upzaar.io/graphql",
      headers: {
        "Content-Type": "application/json",
        Authorization: "",
      },
      body: {
        query: point_collection_activities,
        variables: {
          brand_uid: brand_uid,
        },
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
  it("Validate an API request with an empty Authorization header ", () => {
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

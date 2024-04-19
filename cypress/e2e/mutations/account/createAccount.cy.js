import {
  createAccountQuery,
  expectedCreateCustomerUserKeys,
  expectedCreateAccountDataTypes,
  createAccountSchema,
} from "../../../support/graphQL_queries/accounts";
import "../../../support/commands/accounts/accounts";

const Ajv = require("ajv");
const ajv = new Ajv();
describe("Test to create_account", () => {
  const apiKeys = Cypress.env("apiKeys");
  const baseUrl = Cypress.env("baseUrl");

  it("Validate the status code should be 200", () => {
    cy.request({
      method: "POST",
      url: baseUrl,
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKeys,
      },
      body: {
        query: createAccountQuery,
        variables: {
          data: {
            full_name: "",
            phone_number: "",
            email: "",
          },
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
        query: createAccountQuery,
        variables: {
          data: {
            full_name: "",
            phone_number: "",
            email: "",
          },
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
        query: createAccountQuery,
        variables: {
          data: {
            full_name: "",
            phone_number: "",
            email: "",
          },
        },
      },
    }).then(({ body }) => {
      const customer_user = body.data.create_account.customer_user;
      const create_account = body.data.create_account;
      expect(create_account.errors).to.be.an("array").that.is.empty;
      expect(customer_user).to.have.all.keys(expectedCreateCustomerUserKeys);
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
        query: createAccountQuery,
        variables: {
          data: {
            full_name: "",
            phone_number: "",
            email: "",
          },
        },
      },
    }).then(({ body }) => {
      const customer_user = body.data.create_account.customer_user;
      for (const field in expectedCreateAccountDataTypes) {
        expect(customer_user[field]).to.be.a(
          expectedCreateAccountDataTypes[field]
        );
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
        query: createAccountQuery,
        variables: {
          data: {
            full_name: "",
            phone_number: "",
            email: "",
          },
        },
      },
    }).then((response) => {
      const schema = createAccountSchema;
      const validate = ajv.compile(schema);
      const valid = validate(response.body);
      expect(valid).to.be.true;
    });
  });

  it("Validate API request with empty CustomerAttributes($data)", () => {
    cy.request({
      method: "POST",
      url: baseUrl,
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKeys,
      },
      body: {
        query: createAccountQuery,
        variables: {},
      },
    }).then(({ body }) => {
      const emptyData = body.errors[0].message;
      expect(emptyData).to.equal(
        "Variable $data of type CustomerAttributes! was provided invalid value"
      );
    });
  });
  it("Test to create account with empty full name", () => {
    cy.request({
      method: "POST",
      url: baseUrl,
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKeys,
      },
      body: {
        query: createAccountQuery,
        variables: {
          data: {
            full_name: null,
            phone_number: "",
            email: "",
          },
        },
      },
    }).then(({ body }) => {
      const emptyData = body.errors[0].message;
      expect(emptyData).to.equal(
        "Variable $data of type CustomerAttributes! was provided invalid value for full_name (Expected value to not be null)"
      );
    });
  });
  it("Validate the test for already existing phone number", () => {
    cy.request({
      method: "POST",
      url: baseUrl,
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKeys,
      },
      body: {
        query: createAccountQuery,
        variables: {
          data: {
            full_name: "",
            phone_number: "123",
            email: "",
          },
        },
      },
    }).then(({ body }) => {
      const phone_number_error = body.data.create_account.errors[0];
      expect(phone_number_error).to.equal(
        "Phone number has already been taken"
      );
    });
  });
  it("Validate the test for already existing email", () => {
    cy.request({
      method: "POST",
      url: baseUrl,
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKeys,
      },
      body: {
        query: createAccountQuery,
        variables: {
          data: {
            full_name: "",
            phone_number: "",
            email: "test@gmail.com",
          },
        },
      },
    }).then(({ body }) => {
      const phone_number_error = body.data.create_account.errors[0];
      expect(phone_number_error).to.equal("Email has already been taken");
    });
  });
  it("Validate the test for invalid email", () => {
    cy.request({
      method: "POST",
      url: baseUrl,
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKeys,
      },
      body: {
        query: createAccountQuery,
        variables: {
          data: {
            full_name: "",
            phone_number: "",
            email: "testgmail.com",
          },
        },
      },
    }).then(({ body }) => {
      const phone_number_error = body.data.create_account.errors[0];
      expect(phone_number_error).to.equal("Email is invalid");
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
        query: createAccountQuery,
        variables: {
          data: {
            full_name: "",
            phone_number: "",
            email: "",
          },
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

# Upzaar API Automation testing using Cypress

This project automates different API responses from Upzaar GraphQL API using the Cypress.

## Upzaar GraphQL API
- API Documentation: https://developers.upzaar.com/docs/api-guides:

## Requirements

- Any computer: Mac, Windows, Linux
- Node 12.0.0+ (LTS)
- git
## About project

- Cypress is used as Test automation framework 
- For reports cucumber-html-reporter is used
- Cypress parallel is implemented to execute test in parallel
- cucumber-json-merge is used to consolidate test
- Used chai-sorted assertion

### In order to get the code and install dependencies

- ``` git clone https://github.com/buttercloud/upzaar_tests.git ```
- ``` cd upzaar_tests ```
- ``` npm install ```

### Execute test on cypress test runner locally 

- ``` npm run cy:open ```

### Execute test on cypress terminal

- ``` npm run cypress:ci ```

### Execute test on electron browser locally

- ``` npm run e2e:electron```

### Following is the report path

./reports/index.html

### Screenshots

Failed test screenshot available at: upzaar_tests/cypress/screenshots/

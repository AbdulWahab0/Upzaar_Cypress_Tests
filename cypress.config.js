const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  projectId: "yazz3w",
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "End to End Upzaar API test results",
    embeddedScreenshots: false,
    inlineAssets: true,
    saveAllAttempts: false,
    overwrite: false,
    html: false,
    json: true,
    viewportWidth: 2000,
    viewportHeight: 960,
  },
  e2e: {
    specPattern: ["cypress/e2e/**/*.feature", "cypress/e2e/**/*.cy.js"],
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      on("file:preprocessor", cucumber());
    },
  },
  env: {
    url: "https://upzaar-customer-web-xp-git-sandbox-buttercloud.vercel.app/",
  },
});

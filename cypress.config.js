const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {

    baseUrl: "https://growth.deel.training/",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

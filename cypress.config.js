const { defineConfig } = require("cypress");
const { tagify } = require("cypress-tags");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', tagify(config));
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
    baseUrl: 'http://192.168.55.225:9000/'
  }
});

const { defineConfig } = require("cypress");
// const { tagify } = require("cypress-tags");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here 
      // on('file:preprocessor', tagify(config));
    },
    baseUrl: 'http://192.168.55.225:9000/'
  }
});

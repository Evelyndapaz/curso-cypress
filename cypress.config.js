const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'r4q147',
  e2e: {
    setupNodeEvents(on, config) {
      { "reporter"; "mochawesome", 
        "reporterOptions"; 
          { "reportDir"; "cypress/report/mochawesome-report", 
           "overwrite"; true, 
           "html"; true, 
           "json"; false, 
           "timestamp"; "mmddyyyy_HHMMss"
          }}
    },
  },
});



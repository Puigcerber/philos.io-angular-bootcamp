'use strict';

exports.config = {
  // Spec patterns are relative to the location of this config.
  specs: ['e2e/**/*.spec.js'],

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Calls to protractor.get() with relative paths will be resolved against this URL.
  baseUrl: 'http://localhost:3000'

};

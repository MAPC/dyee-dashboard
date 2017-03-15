/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'dyee-summer-dashboard',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV['host'] = '';

  if (environment === 'development') {
    ENV['host'] = '';
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'cbo_development') {
    ENV['host'] = 'http://localhost:3000';
  }

  if (environment === 'local_test_server') {
    ENV['host'] = 'http://localhost:3000';
  }

  if (environment === 'production') {
    ENV['ember-cli-mirage'] = {
      enabled: false
    }
    ENV['host'] = 'http://54.145.243.75';

  }

  return ENV;
};

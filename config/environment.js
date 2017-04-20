/* jshint node: true */

module.exports = function(environment) {
  var deployTarget = process.env.DEPLOY_TARGET;
  var ENV = {
    typekit: {
      kitId: 'rsf1xqd',
    },
    locationType: 'router-scroll',
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
    },
    googleFonts: [
      'Source+Sans+Pro'
    ],
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' www.google-analytics.com",
      'font-src': "'self'",
      'connect-src': "'self' www.google-analytics.com",
      'img-src': "'self'",
      'style-src': "'self'",
      'media-src': "'self'"
    },
    metricsAdapters: [
      {
        name: 'GoogleAnalytics',
        environments: ['development', 'production'],
        config: {
          id: 'UA-5547782-29',
          // Use `analytics_debug.js` in development
          // debug: environment === 'development',
          // Use verbose tracing of GA events
          // trace: environment === 'development',
          // Ensure development env hits aren't sent to GA
          sendHitTask: environment !== 'development'
        }
      }
    ]
  };

  ENV['host'] = '';

  if (environment === 'development') {
    ENV['host'] = '';
    ENV['ember-cli-mirage'] = {
      enabled: true
    }
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'development_rails') {
    ENV['host'] = 'http://localhost:3000';
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

  if (deployTarget === 'staging') {
    ENV['ember-cli-mirage'] = {
      enabled: false
    }
    ENV['host'] = 'https://dyee-staging.mapc.org';
  }

  if (environment === 'staging') {
    ENV['ember-cli-mirage'] = {
      enabled: false
    }
    ENV['host'] = 'https://dyee-staging.mapc.org';
  }

  if (environment === 'production') {
    ENV['ember-cli-mirage'] = {
      enabled: false
    }
    ENV['host'] = 'https://dyee.mapc.org';

  }

  return ENV;
};

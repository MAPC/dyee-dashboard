module.exports = function(deployTarget) {  
  let ENV = {
    build: {
      environment: function() {
        if (deployTarget === 'development') {
          return 'development'
        }
        if (deployTarget === 'staging') {
          return 'staging'
        }
        if (deployTarget === 'production') {
          return 'production'
        }

      }
    },
    pagefront: {
      app: 'dyee-dashboard',
      key: process.env.PAGEFRONT_KEY
    }
  };

  return ENV;
};

module.exports = function(deployTarget) {  
  let ENV = {
    build: {
      environment: deployTarget === 'development' ? 'development' : 'production'
    },
    pagefront: {
      app: 'dyee-dashboard',
      key: process.env.PAGEFRONT_KEY
    }
  };

  return ENV;
};

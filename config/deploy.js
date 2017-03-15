module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'dyee-dashboard',
      key: process.env.PAGEFRONT_KEY
    }
  };
};

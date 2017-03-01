module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'dyee',
      key: process.env.PAGEFRONT_KEY
    }
  };
};

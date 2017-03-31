import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    didTransition() {
      window.location.href='https://successlink-boston.icims.com/jobs/login?loginOnly=1&redirect=&hashed=-435683065';
    }
  }
});

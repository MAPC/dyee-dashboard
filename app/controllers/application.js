import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['token','email'],
  token: null,
  email: null
});

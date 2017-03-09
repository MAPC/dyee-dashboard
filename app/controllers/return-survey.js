import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['site_name'],

  site_name: null,
  fields: ['person_name'],

  actions: {
    clearDropdown() {
      this.set('site_name', null);
    }
  }
});

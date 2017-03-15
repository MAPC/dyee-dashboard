import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['site_name'],

  site_name: null,
  fields: ['person_name'],
  sorted_sites: Ember.computed('model.sites', function() {
    return this.get('model.sites').sort();
  }),

  actions: {
    clearDropdown() {
      this.set('site_name', null);
    }
  }
});

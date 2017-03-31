import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.modelFor('applicants').requisitions.findBy('id', params.id);
  }
});

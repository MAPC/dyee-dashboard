import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller, model) {
    this._super(controller, model);
    let user_interest_categories = model.user.get('applicant_interests');
    this.controllerFor('jobs.index').set('selectedInterestCategories', Ember.copy(user_interest_categories));
  }
});

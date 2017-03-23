import Ember from 'ember';
import UpdateMapBounds from '../../mixins/update-map-bounds';

export default Ember.Route.extend({
  setupController(controller, model) {
    this._super(controller, model);
    let user_interest_categories = model.user.get('applicant_interests');
    this.controllerFor('jobs.index').set('selectedInterestCategories', user_interest_categories);
  }
});

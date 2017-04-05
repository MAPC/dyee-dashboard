import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model(params) {
    let applicant = this.modelFor('applicants.show-applicant');
    return RSVP.hash({
      pick: this.store.createRecord('pick', { applicant }),
      applicant,
      positions: this.modelFor('applicants').user.get('positions')
    });
  },
  actions: {
    associatePosition(model, position) {
      model.pick.setProperties({position});
      model.pick.save();
    }
  }
});

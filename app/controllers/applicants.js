import Ember from 'ember';

export default Ember.Controller.extend({
  mapState: Ember.inject.service(),
  fields: [ 'first_name',
            'last_name',
            'icims_id',
            'lottery_number',
            'truncatedInterests' ],
  actions: {
    linkTo(model) {
      this.transitionToRoute('applicants.show', model);
    }
  }
});

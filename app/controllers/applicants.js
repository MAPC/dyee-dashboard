import Ember from 'ember';

export default Ember.Controller.extend({
  mapState: Ember.inject.service(),
  fields: [ 'first_name',
            'last_name',
            'icims_id',
            'lottery_number',
            'truncatedInterests' ],
  source: Ember.computed('model', function() {
    let applicants = this.get('model');
    return applicants.map((el) => { return { title: el.get('full_name'), id: el.get('id'), description: `ICIMS ID: ${el.get('icims_id')}` }; });
  }),
  actions: {
    linkTo(model, event) {
      event.target.bringToFront();
      this.transitionToRoute('applicants.show', model);
    },
    linkToApplicant(applicant) {
      this.transitionToRoute('applicants.show', applicant.id);
    },
    setMapInstance(map) {
      this.set('mapState.mapInstance', map.target);
    }
  }
});

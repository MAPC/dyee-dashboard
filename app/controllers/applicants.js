import Ember from 'ember';
import { array, math, divide } from 'ember-awesome-macros';
import computed from 'ember-computed-decorators';
const ALLOCATION_RULE = 2;

export default Ember.Controller.extend({
  queryParams: ['email','token'],
  mapState: Ember.inject.service(),
  fields: [ 'applicant.first_name',
            'applicant.last_name',
            'applicant.isReturning',
            'position.title',
            'status' ],
  transition: 'toUp',

  @computed('model')
  source(applicants) {
    if (Ember.isArray(applicants)) {
      return applicants.map((el) => { 
        return {  title: el.get('full_name'), 
                  id: el.get('id'), 
                  description: `ICIMS ID: ${el.get('icims_id')}` }; 
      });
    }
  },
  requisitionsToHire: Ember.computed('model.requisitions.@each.status', function() {
    return this.get('model.requisitions').filterBy('status', 'hire');
  }),
  uniqSiteName: Ember.computed('model.user', function() {
    return this.get('model.user.positions').uniqBy('site_name').get('firstObject.site_name');
  }),
  totalAllotments: array.reduce('model.user.positions', (int, cur, i) => {
    return int + Math.floor(cur.get('open_positions')/ALLOCATION_RULE);
  }, 0), 
  directSelectAllotments: math.floor(divide('totalAllotments', ALLOCATION_RULE)),
  lotteryAllotments: math.ceil(divide('totalAllotments', ALLOCATION_RULE)),
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

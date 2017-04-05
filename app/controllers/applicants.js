import Ember from 'ember';
import { array, math, divide } from 'ember-awesome-macros';
import computed from 'ember-computed-decorators';
import { flatten } from '../helpers/flatten';
const ALLOCATION_RULE = 2;

export default Ember.Controller.extend({
  mapState: Ember.inject.service(),
  fields: [ 'applicant.last_name',
            'applicant.first_name',
            'position.title',
            'status' ],
  applicants_fields: [  'last_name',
                        'first_name',
                        'email',
                        'mobile_phone' ],
  transition: 'toUp',

  @computed('model.applicants', 'model.user.positions')
  filteredApplicants(applicants, user_positions) {
    return applicants.filter(applicant=> {
      return user_positions.mapBy('category').some(category=>{
        return applicant.get('interests').includes(category);
      });
    })
  },

  @computed('model.picks.[]')
  pickedApplicants(picks) {
    return picks.mapBy('applicant');
  },
  uniqSiteName: Ember.computed('model.user', function() {
    return this.get('model.user.positions').uniqBy('site_name').get('firstObject.site_name');
  }),
  totalAllotments: Ember.computed('model.user.positions', function() {
    return this.get('model.user.positions.firstObject.open_positions');
  }), 
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
    },
    changePosition(pick, position) {
      pick.setProperties({ position });
      pick.save();
    },
    removePick(pick) {
      pick.deleteRecord();
      pick.save();
    },
    pickTeen(requisition) {
      let { applicant, position } = requisition.getProperties('applicant', 'position');
      requisition.set('status', 'hire');
      this.store.createRecord('pick', {
        applicant,
        position
      }).save();
    }
  }
});

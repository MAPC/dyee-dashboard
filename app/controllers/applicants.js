import Ember from 'ember';
import { array, math, divide } from 'ember-awesome-macros';
import computed from 'ember-computed-decorators';
import { flatten } from '../helpers/flatten';

export default Ember.Controller.extend({
  queryParams: ['min','max'],
  fields: [ 'applicant.first_name',
            'applicant.last_name',
            'position.title',
            'status' ],
  applicants_fields: [  'first_name',
                        'last_name',
                        'email',
                        'mobile_phone' ],
  transition: 'toUp',

  @computed('model.applicants')
  source(applicants) {
    return applicants.map((el) => { 
      return {  title:       `${el.get('first_name')} ${el.get('last_name')}`, 
                id:          el.get('id'), 
                description: el.get('interests').join(', ') }; 
    });
  },

  @computed('model.picks.[]')
  pickedApplicants(picks) {
    return picks.mapBy('applicant');
  },

  @computed('model.picks.[]')
  numberChosen(picks) {
    return picks.get('length');
  },

  @computed('numberChosen', 'directSelectAllotments')
  hasHitLimit(numberChosen, directSelectAllotments) {
    return numberChosen >= directSelectAllotments;
  },
  uniqSiteName: Ember.computed('model.user', function() {
    return this.get('model.user.positions').uniqBy('site_name').get('firstObject.site_name');
  }),
  totalAllotments: Ember.computed('model.user.positions', function() {
    return this.get('model.user.positions.firstObject.open_positions');
  }), 
  directSelectAllotments: math.floor(divide('totalAllotments', 'model.user.allocation_rule')),
  lotteryAllotments: math.ceil(divide('totalAllotments', 'model.user.allocation_rule')),
  selectionTotal: divide(100, 'model.user.allocation_rule'),

  @computed('model.user.positions')
  userInterests(positions) {
    return positions.mapBy('category').uniq().join(', ')
  },

  fakeSubmitButton: false,

  min: 0,
  max: 20,
  perPage: 20,

  @computed('max', 'perPage')
  page(max, perPage) {
    return Math.round(max/perPage);
  },
  @computed('model.applicants','min','max','perPage')
  paginatedModels(model,min,max) {
    return model.slice(min,max).sortBy('last_name');
  },
  actions: {
    previous() {
      let { min, max, perPage } = this.getProperties('min','max','perPage');
      this.set('transition', 'toDown');
      this.set('min', min - perPage);
      this.set('max', max - perPage);
    },
    next() {
      let { min, max, perPage } = this.getProperties('min','max','perPage');
      this.set('transition', 'toUp');
      this.set('min', min + perPage);
      this.set('max', max + perPage);
    },
    first() {
      let { min, max, perPage } = this.getProperties('min','max','perPage');
      this.set('transition', 'toDown');
      this.set('min', 0);
      this.set('max', perPage);
    },
    last() {
      let { model, perPage } = this.getProperties('model','perPage');
      let count = model.applicants.get('length');
      this.set('transition', 'toUp');
      this.set('min', Math.floor(count / perPage) * perPage );
      this.set('max', (Math.floor(count / perPage) * perPage) + perPage);
    },

    linkTo(model, event) {
      event.target.bringToFront();
      this.transitionToRoute('applicants.show', model);
    },
    linkToApplicant(applicant) {
      this.transitionToRoute('applicants.show-applicant', applicant.id);
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

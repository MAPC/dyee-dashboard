import Ember from 'ember';

export default Ember.Controller.extend({
  fields: [
    'email',
    'mobile_phone',
    'guardian_name',
    'guardian_phone',
    'guardian_email',
    'school_type',
    'bps_school_name',
    'current_grade_level',
    'other_languages',
    'address',
    'home_phone'
  ],
  uniqInterests: Ember.computed('model.applicant.interests', function() {
    return this.get('model.applicant.interests').uniq().sort();
  }),
  actions: {
    changeStatus(status) {
      let model = this.get('model');
      model.setProperties({status});
      model.save();
    }
  }
});

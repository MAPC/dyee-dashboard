import Ember from 'ember';

export default Ember.Controller.extend({
  fields: [
    'email',
    'icims_id',
    'created_at',
    'updated_at',
    'lottery_number',
    'position_location',
    'position_role',
    'grid_id',
    'mobile_phone',
    'guardian_name',
    'guardian_phone',
    'guardian_email',
    'school_type',
    'bps_school_name',
    'current_grade_level',
    'other_languages',
    'address',
    'home_phone',
    'workflow_id'
  ],
  uniqInterests: Ember.computed('model.interests', function() {
    return this.get('model.interests').uniq().sort();
  })
});

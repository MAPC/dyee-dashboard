import Ember from 'ember';

export default Ember.Controller.extend({
  fields: [ 'last_name',
            'first_name',
            'icims_id',
            'lottery_number',
            'truncatedInterests',
            'grid_id',
            'mobile_phone',
            'guardian_name',
            'guardian_phone',
            'guardian_email',
            'in_school',
            'school_type',
            'bps_student',
            'bps_school_name',
            'current_grade_level',
            'english_first_language',
            'first_language',
            'fluent_other_language',
            'other_languages',
            'held_successlink_job_before',
            'previous_job_site',
            'wants_to_return_to_previous_job',
            'superteen_participant',
            'address',
            'home_phone',
            'workflow_id',
            'receive_text_messages'
             ],
  queryParams: ['min','max'],
  min: 0,
  max: 20,
  perPage: 20,
  transition: 'toUp',
  page: Ember.computed('min','max','perPage', function() {
    let { max, perPage } = this.getProperties('max','perPage');
    return Math.round(max/perPage);
  }),
  sortedModel: Ember.computed('model','min','max','perPage', function() {
    let { model, min, max, perPage } = this.getProperties('model', 'min', 'max', 'perPage');
    return model.sortBy('last_name').slice(min,max);
  }),
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
      let count = model.get('length');
      this.set('transition', 'toUp');
      this.set('min', count - perPage);
      this.set('max', count);
    }
  }
});


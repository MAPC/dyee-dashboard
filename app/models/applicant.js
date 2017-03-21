import DS from 'ember-data';
import { truncateText } from '../helpers/truncate-text';

export default DS.Model.extend({
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  full_name: Ember.computed('first_name', 'last_name', function() {
    let { first_name, last_name } = this.getProperties('first_name','last_name');
    return `${first_name} ${last_name}`;
  }),
  email: DS.attr('string'),
  icims_id: DS.attr('number'),
  prefers_nearby: DS.attr('boolean'),
  has_transit_pass: DS.attr('boolean'),
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date'),
  lottery_number: DS.attr('number'),
  interests: DS.attr(),
  age: DS.attr('number'),
  position_location: DS.attr('string'),
  position_role: DS.attr('string'),  
  grid_id: DS.attr('number'),
  mobile_phone: DS.attr('string'), 
  guardian_name: DS.attr('string'), 
  guardian_phone: DS.attr('string'), 
  guardian_email: DS.attr('string'), 
  in_school: DS.attr('boolean'), 
  school_type: DS.attr('string'), 
  bps_student: DS.attr('boolean'), 
  bps_school_name: DS.attr('string'), 
  current_grade_level: DS.attr('string'), 
  english_first_language: DS.attr('boolean'), 
  first_language: DS.attr('string'), 
  fluent_other_language: DS.attr('boolean'), 
  other_languages: DS.attr(), 
  held_successlink_job_before: DS.attr('boolean'), 
  previous_job_site: DS.attr('string'), 
  wants_to_return_to_previous_job: DS.attr('boolean'), 
  superteen_participant: DS.attr('boolean'), 
  participant_essay: DS.attr('string'), 
  address: DS.attr('string'),  
  home_phone: DS.attr('string'), 
  workflow_id: DS.attr('string'),
  receive_text_messages: DS.attr('boolean'),
  hasGeom: Ember.computed('latitude', 'longitude', function() {
    let { latitude, longitude } = this.getProperties('latitude', 'longitude')
    return latitude && longitude;
  }),

  job: DS.belongsTo('job'),

  user: DS.belongsTo({ async: true }),

  isSelected: false,
  truncatedInterests: Ember.computed('interests', function() {
    let interests = this.get('interests');
    return truncateText(interests, { limit: 10 })
  })
});


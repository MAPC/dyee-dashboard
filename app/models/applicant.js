import DS from 'ember-data';

export default DS.Model.extend({
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  email: DS.attr('string'),
  icims_id: DS.attr('number'),
  prefers_nearby: DS.attr('boolean'),
  has_transit_pass: DS.attr('boolean'),
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date'),
  lottery_number: DS.attr('number'),
  interests: DS.attr()
});
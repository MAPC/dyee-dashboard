import DS from 'ember-data';
import { truncateText } from '../helpers/truncate-text';

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
  interests: DS.attr(),
  age: DS.attr('number'),
  position_location: DS.attr('string'),
  position_role: DS.attr('string'),
  hasGeom: Ember.computed('latitude', 'longitude', function() {
    let { latitude, longitude } = this.getProperties('latitude', 'longitude')
    return latitude && longitude;
  }),
  isSelected: false,
  truncatedInterests: Ember.computed('interests', function() {
    let interests = this.get('interests');
    return truncateText(interests, { limit: 10 })
  })
});

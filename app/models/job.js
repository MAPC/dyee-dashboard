import DS from 'ember-data';

export default DS.Model.extend({
  site_name: DS.attr('string'),
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  description: DS.attr('string'),
  interests: DS.attr({ defaultValue: function() {
    return Ember.A(['No Category']);
  }}),
  applicants: DS.hasMany('applicant'),
  isSelected: false
});

import DS from 'ember-data';

export default DS.Model.extend({
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  category: DS.attr('string'),
  site_name: DS.attr('string'),
  title: DS.attr('string'),
  duties_responsbilities: DS.attr('string'),
  ideal_candidate: DS.attr('string'),
  open_positions: DS.attr('number'),
  external_application_url: DS.attr('string'),
  applicants: DS.hasMany('applicant'),
  isSelected: false
});

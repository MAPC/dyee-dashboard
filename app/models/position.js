import DS from 'ember-data';

export default DS.Model.extend({
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  category: DS.attr('string'),
  site_name: DS.attr('string'),
  title: DS.attr('string'),
  external_application_url: DS.attr('string'),
  primary_contact_person: DS.attr('string'),
  primary_contact_person_title: DS.attr('string'),
  primary_contact_person_phone: DS.attr('string'),
  site_phone: DS.attr('number'),
  duties_responsbilities: DS.attr('string'),
  ideal_candidate: DS.attr('string'),
  open_positions: DS.attr('number'),
  applicants: DS.hasMany('applicant'),
  hasExternalApp: Ember.computed('external_application_url', function() {
    return !Ember.isEmpty(this.get('external_application_url'));
  }),
  isSelected: false
});


 
 
 
 
 
 
import DS from 'ember-data';

export default DS.Model.extend({
  site_name: DS.attr('string'),
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  interests: DS.attr(),
  isSelected: false
});

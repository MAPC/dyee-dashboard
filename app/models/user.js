import DS from 'ember-data';

export default DS.Model.extend({
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  applicant: DS.belongsTo('applicant', { async: true }),
  applicant_interests: DS.attr()
});

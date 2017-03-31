import DS from 'ember-data';
import computed from 'ember-computed-decorators';

export default DS.Model.extend({
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  applicant: DS.belongsTo('applicant', { async: true }),
  positions: DS.hasMany('position'),
  applicant_interests: DS.attr('json-null-to-empty'),

  @computed('positions')
  site_name(positions) {
    return positions.uniqBy('site_name').get('firstObject');
  }
});

import DS from 'ember-data';
import RSVP from 'rsvp';
import computed from 'ember-computed-decorators';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  username: validator('presence', true),
  password: [
    validator('presence', true),
    validator('length', {
      min: 4,
      max: 8
    })
  ],
  email: [
    validator('presence', true),
    validator('format', { type: 'email' })
  ],
  emailConfirmation: [
    validator('presence', true),
    validator('confirmation', {
      on: 'email',
      message: '{description} do not match',
      description: 'Email addresses'
    })
  ]
});

export default DS.Model.extend({
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  applicant: DS.belongsTo('applicant', { async: true }),
  positions: DS.hasMany('position'),
  applicant_interests: DS.attr('json-null-to-empty'),
  picks_count: Ember.computed('positions.@each.picks', function() {
    return this.get('positions').then(positions=> {
      return RSVP.all(positions.invoke('get', 'picks')).then(picks=> {
        console.log(picks);
        return picks.mapBy('length').reduce((num, cur, i) => { return num+cur; },0);
      });
    })
  }),
  @computed('positions')
  site_name(positions) {
    return positions.uniqBy('site_name').get('firstObject');
  }
});

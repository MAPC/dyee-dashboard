import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  // model() {
  //   // returns all applicants, similar to inner join
  //   return this.modelFor('applicants').get('positions').then(positions=> {
  //     return RSVP.all(positions.mapBy('applicants')).then(applicants=> {
  //       return flatten(applicants);
  //     });
  //   });
  // }
});

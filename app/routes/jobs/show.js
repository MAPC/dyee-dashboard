import Ember from 'ember';
import RSVP from 'rsvp';
import CenterMapOnGeometry from '../../mixins/center-map-on-geometry';

export default Ember.Route.extend(CenterMapOnGeometry.reopen({ hashProperty: 'job' }), {
  model(param) {
    // return this.modelFor('jobs').jobs.findBy('id', param.id);
    const job = this.modelFor('jobs').jobs.findBy('id', param.id);
    const user = this.modelFor('jobs').user;
    return RSVP.hash({
      job,
      user
    });
  }
});

import Ember from 'ember';
import updateMapBounds from '../mixins/update-map-bounds';
import RSVP from 'rsvp';

export default Ember.Route.extend(updateMapBounds.reopen({ hashProperty: 'jobs', modelName: 'jobs' }), {
  model(params) {
    let user = this.modelFor('application');
    return RSVP.hash({
      jobs: this.store.findAll('position'),
      user
    });
  }
});

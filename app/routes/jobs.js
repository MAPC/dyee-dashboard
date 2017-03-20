import Ember from 'ember';
import updateMapBounds from '../mixins/update-map-bounds';
import RSVP from 'rsvp';

export default Ember.Route.extend(updateMapBounds.reopen({ hashProperty: 'jobs', modelName: 'jobs' }), {
  model(params) {
    return RSVP.hash({
      jobs: this.store.findAll('job'),
      //todo: update with real token information
      user: this.store.find('user', 1)
    });
  }
});
import Ember from 'ember';
import updateMapBounds from '../mixins/update-map-bounds';

export default Ember.Route.extend(updateMapBounds, {
  mapState: Ember.inject.service(),
  model() {
    return this.store.findAll('applicant');
  }
});

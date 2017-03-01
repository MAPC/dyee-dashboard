import Ember from 'ember';

export default Ember.Route.extend({
  mapState: Ember.inject.service(),
  model() {
    return this.store.findAll('applicant');
  },
  afterModel() { 
    let applicants = this.modelFor(this.routeName);
    let mapState = this.get('mapState');

    let LatLngs = applicants.map(
      (applicant) => { 
        let { latitude, longitude } = applicant.getProperties('latitude', 'longitude');
        return L.latLng([applicant.get('latitude'), applicant.get('longitude')]); 
      }
    );

    let bounds = L.latLngBounds(LatLngs);
    mapState.set('bounds', bounds);
  },
  actions: {
    didTransition() {
      this.afterModel();
    }
  }
});

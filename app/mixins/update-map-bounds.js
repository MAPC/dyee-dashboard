import Ember from 'ember';

export default Ember.Mixin.create({
  mapState: Ember.inject.service(),
  modelName: Ember.computed(function() { return this.routeName; }),
  hashProperty: null,
  afterModel() { 
    let applicants = this.modelFor(this.get('modelName'));
    let mapState = this.get('mapState');

    if(this.get('hashProperty')) {
      applicants = applicants.jobs;
    }

    let LatLngs = applicants.map(
      (applicant) => { 
        let { latitude, longitude } = applicant.getProperties('latitude', 'longitude');
        return L.latLng([applicant.get('latitude'), applicant.get('longitude')]); 
      }
    );

    let bounds = L.latLngBounds(LatLngs);
    mapState.set('bounds', bounds);
    return this._super();
  },
  actions: {
    didTransition() {
      this.afterModel();
      return this._super();
    }
  }
});

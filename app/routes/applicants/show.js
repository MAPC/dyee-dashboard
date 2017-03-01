import Ember from 'ember';
import CenterMapOnGeometry from '../../mixins/center-map-on-geometry';

export default Ember.Route.extend(CenterMapOnGeometry, {
  mapState: Ember.inject.service(),
  model(param) {
    return this.store.findRecord('applicant', param.id);
  },
  afterModel() {
    let applicant = this.modelFor(this.routeName),
        mapState = this.get('mapState'),
        { latitude, longitude } = applicant.getProperties('latitude', 'longitude');

    let offset_x = -0.09,
        offset_y = 0.09;

    let topleft = L.latLng(
      [ latitude+offset_y, longitude+offset_x ]
    ); 

    let bottomright = L.latLng(
      [ latitude-offset_y, longitude-offset_x ]
    ); 

    let bounds = L.latLngBounds([topleft, bottomright]);
    mapState.set('bounds', bounds);
  }
});

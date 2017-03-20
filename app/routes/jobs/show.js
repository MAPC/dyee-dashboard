import Ember from 'ember';
import CenterMapOnGeometry from '../../mixins/center-map-on-geometry';

export default Ember.Route.extend(CenterMapOnGeometry, {
  model(param) {
    return this.modelFor('jobs').findBy('id', param.id);
  }
});

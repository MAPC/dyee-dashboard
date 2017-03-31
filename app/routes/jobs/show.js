import Ember from 'ember';
import RSVP from 'rsvp';
import CenterMapOnGeometry from '../../mixins/center-map-on-geometry';
import RouterScroll from 'ember-router-scroll';

export default Ember.Route.extend(RouterScroll, CenterMapOnGeometry.reopen({ hashProperty: 'job' }), {
  mapState: Ember.inject.service(),
  model(param) {
    // return this.modelFor('jobs').jobs.findBy('id', param.id);
    const job = this.modelFor('jobs').jobs.findBy('id', param.id);
    const user = this.modelFor('jobs').user;
    return RSVP.hash({
      job,
      user
    });
  },
  actions: {
    // didTransition() {

    //   alert('this hook is called!');
    //   let mapState = this.get('mapState');
    //   mapState.mapInstance.setZoom(18);
    //   return this._super(...arguments);
    // }
  }

});

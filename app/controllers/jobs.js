import Ember from 'ember';

export default Ember.Controller.extend({
  mapState: Ember.inject.service(),
  actions: {
    linkTo(model, event) {
      event.target.bringToFront();
      this.transitionToRoute('jobs.show', model);
    },

    setMapInstance(map) {
      this.set('mapState.mapInstance', map.target);
    }
  }
});

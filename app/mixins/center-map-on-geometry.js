import Ember from 'ember';

export default Ember.Mixin.create({
  mapState: Ember.inject.service(),
  positionMap() {
    let mapState = this.get('mapState');
    let model = this.modelFor(this.routeName);
    let lat = model.get('latitude');
    let lng = model.get('longitude');
    model.set('isSelected', true);

    mapState.setProperties({
      lat,
      lng
    });
  },
  actions: {
    didTransition() { 
      this.positionMap();
      return this._super();
    },
    willTransition() {
      let model = this.modelFor(this.routeName);
      model.set('isSelected', false);
      return this._super();
    }
  }
});

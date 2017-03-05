import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ui-visibility-sticky'],
  mapState: Ember.inject.service(),
  didInsertElement() {
    let mapInstance = this.get('mapState.mapInstance.target');
    Ember.run.next(this, function() {
      this.$()
        .visibility({
          type   : 'fixed',
          offset : 15,
          onUpdate: function() {
            Ember.run.next(this, function() {
              mapInstance.invalidateSize();
              window.map=mapInstance;
            });
          }
        })
      ;
    })
  }
});

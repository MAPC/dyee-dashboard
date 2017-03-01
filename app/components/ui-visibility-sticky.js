import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ui-visibility-sticky'],
  didInsertElement() {
    Ember.run.next(this, function() {
      this.$()
        .visibility({
          type   : 'fixed',
          offset : 15 // give some space from top of screen
        })
      ;
    })
  }
});

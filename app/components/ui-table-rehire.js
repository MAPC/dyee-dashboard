import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    checkboxOnChange(model,value) {
      model.set('should_rehire', value);
      model.save();
    }
  }
});

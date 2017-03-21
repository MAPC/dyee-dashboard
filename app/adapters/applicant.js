import DS from 'ember-data';
import config from '../config/environment';

export default DS.JSONAPIAdapter.extend({
  namespace: 'api',
  // host: Ember.computed(() => { return config.host || '/'; }),
  host: 'http://localhost:4200',
  pathForType(type) {
    return Ember.String.underscore(type) + 's';
  },
  keyForAttribute(key) {
    alert('test');
    return key;
  }
});

import ApplicationAdapter from './application';
import config from '../config/environment';

export default ApplicationAdapter.extend({
  namespace: 'api',
  host: Ember.computed(() => { return config.host || '/'; }),
  keyForAttribute(key) {
    return key;
  }
});

import ApplicationAdapter from './application';
import config from '../config/environment';

export default ApplicationAdapter.extend({
  namespace: 'api',
  host: config.host,
  keyForAttribute(key) {
    alert("FUCK EVERYTHING")
    return Ember.String.underscore(key);
  },
});

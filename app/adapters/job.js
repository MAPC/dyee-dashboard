import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:4200',
  namespace: 'api',
  keyForAttribute(key) {
    return key;
  }
});
import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  positions: hasMany(),
  user: belongsTo(),
  requisitions: hasMany(),
  picks: hasMany()
});

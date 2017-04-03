import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  applicants: hasMany(),
  requisitions: hasMany(),
  picks: hasMany(),
  user: belongsTo()
});

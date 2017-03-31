import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  applicant: belongsTo(),
  positions: hasMany()
});

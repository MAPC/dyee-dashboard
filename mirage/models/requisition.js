import { Model, belongsTo, hasMany  } from 'ember-cli-mirage';

export default Model.extend({
  position: belongsTo(),
  applicant: belongsTo()
});

import { Factory, faker, hasMany, belongsTo } from 'ember-cli-mirage';

export default Factory.extend({
  status(i) {
    return faker.list.cycle(
      'interested',
      'hire',
      'do_not_hire'
    )(i);
  }
});


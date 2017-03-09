import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  person_name: faker.name.firstName,
  site_name() { return faker.company.companyName(); },
  should_rehire: faker.random.boolean
});

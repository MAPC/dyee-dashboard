import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  first_name: faker.name.firstName,
  last_name: faker.name.lastName,
  email: faker.internet.email,
  icims_id() { return faker.random.number({min: 1000000000 }); },
  prefers_nearby: faker.random.boolean,
  has_transit_pass: faker.random.boolean,
  latitude() { return Math.random() + 42; },
  longitude() { return Math.random() + (-71); },
  created_at: faker.date.past,
  updated_at: faker.date.recent,
  lottery_number() { return faker.random.number({min:100}); },
  interests(i) {
    return ["Athletic Assistant"];
  },
  age() { return faker.random.number({min:12, max:18}); },
  position_location() { return faker.company.companyName(); },
  position_role: faker.company.bs,
  is_returning: faker.random.boolean
});

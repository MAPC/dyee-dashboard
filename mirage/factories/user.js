import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  first_name: faker.name.firstName,
  last_name: faker.name.lastName,
  allocation_rule: faker.random.number({ min:1, max:2 }),
  applicant_interests(i) {
    return ["Athletic Assistant", "Information Technology"];
  },
  afterCreate(user, server) {
    server.create('applicant', { user });  
    server.create('position', { user });
    server.create('position', { user });
    server.create('position', { user });
  }
});

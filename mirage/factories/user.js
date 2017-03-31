import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  first_name: faker.name.firstName,
  last_name: faker.name.lastName,
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

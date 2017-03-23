import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  site_name() { return faker.company.companyName(); },
  latitude() { return (-0.01 * (Math.random())) + 42.3; },
  longitude() { return (-0.01 * (Math.random())) + (-71.17); },
  job_title() { return faker.name.jobTitle(); },
  description() { return faker.lorem.paragraph(); },
  positions_available() { return faker.random.number(); },
  interests(i) {
    return faker.list.cycle(
      ["Community Organizing"],
      ["Admin or Office Assistant","Business or Entrepreneurship","Child Care or Teacher's Assistant","Community Organizing","Engineering and/or Math","Hospitality & Tourism"],
      ["Community Organizing","Peer Leadership","Sports, Fitness and/or Recreation"],
      ["Digital Media, Communications or Film","Education or Tutoring","Engineering and/or Math","Environment, Natural Resources, and/or Agriculture"],
      ["Sports, Fitness and/or Recreation"],
      ["Admin or Office Assistant","Child Care or Teacher's Assistant","Health Care","Peer Leadership","Science","Veterinary or Marine Science","Visual or Performing Arts"],
      ["Sports, Fitness and/or Recreation"],
      ["Admin or Office Assistant","Sports, Fitness and/or Recreation"],
      ["Sports, Fitness and/or Recreation"]
    )(i);
  },
  category(i) {
    return faker.list.cycle(
      "Community Organizing",
      "Admin or Office Assistant",
      "Community Organizing",
      "Digital Media, Communications or Film",
      "Sports, Fitness and/or Recreation",
      "Admin or Office Assistant",
      "Sports, Fitness and/or Recreation",
      "Admin or Office Assistant",
      "Sports, Fitness and/or Recreation"
    )(i);
  },
  afterCreate(position, server) {
    server.create('applicant', { positions: [position] });
    server.create('applicant', { positions: [position] });  
    server.create('applicant', { positions: [position] });  
  }
});

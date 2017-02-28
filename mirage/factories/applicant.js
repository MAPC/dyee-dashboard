import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  first_name: faker.name.firstName,
  last_name: faker.name.lastName,
  email: faker.internet.email,
  icims_id: faker.random.number({min: 1000000000 }),
  prefers_nearby: faker.random.boolean,
  has_transit_pass: faker.random.boolean,
  latitude: faker.address.latitude([-84, -85]),
  longitude: faker.address.longitude([-84, -85]),
  created_at: faker.date.past,
  updated_at: faker.date.recent,
  lottery_number: faker.random.number({min:100}),
  interests(i) {
    return faker.list.cycle(
      ["Community Organizing"],
      ["Admin or Office Assistant","Business or Entrepreneurship","Child Care or Teacher's Assistant","Community Organizing","Engineering and/or Math","Hospitality & Tourism"],
      ["Community Organizing","Peer Leadership","Sports, Fitness and/or Recreation"],
      [],
      ["Digital Media, Communications or Film","Education or Tutoring","Engineering and/or Math","Environment, Natural Resources, and/or Agriculture"],
      ["Sports, Fitness and/or Recreation"],
      ["Admin or Office Assistant","Child Care or Teacher's Assistant","Health Care","Peer Leadership","Science","Veterinary or Marine Science","Visual or Performing Arts"],
      ["Sports, Fitness and/or Recreation"],
      ["Admin or Office Assistant","Sports, Fitness and/or Recreation"],
      ["Sports, Fitness and/or Recreation"]
    )(i);
  }
});

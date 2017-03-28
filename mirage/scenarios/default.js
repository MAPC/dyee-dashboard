export default function(server) {
  server.createList('applicant', 30);
  server.loadFixtures('positions');
  server.createList('user', 40);
  server.createList('rehire-site', 30);
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  // server.createList('post', 10);
}

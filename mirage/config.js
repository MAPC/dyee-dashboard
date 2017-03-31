export default function() {
  this.namespace = '/api';

  this.get('applicants');
  this.get('applicants/:id');
  this.get('requisitions/:id');
  this.get('applicants/:id/positions', function({ applicants }, { params }) {
    let applicant = applicants.findBy({
      id: params.id
    });

    if (!applicant) {
      return [];
    }

    return applicant.positions;
  });

  this.get('positions/:id/applicants', function({ positions }, { params }) {
    let position = positions.findBy({
      id: params.id
    });

    if (!position) {
      return [];
    }

    return position.applicants;
  });

  this.get('positions/:id/requisitions', function({ positions }, { params }) {
    let position = positions.findBy({
      id: params.id
    });

    if (!position) {
      return [];
    }

    return position.requisitions;
  });

  this.patch('requisitions/:id');

  this.get('positions/owned', function(schema, request) {
    console.log(schema,request);
    let user = schema.users.findBy({ id: 1 });
    return user.positions;
  });

  this.get('rehire_sites', (schema, request) => {
    console.log(request.queryParams['filter[site_name]']);
    return schema.rehireSites.where({ 'site_name': request.queryParams['filter[site_name]'] });
  });
  this.get('rehire_sites/get_uniq_sites', function(schema) {
    return schema.rehireSites.all().models.map((item) => { return item['site_name']; });
  });
  this.get('positions');
  this.get('positions/:id');
  this.get('users/:id');
  this.get('users');
  this.patch('rehire_sites/:id');
  this.patch('positions/:id');
  this.patch('applicants/:id');

  this.get('positions/:id/applicants', function({ positions }, { params }) {
    let job = positions.findBy({
      id: params.id
    });

    if (!job) {
      return [];
    }

    return job.applicants;
  });

  this.passthrough('http://localhost:3000/**');
  this.passthrough('http://10.10.30.51:3000/**');
  this.passthrough('https://youth-match-cbo.herokuapp.com/**');

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
}

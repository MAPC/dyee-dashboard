import Ember from 'ember';
import RSVP from 'rsvp';
import config from '../config/environment';

export default Ember.Route.extend({
  queryParams: {
    site_name: {
      refreshModel: true
    }
  },
  ajax: Ember.inject.service(),
  model(params) {
    let sites = this.get('ajax').request(config.host + '/api/rehire_sites/get_uniq_sites');
    return RSVP.hash({
      sites, 
      applicants: this.store.query('rehire-site', { filter: params })
    });
  }
});

import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('applicants', { path: '/' }, function() {
    this.route('show', { path: '/applicants/:id' });
  });
});

export default Router;

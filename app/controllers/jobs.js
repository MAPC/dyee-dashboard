import Ember from 'ember';
import { flatten } from '../helpers/flatten';

export default Ember.Controller.extend({
  mapState: Ember.inject.service(),
  source: Ember.computed('model', function() {
    let applicants = this.get('model.jobs');
    return applicants.map((el) => { return { title: el.get('site_name'), id: el.get('id'), description: el.get('interests') }; });
  }),
  interestCategories: Ember.computed('model', function() {
    let jobs = this.get('model.jobs');
    return flatten(jobs.mapBy('interests')).uniq();
  }),
  actions: {
    linkTo(model, event) {
      event.target.bringToFront();
      this.transitionToRoute('jobs.show', model);
    },
    linkToApplicant(job) {
      this.transitionToRoute('jobs.show', job.id);
    },
    setMapInstance(map) {
      this.set('mapState.mapInstance', map.target);
    }
  }
});

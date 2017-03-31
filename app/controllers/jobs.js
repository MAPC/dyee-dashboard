import Ember from 'ember';
import { nest } from 'd3-collection';
import computed from 'ember-computed-decorators';

export default Ember.Controller.extend({
  mapState: Ember.inject.service(),
  queryParams: ['token','email'],

  @computed('model.jobs')
  source(positions) {
    return positions.map((el) => { 
      return {  title: `${el.get('site_name')} (${el.get('category')})`, 
                id: el.get('id'), 
                description: el.get('category') }; 
    });
  },

  // this shoud be made into its own model at some point
  @computed('model.jobs.[]', 'model.jobs.@each.isSelected')
  clusters(positions) {
    let grouped = 
      nest().key((row) => { return row.get('site_name') })
            .entries(positions.toArray())
            .map((row) => {   row.latitude = row.values[0].get('latitude');
                              row.longitude = row.values[0].get('longitude');
                              row.hasManyJobs = (row.values.length > 1);
                              // is a job within the cluster selected?
                              row.isSelected = row.values.mapBy('isSelected').includes(true);
                              return row;  });
    return grouped;
  },
  actions: {
    linkTo(model, event) {
      event.target.bringToFront();
      this.transitionToRoute('jobs.show', model.id);
    },

    setMapInstance(map) {
      this.set('mapState.mapInstance', map.target);
    },

    resetMap(map) {
      Ember.run.next(()=> {
        map.target.invalidateSize();
      }); 
    },

    linkToApplicant(job) {
      this.transitionToRoute('jobs.show', job.id);
    }
  }
});

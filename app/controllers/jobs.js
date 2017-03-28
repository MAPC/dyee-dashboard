import Ember from 'ember';
import { nest } from 'd3-collection';

export default Ember.Controller.extend({
  mapState: Ember.inject.service(),

  // this shoud be made into its own model at some point
  clusters: Ember.computed('model.jobs.[]', 'model.jobs.@each.isSelected', function() {
    let positions = this.get('model.jobs');
    let grouped = 
      nest().key((row) => { return row.get('site_name') })
            .entries(positions.toArray())
            .map((row) => {   row.latitude = row.values[0].get('latitude');
                              row.longitude = row.values[0].get('longitude');

                              // is a job within the cluster selected?
                              row.isSelected = row.values.mapBy('isSelected').includes(true);
                              return row;  });
    return grouped;
  }),
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
    }
  }
});

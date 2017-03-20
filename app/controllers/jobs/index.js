import Ember from 'ember';

export default Ember.Controller.extend({
  fields: ['site_name', 'interests'],
  queryParams: ['min','max'],
  min: 0,
  max: 20,
  perPage: 20,
  transition: 'toUp',
  page: Ember.computed('min','max','perPage', function() {
    let { max, perPage } = this.getProperties('max','perPage');
    return Math.round(max/perPage);
  }),
  sortedModel: Ember.computed('model','min','max','perPage', function() {
    let { model, min, max, perPage } = this.getProperties('model', 'min', 'max', 'perPage');
    return model.jobs.sortBy('last_name').slice(min,max);
  }),
  resource: 'jobs.show',
  actions: {
    previous() {
      let { min, max, perPage } = this.getProperties('min','max','perPage');
      this.set('transition', 'toDown');
      this.set('min', min - perPage);
      this.set('max', max - perPage);
    },
    next() {
      let { min, max, perPage } = this.getProperties('min','max','perPage');
      this.set('transition', 'toUp');
      this.set('min', min + perPage);
      this.set('max', max + perPage);
    },
    first() {
      let { min, max, perPage } = this.getProperties('min','max','perPage');
      this.set('transition', 'toDown');
      this.set('min', 0);
      this.set('max', perPage);
    },
    last() {
      let { model, perPage } = this.getProperties('model','perPage');
      let count = model.get('length');
      this.set('transition', 'toUp');
      this.set('min', count - perPage);
      this.set('max', count);
    }
  }
});

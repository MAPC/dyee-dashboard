import Ember from 'ember';
import { flatten } from '../../helpers/flatten';
import computed from 'ember-computed-decorators';

export default Ember.Controller.extend({
  fields: ['site_name', 'title', 'open_positions', 'category'],
  queryParams: ['min','max'],
  min: 0,
  max: 9,
  perPage: 9,
  selectedInterestCategories: null,

  @computed('min','max','perPage')
  page(min,max,perPage) {
    return Math.round(max/perPage);
  },

  @computed('model.jobs')
  interestCategories(jobs) {
    return flatten(jobs.mapBy('category')).uniq();
  },

  @computed('model', 'selectedInterestCategories.[]')
  filteredModel(model,selectedInterestCategories) {
    return model.jobs.filter((el) => {
      return selectedInterestCategories.includes(el.get('category'));
    });
  },

  @computed('filteredModel','min','max','perPage')
  sortedModel(filteredModel,min,max) {
    return filteredModel.sortBy('site_name').slice(min,max);
  },

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
      let { filteredModel, perPage } = this.getProperties('filteredModel','perPage');
      let count = filteredModel.get('length');
      this.set('transition', 'toUp');
      this.set('min', count - perPage);
      this.set('max', count);
    },
    addInterest(interest) {
      this.send('first');
      this.get('selectedInterestCategories').pushObject(interest);
    },
    removeInterest(interest) {
      this.send('first');
      this.get('selectedInterestCategories').removeObject(interest);
    }
  }
});

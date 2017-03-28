import Ember from 'ember';
import { flatten } from '../../helpers/flatten';

export default Ember.Controller.extend({
  fields: ['site_name', 'title', 'open_positions', 'category'],
  queryParams: ['min','max'],
  min: 0,
  max: 8,
  perPage: 8,
  transition: 'toUp',
  selectedInterestCategories: null,
  page: Ember.computed('min','max','perPage', function() {
    let { max, perPage } = this.getProperties('max','perPage');
    return Math.round(max/perPage);
  }),
  interestCategories: Ember.computed('model', function() {
    let jobs = this.get('model.jobs');
    return flatten(jobs.mapBy('category')).uniq();
  }),
  filteredModel: Ember.computed('model', 'selectedInterestCategories.[]', function() {
    let { selectedInterestCategories, model } = this.getProperties('selectedInterestCategories', 'model');

    return model.jobs.filter((el) => {
      return selectedInterestCategories.includes(el.get('category'));
    });
  }),
  sortedModel: Ember.computed('filteredModel','min','max','perPage', function() {
    let { filteredModel, min, max, perPage } = this.getProperties('filteredModel', 'min', 'max', 'perPage');
    return filteredModel.sortBy('site_name').slice(min,max);
  }),

  source: Ember.computed('model', function() {
    let applicants = this.get('model.jobs');
    return applicants.map((el) => { return { title: el.get('site_name'), id: el.get('id'), description: el.get('interests') }; });
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
    },
    linkToApplicant(job) {
      this.transitionToRoute('jobs.show', job.id);
    }
  }
});

function intersect_safe(a, b)
{
  var ai=0, bi=0;
  var result = [];

  while( ai < a.length && bi < b.length )
  {
     if      (a[ai] < b[bi] ){ ai++; }
     else if (a[ai] > b[bi] ){ bi++; }
     else /* they're equal */
     {
       result.push(a[ai]);
       ai++;
       bi++;
     }
  }

  return result;
}

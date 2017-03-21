import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Controller.extend({
  fields: ['site_name', 'latitude', 'longitude'],
  isInterested: Ember.computed('model.user', 'model.job.applicants.@each.id', {
    get() {
      let { model } = this.getProperties('model');
      let { job, user } = model;
      let applicant = user.get('applicant');

      return job.get('applicants').isAny('id', applicant.get('id'));
    },
    set(key, value) {
      let { model } = this.getProperties('model');
      let { job, user } = model;

      user.get('applicant').then((applicant)=> {
        if(value) {
          job.get('applicants').pushObject(applicant);
          // job.save();
        } else {
          job.get('applicants').removeObject(applicant);
          // job.save();
        }
      });
    }
  }),
  actions: {
    toggleInterest() {
      this.toggleProperty('isInterested');
    }
  }
});

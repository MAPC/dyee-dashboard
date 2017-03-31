import Ember from 'ember';
import RSVP from 'rsvp';
import computed from 'ember-computed-decorators';

export default Ember.Controller.extend({
  fields: ['site_name', 'latitude', 'longitude'],

  @computed('model.user', 'model.job', 'model.job.applicants.@each.id')
  isInterested: {
    get(user, job) {
      let applicant = user.get('applicant');
      return job.get('applicants').isAny('id', applicant.get('id'));
    },
    set(value, user, job) {
      user.get('applicant').then((applicant) => {
        if(value) {
          job.get('applicants').pushObject(applicant);
          job.save();
        } else {
          job.get('applicants').removeObject(applicant);
          job.save();
        }
      });
    }
  },

  actions: {
    toggleInterest() {
      this.toggleProperty('isInterested');
    }
  }
});

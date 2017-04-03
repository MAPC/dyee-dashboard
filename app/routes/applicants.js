import Ember from 'ember';
import RSVP from 'rsvp';
import updateMapBounds from '../mixins/update-map-bounds';
import { flatten } from '../helpers/flatten';
import trackPage from '../mixins/track-page';

export default Ember.Route.extend(trackPage, {
  model(params) {
    return RSVP.hash({
      user: this.store.query('user', { email: params.email }).then((user) => {
        return user.get('firstObject');
      }),
      requisitions: this.store.query('user', { email: params.email }).then(user=> {
        return user.get('firstObject.positions').then(positions=> {
          return RSVP.all(positions.mapBy('requisitions')).then(collection=> {
            return flatten(collection);
          });
        });
      }),
      picks: this.store.query('user', { email: params.email }).then(user=> {
        return user.get('firstObject.positions').then(positions=> {
          return RSVP.all(positions.mapBy('picks')).then(collection=> {
            return flatten(collection);
          });
        });
      }),
      applicants: this.store.findAll('applicant')
    })
  }
});

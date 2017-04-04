import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.query('user', { email: params.email }).then((user) => {
      return user.get('firstObject');
    });
  }
});

import Ember from 'ember';

export default Ember.Controller.extend({
  selected_type_addition: ['New England Aquarium', 'Bikes Not Bombs', 'Roxbury Community Center', 'Mattapan Library'],
  fields: [ 'first_name',
              'last_name',
              'icims_id',
              'lottery_number',
              'interests' ]
});

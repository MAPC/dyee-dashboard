import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  headers: Ember.computed(function() {
    return {
      'authorization': `Token token=${parseUrlParams('token')}, email=${parseUrlParams('email')}`
    };
  })
});

function parseUrlParams(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);

    if(results) {
      return decodeURIComponent(results[1]) || 0;  
    } else {
      return false;
    }
    
}
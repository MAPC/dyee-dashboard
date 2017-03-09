import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({
  keyForAttribute(key) {
    console.log('test');
    return key;
  }
});

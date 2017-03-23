import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({
  links(position) {
    return {
      'applicants': {
        related: `/api/positions/${position.id}/applicants`
      }
    };
  },
  keyForAttribute(key) {
    return key;
  }
});

import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({
  links(position) {
    return {
      'applicants': {
        related: `/api/positions/${position.id}/applicants`
      },
      'requisitions': {
        related: `/api/positions/${position.id}/requisitions`
      },
      'picks': {
        related: `/api/positions/${position.id}/picks`
      }
    };
  },
  keyForAttribute(key) {
    return key;
  }
});

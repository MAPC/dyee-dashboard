import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({
  links(applicant) {
    return {
      'positions': {
        related: `/api/applicants/${applicant.id}/positions`
      }
    };
  },
  keyForAttribute(key) {
    return key;
  }
});

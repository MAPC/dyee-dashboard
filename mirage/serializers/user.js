import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({
  // links(applicant) {
  //   return {
  //     'applicants': {
  //       related: `/api/applicants/${applicant.id}`
  //     }
  //   };
  // },
  keyForAttribute(key) {
    return key;
  }
});

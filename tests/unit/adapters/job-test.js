import { expect } from 'chai';
import { describeModule, it } from 'ember-mocha';

describeModule(
  'adapter:job',
  'Unit | Adapter | job',
  {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  },
  function() {
    // Replace this with your real tests.
    it('exists', function() {
      let adapter = this.subject();
      expect(adapter).to.be.ok;
    });
  }
);

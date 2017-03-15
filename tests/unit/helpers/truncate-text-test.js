import { expect } from 'chai';
import { describe, it } from 'mocha';
import { truncateText } from 'dyee-summer-dashboard/helpers/truncate-text';

describe('Unit | Helper | truncate text', function() {
  // Replace this with your real tests.
  it('works', function() {
    let result = truncateText(42);
    expect(result).to.be.ok;
  });
});


import { expect } from 'chai';
import { describe, it } from 'mocha';
import { prettifyCamelCase } from 'dyee-summer-dashboard/helpers/prettify-camel-case';

describe('Unit | Helper | prettify camel case', function() {
  // Replace this with your real tests.
  it('works', function() {
    let result = prettifyCamelCase(42);
    expect(result).to.be.ok;
  });
});


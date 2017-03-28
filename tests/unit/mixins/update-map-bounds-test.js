import { expect } from 'chai';
import { describe, it } from 'mocha';
import Ember from 'ember';
import UpdateMapBoundsMixin from 'dyee-summer-dashboard/mixins/update-map-bounds';

describe('Unit | Mixin | update map bounds', function() {
  // Replace this with your real tests.
  it('works', function() {
    let UpdateMapBoundsObject = Ember.Object.extend(UpdateMapBoundsMixin);
    let subject = UpdateMapBoundsObject.create();
    expect(subject).to.be.ok;
  });
});

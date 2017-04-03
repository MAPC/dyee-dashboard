import { expect } from 'chai';
import { describe, it } from 'mocha';
import Ember from 'ember';
import TrackPageMixin from 'dyee-summer-dashboard/mixins/track-page';

describe('Unit | Mixin | track page', function() {
  // Replace this with your real tests.
  it('works', function() {
    let TrackPageObject = Ember.Object.extend(TrackPageMixin);
    let subject = TrackPageObject.create();
    expect(subject).to.be.ok;
  });
});

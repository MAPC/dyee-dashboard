import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | intersecting map tile', function() {
  setupComponentTest('intersecting-map-tile', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#intersecting-map-tile}}
    //     template content
    //   {{/intersecting-map-tile}}
    // `);

    this.render(hbs`{{intersecting-map-tile}}`);
    expect(this.$()).to.have.length(1);
  });
});

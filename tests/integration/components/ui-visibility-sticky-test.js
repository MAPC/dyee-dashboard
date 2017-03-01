import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | ui visibility sticky', function() {
  setupComponentTest('ui-visibility-sticky', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#ui-visibility-sticky}}
    //     template content
    //   {{/ui-visibility-sticky}}
    // `);

    this.render(hbs`{{ui-visibility-sticky}}`);
    expect(this.$()).to.have.length(1);
  });
});

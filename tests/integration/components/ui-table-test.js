import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | ui table', function() {
  setupComponentTest('ui-table', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#ui-table}}
    //     template content
    //   {{/ui-table}}
    // `);

    this.render(hbs`{{ui-table}}`);
    expect(this.$()).to.have.length(1);
  });
});

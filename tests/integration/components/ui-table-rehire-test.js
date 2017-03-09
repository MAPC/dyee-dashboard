import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | ui table rehire', function() {
  setupComponentTest('ui-table-rehire', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#ui-table-rehire}}
    //     template content
    //   {{/ui-table-rehire}}
    // `);

    this.render(hbs`{{ui-table-rehire}}`);
    expect(this.$()).to.have.length(1);
  });
});

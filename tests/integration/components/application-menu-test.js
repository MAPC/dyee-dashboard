import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | application menu', function() {
  setupComponentTest('application-menu', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#application-menu}}
    //     template content
    //   {{/application-menu}}
    // `);

    this.render(hbs`{{application-menu}}`);
    expect(this.$()).to.have.length(1);
  });
});

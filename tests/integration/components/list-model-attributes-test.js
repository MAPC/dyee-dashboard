import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | list model attributes', function() {
  setupComponentTest('list-model-attributes', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#list-model-attributes}}
    //     template content
    //   {{/list-model-attributes}}
    // `);

    this.render(hbs`{{list-model-attributes}}`);
    expect(this.$()).to.have.length(1);
  });
});

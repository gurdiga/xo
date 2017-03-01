describe('addFocusEffect', function() {
  'use strict';

  var addFocusEffect = window.App.Utils.addFocusEffect;

  var domElement, initialStyle, focusStyle;

  before(function() {
    initialStyle = {
      'color': 'blue'
    };

    focusStyle = {
      'color': 'red'
    };

    domElement = createDOMElement('button', initialStyle);

    addFocusEffect(domElement, focusStyle);
  });

  it('works', function() {
    domElement.dispatchEvent(new Event('focus'));
    assert.equal(domElement.style.color, focusStyle.color, 'applies the given style on focus');

    domElement.dispatchEvent(new Event('blur'));
    assert.equal(domElement.style.color, initialStyle.color, 'returns to the initial style on blur');

    assert.equal(domElement.hasAttribute('has-on-focus-effect'), true,
      'marks the element as having on focus effect');
  });

  var createDOMElement = window.App.Utils.createDOMElement;

  var assert = window.TestHelpers.assert;
});

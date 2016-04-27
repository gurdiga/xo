(function() {
  'use strict';

  tape('addFocusEffect', function(t) {
    var initialStyle = {
      'color': 'blue'
    };

    var focusStyle = {
      'color': 'red'
    };

    var domElement = createDOMElement('button', initialStyle);

    addFocusEffect(domElement, focusStyle);

    domElement.dispatchEvent(new Event('focus'));
    t.equal(domElement.style.color, focusStyle.color, 'applies the given style on focus');

    domElement.dispatchEvent(new Event('blur'));
    t.equal(domElement.style.color, initialStyle.color, 'returns to the initial style on blur');

    t.equal(domElement.hasAttribute('has-on-focus-effect'), true,
      'marks the element as having on focus effect');

    t.end();
  });

  var addFocusEffect = window.App.Utils.addFocusEffect;
  var createDOMElement = window.App.Utils.createDOMElement;

}());

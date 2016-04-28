(function() {
  'use strict';

  tape('addHoverEffect', function(t) {
    var initialStyle = {
      'color': 'blue'
    };

    var hoverStyle = {
      'color': 'red'
    };

    var domElement = createDOMElement('div', initialStyle);

    addHoverEffect(domElement, hoverStyle);

    domElement.dispatchEvent(new Event('mouseenter'));
    t.equal(domElement.style.color, hoverStyle.color, 'applies the given style on mouseenter');

    domElement.dispatchEvent(new Event('mouseleave'));
    t.equal(domElement.style.color, initialStyle.color, 'returns to the initial style on mouseleave');

    t.equal(domElement.hasAttribute('has-on-hover-effect'), true,
      'marks the element as having on hover effect');

    t.end();
  });

  var addHoverEffect = window.App.Utils.addHoverEffect;
  var createDOMElement = window.App.Utils.createDOMElement;

}());

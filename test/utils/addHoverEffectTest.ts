import {assert} from "test/helper";
import {addHoverEffect} from "app/utils/addHoverEffect";
import {createDOMElement} from "app/utils/createDOMElement";

describe('addHoverEffect', function() {
  'use strict';

  var domElement, initialStyle, hoverStyle;

  before(function() {
    initialStyle = {
      'color': 'blue'
    };

    hoverStyle = {
      'color': 'red'
    };

    domElement = createDOMElement('div', initialStyle);

    addHoverEffect(domElement, hoverStyle);
  });

  it('works', function() {
    domElement.dispatchEvent(new Event('mouseenter'));
    assert.equal(domElement.style.color, hoverStyle.color, 'applies the given style on mouseenter');

    domElement.dispatchEvent(new Event('mouseleave'));
    assert.equal(domElement.style.color, initialStyle.color, 'returns to the initial style on mouseleave');

    assert.equal(domElement.hasAttribute('has-on-hover-effect'), true,
      'marks the element as having on hover effect');
  });

  it('validates input', function() {
    assert.throws(function() {
      addHoverEffect(42);
    },
      'addHoverEffect expects the first argument to be a DOM element'
    );

    assert.throws(function() {
      addHoverEffect(domElement, 42);
    },
      'addHoverEffect expects the second argument, style, to be a hash'
    );
  });
});

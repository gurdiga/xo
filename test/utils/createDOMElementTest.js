describe('createDOMElement', function() {
  'use strict';

  var style, attributes, domElement;

  beforeEach(function() {
    style = {
      color: 'green'
    };

    attributes = {
      'widget-name': 'SpecialWidget'
    };

    domElement = createDOMElement('some-component', style, attributes);
  });

  it('works for the happy path', function() {
    assert.ok(domElement instanceof HTMLElement, 'creates an HTMLElement');
    assert.equal(domElement.tagName, 'SOME-COMPONENT', 'the element has the appropriate tag name');
    assert.deepEqual(domElement.style.color, 'green', 'the element gets the passed in style attributes');
    assert.deepEqual(domElement.getAttribute('widget-name'), 'SpecialWidget',
      'the element gets the passed in attributes');
  });

  it('throws meaningful error messages', function() {
    assert.throws(function callWithABadTagNameArgument() {
      domElement = createDOMElement(42);
    },
      /createDOMElement expects the first argument, tagName, to be a DOM element/,
      'validates the tag name');

    assert.throws(function callWithABadStyleArgument() {
      domElement = createDOMElement('thing', 42);
    },
      /createDOMElement expects the second argument, style, to be a hash/,
      'validates the style argument');

    assert.throws(function callWithABadAttributesArgument() {
      var goodStyle = {};

      domElement = createDOMElement('thing', goodStyle, 42);
    },
      /createDOMElement expects the third argument, attributes, to be a hash/,
      'validates the style argument');
  });

  var createDOMElement = window.App.Utils.createDOMElement;

  var assert = window.TestHelpers.assert;

});

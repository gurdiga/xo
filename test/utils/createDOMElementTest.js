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

  var createDOMElement = window.App.Utils.createDOMElement;
});

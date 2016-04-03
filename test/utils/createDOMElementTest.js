(function() {
  'use strict';

  var createDOMElement = window.App.Utils.createDOMElement;
  var test = tape;

  test('createDOMElement', function(t) {
    var style = {
      color: 'green'
    };

    var attributes = {
      widget: 'SpecialWidget'
    };

    var domElement = createDOMElement('some-component', style, attributes);

    t.ok(domElement instanceof HTMLElement, 'creates an HTMLElement');
    t.equal(domElement.tagName, 'SOME-COMPONENT', 'the element has the appropriate tag name');
    t.deepEqual(domElement.style.color, 'green', 'the element gets the passed in style attributes');
    t.deepEqual(domElement.getAttribute('widget'), 'SpecialWidget',
      'the element gets the passed in attributes');

    t.end();
  });

}());

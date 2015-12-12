(function() {
  'use strict';

  var createDOMElement = window.App.Utils.createDOMElement;
  var test = tape;

  test('createDOMElement', function(t) {
    var domElement = createDOMElement('component', {
      color: 'green'
    });

    t.ok(domElement instanceof HTMLElement, 'created an HTMLElement');
    t.equal(domElement.tagName, 'COMPONENT', 'the element has the appropriate tag name');

    t.end();
  });

}());

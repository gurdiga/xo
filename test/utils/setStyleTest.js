(function() {
  'use strict';

  tape('setStyle', function(t) {
    var domElement = createDOMElement('div');
    var style = {
      'color': 'red'
    };

    setStyle(domElement, style);

    t.equal(domElement.style.color, style.color, 'sets the given style on the DOM element');

    t.test('input validation', function(t) {
      t.throws(function() {
        setStyle(42);
      },
        /setStyle expects the first argument to be a DOM element/,
        'throws a meaningful error when the first argument is not a DOM element'
      );

      t.throws(function() {
        setStyle(createDOMElement('div'), 42);
      },
        /setStyle expects the second argument to be a hash/,
        'throws a meaningful error when the first argument is not a hash'
      );

      t.end();
    });

    t.end();
  });

  var setStyle = window.App.Utils.setStyle;
  var createDOMElement = window.App.Utils.createDOMElement;

}());

(function() {
  'use strict';

  tape('addStyle', function(t) {
    var domElement = createDOMElement('div');
    var style = {
      'color': 'red'
    };

    addStyle(domElement, style);

    t.equal(domElement.style.color, style.color, 'sets the given style on the DOM element');

    t.test('input validation', function(t) {
      t.throws(function() {
        addStyle(42);
      },
        /addStyle expects the first argument to be a DOM element/,
        'throws a meaningful error when the first argument is not a DOM element'
      );

      t.throws(function() {
        addStyle(createDOMElement('div'), 42);
      },
        /addStyle expects the second argument to be a hash/,
        'throws a meaningful error when the first argument is not a hash'
      );

      t.end();
    });

    t.end();
  });

  var addStyle = window.App.Utils.addStyle;
  var createDOMElement = window.App.Utils.createDOMElement;

}());

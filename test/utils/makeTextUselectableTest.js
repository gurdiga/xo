(function(window, document, undefined) {
  'use strict';

  var makeTextUselectable = window.App.Utils.makeTextUselectable;
  var test = tape;

  var domElement = document.createElement('button');

  test('makeTextUselectable', function(t) {
    makeTextUselectable(domElement);

    t.equal(domElement.style['-webkit-user-select'], 'none', 'Webkit covered');
    t.equal(domElement.style['-moz-user-select'], 'none', 'Mozilla covered');
    t.equal(domElement.style['-ms-user-select'], 'none', 'IE covered');
    t.equal(domElement.style['user-select'], 'none', 'W3C covered');

    t.end();
  });

}(window, document));

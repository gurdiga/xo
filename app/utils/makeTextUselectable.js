(function(window, document, undefined) {
  'use strict';

  function makeTextUselectable(domElement) {
    domElement.style['-webkit-user-select'] = 'none';
    domElement.style['-moz-user-select'] = 'none';
    domElement.style['-ms-user-select'] = 'none';
    domElement.style['user-select'] = 'none';
  }

  window.App.Utils.makeTextUselectable = makeTextUselectable;

}(window, document));

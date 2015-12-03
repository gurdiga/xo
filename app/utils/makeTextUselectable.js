(function() {
  'use strict';

  function makeTextUselectable(domElement) {
    _.extend(domElement.style, {
      '-webkit-touch-callout': 'none',
      '-webkit-user-select': 'none',
      '-moz-user-select': 'none',
      '-ms-user-select': 'none',
      'user-select': 'none'
    });
  }

  window.App.Utils.makeTextUselectable = makeTextUselectable;

}());

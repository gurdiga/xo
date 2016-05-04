(function() {
  'use strict';

  function makeTextUselectable(domElement) {
    addStyle(domElement, {
      '-webkit-touch-callout': 'none',
      '-webkit-user-select': 'none',
      '-moz-user-select': 'none',
      '-ms-user-select': 'none',
      'user-select': 'none'
    });
  }

  var addStyle = window.App.Utils.addStyle;

  window.App.Utils.makeTextUselectable = makeTextUselectable;

}());

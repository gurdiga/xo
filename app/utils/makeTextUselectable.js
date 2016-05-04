(function() {
  'use strict';

  function makeTextUselectable(domElement) {
    setStyle(domElement, {
      '-webkit-touch-callout': 'none',
      '-webkit-user-select': 'none',
      '-moz-user-select': 'none',
      '-ms-user-select': 'none',
      'user-select': 'none'
    });
  }

  var setStyle = window.App.Utils.setStyle;

  window.App.Utils.makeTextUselectable = makeTextUselectable;

}());

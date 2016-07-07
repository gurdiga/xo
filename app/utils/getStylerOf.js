(function() {
  'use strict';

  function getStylerOf(domElement) {
    return function(style) {
      addStyle(domElement, style);
    };
  }

  var addStyle = window.App.Utils.addStyle;

  window.App.Utils.getStylerOf = getStylerOf;

}());

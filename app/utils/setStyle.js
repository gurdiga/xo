(function() {
  'use strict';

  function setStyle(domElement, style) {
    _.extend(domElement.style, style);
  }

  window.App.Utils.setStyle = setStyle;

}());

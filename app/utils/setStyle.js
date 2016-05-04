(function() {
  'use strict';

  function setStyle(domElement, style) {
    assert(isDOMElement(domElement), 'setStyle expects the first argument to be a DOM element');

    _.extend(domElement.style, style);
  }

  function isDOMElement(value) {
    return value && value.nodeType;
  }

  var assert = window.App.Utils.assert;

  window.App.Utils.setStyle = setStyle;

}());

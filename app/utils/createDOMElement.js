(function() {
  'use strict';

  function createDOMElement(tagName, style) {
    var domElement = document.createElement(tagName);

    _.extend(domElement.style, style);

    return domElement;
  }

  window.App.Utils.createDOMElement = createDOMElement;

}());

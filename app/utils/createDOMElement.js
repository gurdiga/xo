(function() {
  'use strict';

  function createDOMElement(tagName) {
    var domElement = document.createElement(tagName);

    return domElement;
  }

  window.App.Utils.createDOMElement = createDOMElement;

}());

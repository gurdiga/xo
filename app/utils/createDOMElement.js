(function() {
  'use strict';

  function createDOMElement(tagName, style, attributes) {
    var domElement = document.createElement(tagName);

    _.extend(domElement.style, style);
    _.each(attributes, setAttribute(domElement));

    return domElement;
  }

  function setAttribute(domElement) {
    return function(value, name) {
      domElement.setAttribute(name, value);
    };
  }

  window.App.Utils.createDOMElement = createDOMElement;

}());

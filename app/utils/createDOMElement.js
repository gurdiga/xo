(function() {
  'use strict';

  function createDOMElement(tagName, style, attributes) {
    var domElement = document.createElement(tagName);

    if (style) setStyle(domElement, style);

    _.each(attributes, setAttribute(domElement));

    return domElement;
  }

  function setAttribute(domElement) {
    return function(value, name) {
      domElement.setAttribute(name, value);
    };
  }

  var setStyle = window.App.Utils.setStyle;

  window.App.Utils.createDOMElement = createDOMElement;

}());

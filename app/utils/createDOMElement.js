(function() {
  'use strict';

  function createDOMElement(tagName, style, attributes) {
    var domElement = document.createElement(tagName);

    if (style) addStyle(domElement, style);

    _.each(attributes, setAttribute(domElement));

    return domElement;
  }

  function setAttribute(domElement) {
    return function(value, name) {
      domElement.setAttribute(name, value);
    };
  }

  var addStyle = window.App.Utils.addStyle;

  window.App.Utils.createDOMElement = createDOMElement;

}());

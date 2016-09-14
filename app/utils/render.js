(function() {
  'use strict';

  function render(domStructure) {
    var domElement = document.createElement(domStructure.tagName);

    _.each(domStructure.attributes, function(value, name) {
      domElement.setAttribute(name, value);
    });

    _.each(domStructure.eventHanlders, function(handler, eventName) {
      domElement.addEventListener(eventName, handler);
    });

    _.each(domStructure.childNodes, function(child) {
      var isDomStructure = !!child.tagName;

      if (isDomStructure) {
        domElement.appendChild(render(child));
      } else {
        domElement.appendChild(document.createTextNode(child));
      }
    });

    return domElement;
  }

  window.App.Utils.render = render;

}());

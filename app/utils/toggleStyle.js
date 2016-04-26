(function() {
  'use strict';

  function toggleStyle(domElement, style, onEventName, offEventName) {
    var initialStyle = {};

    for (var propertyName in style) initialStyle[propertyName] = domElement.style[propertyName];

    domElement.addEventListener(onEventName, applyStyle(domElement, style));
    domElement.addEventListener(offEventName, applyStyle(domElement, initialStyle));
  }

  function applyStyle(domElement, style) {
    return function() {
      _.extend(domElement.style, style);
    };
  }

  window.App.Utils.toggleStyle = toggleStyle;

}());

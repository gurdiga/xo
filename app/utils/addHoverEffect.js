(function() {
  'use strict';

  function addHoverEffect(domElement, style) {
    var initialStyle = {};

    for (var propertyName in style) initialStyle[propertyName] = domElement.style[propertyName];

    domElement.addEventListener('mouseenter', applyStyle(domElement, style));
    domElement.addEventListener('mouseleave', applyStyle(domElement, initialStyle));
  }

  function applyStyle(domElement, style) {
    return function() {
      _.extend(domElement.style, style);
    };
  }

  window.App.Utils.addHoverEffect = addHoverEffect;

}());

(function() {
  'use strict';

  function onFocus(domElement, style) {
    var initialStyleValues = {};

    for (var property in style) {
      initialStyleValues[property] = domElement.style[property];
    }

    addTransition(domElement, 'box-shadow 250ms ease-out');

    domElement.addEventListener('focus', function() {
      _.extend(domElement.style, style);
    });

    domElement.addEventListener('blur', function() {
      _.extend(domElement.style, initialStyleValues);
    });
  }

  function addTransition(domElement, definition) {
    var existingTransitions = (domElement.style.transition || '').split(/\s*,\s*/);

    if (existingTransitions.indexOf(definition) !== -1) return;

    existingTransitions.push(definition);

    domElement.style.transition = existingTransitions.join(',');
  }

  window.App.Mixins.onFocus = onFocus;

}());

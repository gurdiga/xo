(function() {
  'use strict';

  function hideOnEscapeOrOutsideClick(thing) {
    assert(isDOMElement(thing) || hasHideMethod(thing),
      'hideOnEscapeOrOutsideClick: argument is expected to be a DOM element or a thing that has a hide method');

    if (isDOMElement(thing)) thing = new HideableDOMElement(thing);

    document.body.addEventListener('keydown', ifKey('Escape', thing.hide));
    document.body.addEventListener('click', thing.hide);
  }

  function isDOMElement(thing) {
    return thing && thing.nodeType;
  }

  function hasHideMethod(thing) {
    return thing && typeof thing.hide === 'function';
  }

  function HideableDOMElement(domElement) {
    this.hide = function() {
      domElement.style.display = 'none';
    };
  }

  var assert = window.App.Utils.assert;
  var ifKey = window.App.Utils.ifKey;

  window.App.Utils.hideOnEscapeOrOutsideClick = hideOnEscapeOrOutsideClick;

}());

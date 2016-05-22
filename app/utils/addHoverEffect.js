(function() {
  'use strict';

  function addHoverEffect(domElement, style) {
    assert(_.isElement(domElement), 'addHoverEffect expects the first argument to be a DOM element');
    assert(_.isPlainObject(style), 'addHoverEffect expects the second argument, style, to be a hash');

    toggleStyle(domElement, style, 'mouseenter', 'mouseleave');
    domElement.setAttribute('has-on-hover-effect', '');
  }

  var toggleStyle = window.App.Utils.toggleStyle;
  var assert = window.App.Utils.assert;

  window.App.Utils.addHoverEffect = addHoverEffect;

}());

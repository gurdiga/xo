(function() {
  'use strict';

  function addHoverEffect(domElement, style) {
    toggleStyle(domElement, style, 'mouseenter', 'mouseleave');
  }

  var toggleStyle = window.App.Utils.toggleStyle;

  window.App.Utils.addHoverEffect = addHoverEffect;

}());

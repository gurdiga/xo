(function() {
  'use strict';

  function addFocusEffect(domElement, style) {
    toggleStyle(domElement, style, 'focus', 'blur');
    domElement.setAttribute('has-on-focus-effect', '');
  }

  var toggleStyle = window.App.Utils.toggleStyle;

  window.App.Utils.addFocusEffect = addFocusEffect;

}());

(function() {
  'use strict';

  function addFocusEffect(domElement, style) {
    toggleStyle(domElement, style, 'focus', 'blur');
  }

  var toggleStyle = window.App.Utils.toggleStyle;

  window.App.Utils.addFocusEffect = addFocusEffect;

}());

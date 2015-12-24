(function() {
  'use strict';

  function outlineFieldOnFocus(domElement) {
    onFocus(domElement, {
      boxShadow: '0 0 3px 2px #b5d5ff'
    });

    domElement.setAttributeNode(document.createAttribute('outline-on-focus'));
  }

  var onFocus = window.App.Mixins.onFocus;

  window.App.Utils.outlineFieldOnFocus = outlineFieldOnFocus;

}());

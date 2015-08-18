(function() {
  'use strict';

  function outlineFieldOnFocus(domElement) {
    onFocus(domElement, {
      boxShadow: '0 0 3px 2px #b5d5ff'
    });
  }

  var onFocus = window.App.Mixins.onFocus;

  window.App.Mixins.outlineFieldOnFocus = outlineFieldOnFocus;

}());

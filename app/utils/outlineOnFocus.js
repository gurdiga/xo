(function() {
  'use strict';

  function outlineOnFocus(domElement) {
    onFocus(domElement, {
      boxShadow: '0 0 3px 2px #b5d5ff'
    });

    domElement.setAttribute('outline-on-focus', '');
  }

  var onFocus = window.App.Mixins.onFocus;

  window.App.Utils.outlineOnFocus = outlineOnFocus;

}());

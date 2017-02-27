(function() {
  'use strict';

  function ifKey(code, handler) {
    return function(e) {
      if (e.code === code) {
        e.preventDefault();

        handler();
      }
    };
  }

  window.App.Utils.ifKey = ifKey;

}());

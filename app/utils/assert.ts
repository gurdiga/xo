(function() {
  'use strict';

  function assert(condition, message) {
    if (!condition) throw new Error(message);
  }

  window.App.Utils.assert = assert;
}());

(function() {
  'use strict';

  function addStyle(domElement, style) {
    assert(_.isElement(domElement), 'addStyle expects the first argument to be a DOM element');
    assert(_.isPlainObject(style), 'addStyle expects the second argument to be a hash');

    _.extend(domElement.style, style);
  }

  var assert = window.App.Utils.assert;

  window.App.Utils.addStyle = addStyle;

}());

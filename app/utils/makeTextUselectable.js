(function() {
  'use strict';

  function makeTextUselectable(domElement) {
    assert(_.isElement(domElement), 'makeTextUselectable expects the argument to be a DOM element');

    addStyle(domElement, {
      '-webkit-touch-callout': 'none',
      '-webkit-user-select': 'none',
      '-moz-user-select': 'none',
      '-ms-user-select': 'none',
      'user-select': 'none'
    });
  }

  var addStyle = window.App.Utils.addStyle;
  var assert = window.App.Utils.assert;

  window.App.Utils.makeTextUselectable = makeTextUselectable;

}());

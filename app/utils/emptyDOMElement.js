(function() {
  'use strict';

  function emptyDOMElement(domElement) {
    assert(_.isElement(domElement), 'emptyDOMElement expects the argument to be a DOM element');

    domElement.innerHTML = '';
  }

  var assert = window.App.Utils.assert;

  window.App.Utils.emptyDOMElement = emptyDOMElement;

}());

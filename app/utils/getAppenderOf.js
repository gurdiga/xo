(function() {
  'use strict';

  function getAppenderOf(domElement) {
    return function(parentDomElement) {
      parentDomElement.appendChild(domElement);
    };
  }

  window.App.Utils.getAppenderOf = getAppenderOf;

}());

(function() {
  'use strict';


  function getRemoverOf(domElement) {
    return function() {
      domElement.parentNode.removeChild(domElement);
    };
  }

  window.App.Utils.getRemoverOf = getRemoverOf;

}());

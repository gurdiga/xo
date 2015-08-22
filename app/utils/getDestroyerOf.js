(function() {
  'use strict';


  function getDestroyerOf(domElement) {
    return function() {
      domElement.parentNode.removeChild(domElement);
    };
  }

  window.App.Utils.getDestroyerOf = getDestroyerOf;

}());

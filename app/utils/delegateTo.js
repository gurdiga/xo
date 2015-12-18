(function() {
  'use strict';

  function delegateTo(object, methodName) {
    return function() {
      return object[methodName].apply(object, arguments);
    };
  }

  window.App.Utils.delegateTo = delegateTo;

}());

(function() {
  'use strict';

  function delegateTo(object, methodName) {
    return function() {
      var delegatee = object[methodName];

      if (delegatee === undefined) throw new Error('delegateTo: the delegatee doesn’t exist');
      if (typeof delegatee !== 'function') return delegatee;
      return delegatee.apply(object, arguments);
    };
  }

  window.App.Utils.delegateTo = delegateTo;

}());

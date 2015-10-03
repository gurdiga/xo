(function() {
  'use strict';

  function createEnumArray(hash) {
    var array = _.values(hash);

    _.each(hash, function(v, k) {
      Object.defineProperty(array, k, {
        value: v,
        enumerable: false
      });
    });

    return array;
  }

  window.App.Utils.createEnumArray = createEnumArray;

}());

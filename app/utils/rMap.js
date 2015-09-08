(function() {
  'use strict';

  function rMap(methodName, object) {
    if (Array.isArray(object)) return rMapArray(methodName, object);
    if (_.isPlainObject(object)) return rMapObject(methodName, object);

    return rMapValue(methodName, object);
  }

  function rMapValue(methodName, value) {
    return value[methodName]();
  }

  function rMapArray(methodName, array) {
    return array.map(function(item) {
      return rMap(methodName, item);
    });
  }

  function rMapObject(methodName, object) {
    var returnValue = {};

    for (var propertyName in object) {
      if (object.hasOwnProperty(propertyName)) {
        returnValue[propertyName] = rMap(methodName, object[propertyName]);
      }
    }

    return returnValue;
  }

  window.App.Utils.rMap = rMap;

}());

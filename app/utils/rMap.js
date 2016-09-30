(function() {
  'use strict';

  function rMap(methodName, object) {
    if (Array.isArray(object)) return rMapArray(methodName, object);
    if (_.isPlainObject(object)) return rMapObject(methodName, object);
    if (object instanceof NodeList) return rMapNodeList(methodName, object);

    return rMapValue(methodName, object);
  }

  function rMapValue(memberName, value) {
    var member = value[memberName];

    if (typeof member === 'function') {
      return member.call(value);
    } else {
      return member;
    }
  }

  function rMapArray(methodName, array) {
    return array.map(function(item) {
      return rMap(methodName, item);
    });
  }

  function rMapNodeList(methodName, object) {
    return rMapArray(methodName, [].slice.call(object));
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

(function() {
  'use strict';

  var DATE_FORMAT = /\d{2}\.\d{2}\.\d{4}/;

  function aDate(props, propName, componentName) {
    var value = props[propName];

    if (value && !DATE_FORMAT.test(value)) {
      return new Error(
        'Invalid date value for the ' + propName + ' prop of ' + componentName + ': ' +
        Object.prototype.toString.apply(value) + ' “' + value + '”.'
      );
    }
  }

  window.App.Utils.aDate = aDate;
}());

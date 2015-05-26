'use strict';

var a = React.PropTypes;

var DATE_FORMAT = /\d{4}-\d{2}-\d{2}/;
var TODAY = '<today>';

function aDate(props, propName, componentName) {
  var value = props[propName];

  if (value && !DATE_FORMAT.test(value)) {
    return new Error(
      'Invalid date value for the ' + propName + ' prop of ' + componentName + ': ' +
      Object.prototype.toString.apply(value) + ' “' + value + '”.'
    );
  }
}

module.exports = a.oneOfType([
  aDate,
  a.oneOf([TODAY])
]);

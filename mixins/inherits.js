'use strict';

var _ = require('utils/_.js');

var Inherits = {
  makeInherit: function(/*propertyName, ...*/) {
    var inheritedProperties = {};

    _.each(arguments, function(propertyName) {
      inheritedProperties[propertyName] = this[propertyName];
    }.bind(this));

    return inheritedProperties;
  }
};

module.exports = Inherits;

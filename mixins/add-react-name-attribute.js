'use strict';

var AddReactNameAttribute = {};

if (process.env.NODE_ENV === 'development') AddReactNameAttribute.componentDidMount = function() {
  React.findDOMNode(this).setAttribute('react-name', this.constructor.displayName);
};

module.exports = AddReactNameAttribute;

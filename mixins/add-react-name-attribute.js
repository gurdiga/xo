'use strict';

var AddReactNameAttribute = {
  componentDidMount: function() {
    React.findDOMNode(this).setAttribute('react-name', this.constructor.displayName);
  }
};

module.exports = AddReactNameAttribute;

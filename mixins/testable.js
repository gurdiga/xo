'use strict';

var Testable = {
  componentDidMount: function() {
    var domNode = React.findDOMNode(this);
    if (domNode) domNode.setAttribute('component-name', this.constructor.displayName);
  },

  componentDidUpdate: function() {
    var domNode = React.findDOMNode(this);
    if (domNode) domNode.setAttribute('component-name', this.constructor.displayName);
  }
};

module.exports = Testable;

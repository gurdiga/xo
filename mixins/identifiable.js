(function() {
  'use strict';

  var Identifiable = {
    componentDidMount: function() {
      var domNode = React.findDOMNode(this);
      if (domNode) domNode.setAttribute('component-name', this.constructor.displayName);
    },

    componentDidUpdate: function() {
      var domNode = React.findDOMNode(this);
      if (domNode) domNode.setAttribute('component-name', this.constructor.displayName);
    }
  };

  window.Mixins.Identifiable = Identifiable;
}());

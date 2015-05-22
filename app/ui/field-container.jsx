'use strict';

var Styled = require('mixins/styled');

var FieldContainer = React.createClass({
  mixins: [Styled],

  render: function() {
    return (
      <div style={this.getStyle()}>
        {this.props.children}
      </div>
    );
  },

  style: {
    marginBottom: '2px'
  }
});

module.exports = FieldContainer;

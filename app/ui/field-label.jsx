'use strict';

var Styled = require('mixins/styled.js');

var FieldLabel = React.createClass({
  mixins: [Styled],

  render: function() {
    return (
      <label {...this.makeStyled()}>
        <span style={this.spanStyle}>{this.props.label}</span>
        {this.props.children}
      </label>
    );
  },

  style: {
    display: 'block',
    fontSize: '14px',
    margin: '0 0 3px 5px'
  },

  spanStyle: {
    display: 'inline-block',
    width: '11em'
  }
});

module.exports = FieldLabel;

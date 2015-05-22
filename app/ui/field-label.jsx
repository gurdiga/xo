'use strict';

var Styled = require('mixins/styled');

var FieldLabel = React.createClass({
  mixins: [Styled],

  render: function() {
    return (
      <label
        htmlFor={this.props.htmlFor}
        {...this.makeStyled()}
      >{this.props.children}</label>
    );
  },

  style: {
    fontSize: '14px',
    fontFamily: 'sans-serif',
    display: 'inline-block',
    width: '11em',
    color: '#555',
    position: 'relative',
    padding: '3px 0 3px 6px'
  }
});

module.exports = FieldLabel;

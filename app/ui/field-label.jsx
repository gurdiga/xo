'use strict';

var WithStyleAttribute = require('mixins/with-style-attribute.js');

var FieldLabel = React.createClass({
  mixins: [WithStyleAttribute],

  render: function() {
    return (
      <label
        htmlFor={this.props.htmlFor}
        style={this.getStyle()}
      >{this.props.children}</label>
    );
  },

  style: {
    fontSize: '14px',
    fontFamily: 'sans-serif',
    display: 'inline-block',
    width: '11em',
    color: '#555',
    marginBottom: '2px',
    position: 'relative'
  }
});

module.exports = FieldLabel;
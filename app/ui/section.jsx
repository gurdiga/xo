'use strict';

var Styled = require('mixins/styled.js');

var Section = React.createClass({
  mixins: [Styled],

  render: function() {
    return (
      <fieldset style={this.getStyle()}>
        <legend style={this.legendStyle}>{this.props.label}</legend>

        { this.props.children }

      </fieldset>
    );
  },

  style: {
    display: 'inline-block',
    width: '50%',
    border: 'none',
    margin: '0 70px 30px 0',
    padding: '5px 0'
  },

  legendStyle: {
    color: 'white',
    backgroundColor: '#333',
    width: '100%',
    fontWeight: 'bold',
    fontSize: '22px',
    padding: '5px 0 5px 6px',
    marginBottom: '5px'
  }
});

module.exports = Section;

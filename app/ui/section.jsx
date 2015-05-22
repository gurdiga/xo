'use strict';

var Styled = require('mixins/styled.js');

var Section = React.createClass({
  mixins: [Styled],

  render: function() {
    return (
      <fieldset {...this.makeStyled()}>
        <legend style={this.legendStyle}>{this.props.label}</legend>

        { this.props.children }

      </fieldset>
    );
  },

  style: {
    float: 'left',
    width: '43%',
    border: 'none',
    margin: '0 7% 30px 0',
    padding: '5px 0'
  },

  legendStyle: {
    color: 'white',
    backgroundColor: '#333',
    width: '100%',
    fontWeight: 'bold',
    fontSize: '22px',
    padding: '8px 0 8px 6px',
    marginBottom: '5px'
  }
});

module.exports = Section;

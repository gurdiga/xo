'use strict';

var Styled = require('mixins/styled');

var NewCaseButton = React.createClass({
  mixins: [Styled],

  render: function() {
    return (
      <button onClick={this.props.onClick} {...this.makeStyled()}>Procedură nouă</button>
    );
  },

  style: {
    padding: '.5em 1em',
    fontSize: '1.5em',
    fontWeight: 'bold',
    background: 'white',
    border: '1px solid #ccc',
    borderRadius: '5px'
  }
});

module.exports = NewCaseButton;

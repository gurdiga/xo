'use strict';

var Styled = require('mixins/styled.js');
var Testable = require('mixins/testable.js');

var a = React.PropTypes;
var an = a;

var NewCaseButton = React.createClass({
  mixins: [Testable, Styled],

  propTypes: {
    onClick: a.func.isRequired,
    style: an.object
  },

  render: function() {
    return (
      <button
        onClick={this.props.onClick}
        {...this.makeStyled()}
      >Procedură nouă</button>
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

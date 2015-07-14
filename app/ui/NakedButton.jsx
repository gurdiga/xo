'use strict';

var Styled = require('mixins/styled.js');
var Inherits = require('mixins/inherits.js');

var a = React.PropTypes;
var an = a;

var NakedButton = React.createClass({
  mixins: [Styled, Inherits],

  propTypes: {
    children: a.oneOfType([a.string.isRequired]),
    onClick: a.func.isRequired,
    style: an.object
  },

  render: function() {
    return (
      <button
        onClick={this.props.onClick}
        {...this.makeStyled()}
        {...this.makeInherit('onMouseLeave', 'onMouseEnter', 'onBlur', 'onFocus')}
      >{this.props.children}</button>
    );
  },

  style: {
    fontWeight: 'bold',
    fontSize: '14px',
    background: 'transparent',
    border: 'none',
    color: '#777',
    transition: 'color 250ms ease-out'
  }
});

module.exports = NakedButton;

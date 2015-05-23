'use strict';

var Styled = require('mixins/styled.js');
var Inherits = require('mixins/inherits.js');
var InheritProps = require('mixins/inherit-props.js');

var NakedButton = React.createClass({
  mixins: [Styled, Inherits, InheritProps],

  render: function() {
    return (
      <button
        {...this.makeStyled()}
        {...this.makeInheritProps('onClick')}
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

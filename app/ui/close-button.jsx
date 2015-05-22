'use strict';

var Styled = require('mixins/styled');
var InheritProps = require('mixins/inherit-props.js');

var CloseButton = React.createClass({
  mixins: [Styled, InheritProps],

  render: function() {
    return (
      <button
        {...this.makeInheritProps('onClick')}
        {...this.makeStyled()}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >×</button>
    );
  },

  style: {
    background: 'transparent',
    padding: '.1em .3em',
    position: 'absolute',
    right: '0',
    top: '0',
    font: 'inherit',
    fontSize: '20px',
    lineHeight: '1',
    border: 'none',
    transition: 'color 250ms ease-out'
  },

  onMouseEnter: function() {
    this.style.defaultColor = this.style.color;
    this.style.color = 'blue';
    this.forceUpdate();
  },

  onMouseLeave: function() {
    this.style.color = this.style.defaultColor;
    this.forceUpdate();
  }
});

module.exports = CloseButton;

'use strict';

var Styled = require('mixins/styled.js');
var InheritProps = require('mixins/inherit-props.js');

var NakedButton = require('./naked-button.jsx');

var CloseButton = React.createClass({
  mixins: [Styled, InheritProps],

  render: function() {
    return (
      <NakedButton
        {...this.makeInheritProps('onClick')}
        {...this.makeStyled()}
      >×</NakedButton>
    );
  },

  style: {
    padding: '.1em .3em',
    position: 'absolute',
    right: '0',
    top: '0',
    fontSize: '20px',
    fontWeight: 'normal',
    lineHeight: '1'
  }
});

module.exports = CloseButton;

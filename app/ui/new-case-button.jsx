'use strict';

var Styled = require('mixins/styled.js');
var InheritProps = require('mixins/inherit-props.js');

var NewCaseButton = React.createClass({
  mixins: [Styled, InheritProps],

  render: function() {
    return (
      <button
        {...this.makeStyled()}
        {...this.makeInheritProps('onClick')}
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

'use strict';

var Testable = require('mixins/testable.js');
var Styled = require('mixins/styled.js');

var NakedButton = require('./naked-button.jsx');

var a = React.PropTypes;
var an = a;

var CloseButton = React.createClass({
  mixins: [Testable, Styled],

  propTypes: {
    onClick: a.func.isRequired,
    style: an.object
  },

  render: function() {
    return (
      <NakedButton
        onClick={this.props.onClick}
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

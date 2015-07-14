'use strict';

var Identifiable = require('mixins/identifiable.js');
var Styled = require('mixins/styled.js');

var a = React.PropTypes;
var an = a;

var CloseButton = React.createClass({
  mixins: [Identifiable, Styled],

  propTypes: {
    onClick: a.func.isRequired,
    style: an.object
  },

  render: function() {
    return (
      <button
        onClick={this.props.onClick}
        {...this.makeStyled()}
      >×</button>
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

'use strict';

var Styled = require('mixins/styled.js');
var NewCaseButton = require('./ui/new-case-button.jsx');

var UI = React.createClass({
  mixins: [Styled],

  render: function() {
    return (
      <div {...this.makeStyled()}>
        <NewCaseButton/>
      </div>
    );
  },

  style: {
    width: '960px',
    margin: '1em auto',
    position: 'relative'
  }
});

module.exports = UI;

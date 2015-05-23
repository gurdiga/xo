'use strict';

var Styled = require('mixins/styled.js');
var NewCaseButton = require('./ui/new-case-button.jsx');
var NewCaseDialog = require('./ui/new-case-dialog.jsx');

var UI = React.createClass({
  mixins: [Styled],

  getInitialState: function() {
    return { newCaseDialogOpened: true };
  },

  render: function() {
    return (
      <div {...this.makeStyled()}>
        <NewCaseDialog onClose={this.closeNewCaseDialog} isOpened={this.state.newCaseDialogOpened} />
        <NewCaseButton onClick={this.openNewCaseDialog} />
      </div>
    );
  },

  style: {
    width: '960px',
    margin: '1em auto',
    position: 'relative'
  },

  openNewCaseDialog: function() {
    this.setState({ newCaseDialogOpened: true });
  },

  closeNewCaseDialog: function() {
    this.setState({ newCaseDialogOpened: false });
  }
});

module.exports = UI;

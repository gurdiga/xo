'use strict';

var Identifiable = require('mixins/identifiable.js');
var Styled = require('mixins/styled.js');

var NewCaseButton = require('./ui/NewCaseButton.js');
var NewCaseDialog = require('./ui/NewCaseDialog.js');

var UI = React.createClass({
  mixins: [Identifiable, Styled],

  getInitialState: function() {
    return { newCaseDialogOpened: true };
  },

  render: function() {
    return (
      e('div', this.makeStyled(),
        e(NewCaseDialog, {
          onClose: this.closeNewCaseDialog,
          isOpened: this.state.newCaseDialogOpened,
          data: {}
        }),

        e(NewCaseButton, {onClick: this.openNewCaseDialog})
      )
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

'use strict';

var Testable = require('mixins/testable.js');
var Styled = require('mixins/styled.js');

var NewCaseButton = require('./ui/NewCaseButton.jsx');
var NewCaseDialog = require('./ui/new-case-dialog.jsx');

var UI = React.createClass({
  mixins: [Testable, Styled],

  getInitialState: function() {
    return { newCaseDialogOpened: true };
  },

  render: function() {
    return (
      <div {...this.makeStyled()}>
        <NewCaseDialog
          onClose={this.closeNewCaseDialog}
          isOpened={this.state.newCaseDialogOpened}
          data={{}}
        />

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

(function() {
  'use strict';

  var Identifiable = window.Mixins.Identifiable;
  var Styled = require('mixins/styled.js');

  var NewCaseButton = window.App.NewCaseButton;
  var NewCaseDialog = window.App.NewCaseDialog;

  var UI = React.createClass({
    displayName: 'UI',
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

  window.App.UI = UI;
}());

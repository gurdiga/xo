(function() {
  'use strict';

  var Identifiable = window.App.Mixins.Identifiable;
  var Styled = window.App.Mixins.Styled;

  var NewCaseButton = window.App.Widgets.NewCaseButton;
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

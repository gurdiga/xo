'use strict';

var NewCaseDialog = React.createClass({
  getInitialState: function() {
    return { opened: false };
  },

  render: function() {
    return (
      <div>
        <button onClick={this.open}>Procedură nouă</button>
        {this.drawDialog()}
      </div>
    );
  },

  drawDialog: function() {
    if (!this.state.opened) return;

    return (
      <div>
        <h3>New case dialog</h3>
        <button onClick={this.close}>×</button>
      </div>
    );
  },

  open: function() {
    this.setState({ opened: true });
  },

  close: function() {
    this.setState({ opened: false });
  }
});

if (process.env.NODE_ENV === "development") NewCaseDialog.test = function() {
  describe('NewCaseDialog', function() {
    it('runs', function() {
      expect(this).to.exist;
    });
  });
};

module.exports = NewCaseDialog;

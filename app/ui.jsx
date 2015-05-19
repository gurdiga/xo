'use strict';

var UI = React.createClass({
  getInitialState: function() {
    return {
      newCaseDialogOpen: false
    };
  },

  render: function() {
    return <div>
      <button onClick={this.openCaseDialog}>Procedură nouă</button>

      <div style={{display: this.state.newCaseDialogOpen ? 'block' : 'none'}}>
        <h3>New case dialog</h3>
        <button onClick={this.closeCaseDialog}>×</button>
      </div>
    </div>;
  },

  openCaseDialog: function() {
    this.setState({
      newCaseDialogOpen: true
    });
  },

  closeCaseDialog: function() {
    this.setState({
      newCaseDialogOpen: false
    });
  }
});

if (process.env.NODE_ENV === "development") UI.test = function() {
  describe('UI', function() {
    it('runs', function() {
      expect(this).to.exist;
    });
  });
};

module.exports = UI;

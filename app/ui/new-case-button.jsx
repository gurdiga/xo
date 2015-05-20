'use strict';

var AddReactNameAttribute = require('../mixins/add-react-name-attribute.js');

var NewCaseButton = React.createClass({
  mixins: [AddReactNameAttribute],

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

if (process.env.NODE_ENV === "development") NewCaseButton.test = function() {
  describe('NewCaseButton', function() {
    it('runs', function() {
      expect(this).to.exist;
    });
  });
};

module.exports = NewCaseButton;

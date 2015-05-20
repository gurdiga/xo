'use strict';

var AddReactNameAttribute = require('mixins/add-react-name-attribute.js');
var NewCaseDialog = require('./new-case-dialog.jsx');

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
    else return <NewCaseDialog close={this.close} />;
  },

  open: function() {
    this.setState({ opened: true });
  },

  close: function() {
    this.setState({ opened: false });
  }
});

module.exports = NewCaseButton;

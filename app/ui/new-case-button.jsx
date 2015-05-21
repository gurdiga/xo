'use strict';

var NewCaseDialog = require('./new-case-dialog.jsx');
var WithStyleAttribute = require('mixins/with-style-attribute.js');

var NewCaseButton = React.createClass({
  mixins: [WithStyleAttribute],

  getInitialState: function() {
    return { opened: false };
  },

  render: function() {
    return (
      <div>
        {this.drawDialog()}
        <button onClick={this.open} style={this.getStyle()}>Procedură nouă</button>
      </div>
    );
  },

  componentDidMount: function() {
    // REMOVEMELATER
    this.open();
  },

  style: {
    padding: '.5em 1em',
    fontSize: '1.5em',
    fontWeight: 'bold',
    background: 'white',
    border: '1px solid #ccc',
    borderRadius: '5px'
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

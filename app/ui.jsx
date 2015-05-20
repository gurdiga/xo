'use strict';

var AddReactNameAttribute = require('mixins/add-react-name-attribute.js');
var NewCaseButton = require('./ui/new-case-button.jsx');

var UI = React.createClass({
  mixins: [AddReactNameAttribute],

  render: function() {
    return (
      <div style={this.getStyle()}>
        <NewCaseButton/>
      </div>
    );
  },

  getStyle: function() {
    return {
      width: '960px',
      margin: '1em auto',
      position: 'relative'
    };
  }
});

module.exports = UI;

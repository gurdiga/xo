'use strict';

var AddReactNameAttribute = require('mixins/add-react-name-attribute.js');
var NewCaseButton = require('./ui/new-case-button.jsx');

var UI = React.createClass({
  mixins: [AddReactNameAttribute],

  render: function() {
    return (
      <div>
        <NewCaseButton/>
      </div>
    );
  }
});

module.exports = UI;

'use strict';

var UI = React.createClass({
  render: function() {
    return (
      <h1>Hello React?</h1>
    );
  }
});

if (process.env.NODE_ENV === "development") UI.test = function() {
  console.log('testing UI');
};

module.exports = UI;

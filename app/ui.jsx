'use strict';

var NewCaseButton = require('./ui/new-case-button.jsx');

var UI = React.createClass({
  render: function() {
    return (
      <div>
        <NewCaseButton/>
      </div>
    );
  }
});

if (process.env.NODE_ENV === "development") UI.test = function() {
  NewCaseButton.test();

  describe('UI', function() {
    it('runs', function() {
      expect(this).to.exist;
    });
  });
};

module.exports = UI;

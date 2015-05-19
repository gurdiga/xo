'use strict';

var NewCaseDialog = require('./ui/new-case-dialog.jsx');

var UI = React.createClass({
  render: function() {
    return <div>
      <NewCaseDialog/>
    </div>;
  }
});

if (process.env.NODE_ENV === "development") UI.test = function() {
  NewCaseDialog.test();

  describe('UI', function() {
    it('runs', function() {
      expect(this).to.exist;
    });
  });
};

module.exports = UI;

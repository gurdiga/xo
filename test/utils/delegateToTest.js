(function() {
  'use strict';

  var delegateTo = window.App.Utils.delegateTo;
  var test = tape;

  test('delegateTo', function(t) {
    t.ok(typeof delegateTo === 'function', 'exists');

    var date = new Date();
    var dateWrapper = {
      toString: delegateTo(date, 'toString')
    };

    t.equal(dateWrapper.toString(), date.toString(), 'forwards calls to the other function');

    t.end();
  });

}());

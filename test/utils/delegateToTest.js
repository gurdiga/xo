(function() {
  'use strict';

  var delegateTo = window.App.Utils.delegateTo;

  tape('delegateTo', function(t) {
    var date = new Date();

    var dateWrapper = {
      toString: delegateTo(date, 'toString')
    };

    t.equal(dateWrapper.toString(), date.toString(), 'forwards calls to the other function');

    var o = {
      toString: delegateTo(date, 'toSrtingWithATypo')
    };

    try {
      o.toString();
      t.fail('throws a meaningful exception when the delegatee is missing');
    } catch (error) {
      t.equal(error.message, 'delegateTo: the delegatee doesn’t exist');
    }

    t.end();
  });

}());

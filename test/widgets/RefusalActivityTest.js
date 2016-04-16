(function() {
  'use strict';

  tape('RefusalActivity', function(t) {
    var sandbox = document.createElement('div');
    var refusalActivity = new RefusalActivity();
    refusalActivity.appendTo(sandbox);

    t.equal(refusalActivity.getDescription(), 'Refuz');

    t.end();
  });

  var RefusalActivity = window.App.Widgets.RefusalActivity;

}());

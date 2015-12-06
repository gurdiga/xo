(function() {
  'use strict';

  var test = tape;
  var InquiryActivity = window.App.Widgets.InquiryActivity;

  var sandbox = document.createElement('div');
  var inquiryActivity = new InquiryActivity();
  inquiryActivity.appendTo(sandbox);

  test('InquiryActivity', function(t) {
    var domElement = sandbox.firstChild;

    t.ok(domElement, 'exists');
    t.equal(domElement.tagName, 'INQUIRY-ACTIVITY', 'exists');

    t.test('date field', function(t) {
      // TODO: define how should one look like

      t.end();
    });

    t.end();
  });

}());

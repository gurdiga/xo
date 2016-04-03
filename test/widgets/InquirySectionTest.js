(function() {
  'use strict';

  var InquirySection = window.App.Widgets.InquirySection;

  var inquirySection = new InquirySection();

  tape('InquirySection', function(t) {
    var sandbox = document.createElement('div');
    inquirySection.appendTo(sandbox);

    var domElement = sandbox.firstChild;

    t.test('structure', function(t) {
      t.equal(domElement.tagName, 'FIELDSET', 'has the appropriate tag name');
      t.equal(domElement.getAttribute('widget-name'), 'InquirySection', 'has the appropriate widget name');

      t.end();
    });

    t.test('title', function(t) {
      var title = domElement.firstChild;
      t.equal(title.tagName, 'LEGEND', 'has the appropriate tag name');
      t.equal(title.textContent, 'Cerere de intentare', 'has the appropriate text');

      t.end();
    });

    t.end();
  });

}());

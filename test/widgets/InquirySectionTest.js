(function() {
  'use strict';

  var InquirySection = window.App.Widgets.InquirySection;

  var fieldValues = {
    'numărul-de-înregistrare': '12-3/ABC',
    'data-depunerii': '03.03.2016'
  };

  var additionalStyle = {
    marginLeft: '30px'
  };

  var inquirySection = new InquirySection(fieldValues, additionalStyle);

  tape('InquirySection', function(t) {
    var sandbox = document.createElement('div');
    inquirySection.appendTo(sandbox);

    var domElement = sandbox.firstChild;

    t.test('structure', function(t) {
      t.equal(domElement.tagName, 'FIELDSET', 'has the appropriate tag name');
      t.equal(domElement.getAttribute('widget-name'), 'InquirySection', 'has the appropriate widget name');

      t.end();
    });

    t.test('additional style', function(t) {
      var css = domElement.style;

      t.equal(css.marginLeft, additionalStyle.marginLeft, 'is applied');

      t.end();
    });

    t.test('label', function(t) {
      var label = domElement.firstChild;

      t.equal(label.tagName, 'LEGEND', 'has the appropriate tag name');
      t.equal(label.textContent, 'Cerere de intentare', 'has the appropriate text');

      t.end();
    });

    t.test('fields', function(t) {
      t.test('inquiry registration #', function(t) {
        var inquiryRegistrationNo = domElement.children[1];

        t.equal(inquiryRegistrationNo.tagName, 'LABELED-TEXT-FIELD', 'is a labeled text field');
        t.equal(inquiryRegistrationNo.textContent, 'Numărul de înregistrare',
          'has the appropriate label');
        t.equal(getDOMValue(inquiryRegistrationNo), fieldValues['numărul-de-înregistrare'],
          'is prefilled with the appropriate value');

        t.end();
      });

      t.test('inquiry date', function(t) {
        var inquiryDate = domElement.children[2];

        t.ok(inquiryDate.tagName, 'LABELED-DATE-FIELD', 'is a labeled date field');
        t.equal(inquiryDate.textContent, 'Data depunerii cererii',
          'has the appropriate label');
        t.equal(getDOMValue(inquiryDate), fieldValues['data-depunerii'],
          'is prefilled with the appropriate value');

        t.end();
      });

      t.test('getValue', function(t) {
        t.deepEqual(inquirySection.getValue(), fieldValues, 'returns the appropriate value');

        t.end();
      });

      t.end();
    });

    t.end();
  });

  var getDOMValue = window.TestHelpers.getDOMValue;

}());

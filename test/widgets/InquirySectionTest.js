describe('InquirySection', function() {
  'use strict';

  var InquirySection = window.App.Widgets.InquirySection;

  var fieldValues, additionalStyle, inquirySection, sandbox, domElement;

  before(function() {
    fieldValues = {
      'numărul-de-înregistrare': '12-3/ABC',
      'data-depunerii': '03.03.2016'
    };

    additionalStyle = {
      marginLeft: '30px'
    };

    inquirySection = new InquirySection(fieldValues, additionalStyle);
    sandbox = document.createElement('div');
    inquirySection.appendTo(sandbox);
    domElement = sandbox.firstChild;
  });

  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.tagName, 'INQUIRY-SECTION', 'has the appropriate tag name');
  });

  it('accepts additional style', function() {
    var css = domElement.style;
    assert.equal(css.marginLeft, additionalStyle.marginLeft, 'is applied');
  });

  it('has the appropriate label', function() {
    var label = domElement.querySelector('fieldset>legend');

    assert.equal(label.tagName, 'LEGEND', 'has the appropriate tag name');
    assert.equal(label.textContent, 'Cerere de intentare', 'has the appropriate text');
  });

  describe('field', function() {
    var fieldset, fields;

    before(function() {
      fieldset = domElement.firstChild;
      fields = fieldset.querySelectorAll('fieldset>:not(legend)');
    });

    it('has a field for the inquiry registration #', function() {
      var inquiryRegistrationNo = fields[0];

      assert.equal(inquiryRegistrationNo.tagName, 'LABELED-TEXT-FIELD', 'is a labeled text field');
      assert.equal(inquiryRegistrationNo.textContent, 'Numărul de înregistrare',
        'has the appropriate label');
      assert.equal(getDOMValue(inquiryRegistrationNo), fieldValues['numărul-de-înregistrare'],
        'is prefilled with the appropriate value');
    });

    it('has a field for the inquiry date', function() {
      var inquiryDate = fields[1];

      assert.ok(inquiryDate.tagName, 'LABELED-DATE-FIELD', 'is a labeled date field');
      assert.equal(inquiryDate.textContent, 'Data depunerii cererii',
        'has the appropriate label');
      assert.equal(getDOMValue(inquiryDate), fieldValues['data-depunerii'],
        'is prefilled with the appropriate value');
    });
  });

  it('can tell its value', function() {
    assert.deepEqual(inquirySection.getValue(), fieldValues, 'returns the appropriate value');
  });

  var getDOMValue = window.TestHelpers.getDOMValue;
  var assert = window.TestHelpers.assert;
});

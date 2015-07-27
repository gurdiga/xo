'use strict';

var PersonSection = require('../../app/ui/PersonSection.jsx');
var test = tape;

var sandbox = document.createElement('div');
var value = { 'gen-persoană': PersonSection.PERSON_TYPES.INDIVIDUAL };
var label = 'Test person section';

var personSection = React.render(
  <PersonSection
    label={label}
    value={value}
  >
  </PersonSection>,
  sandbox
);

document.body.appendChild(sandbox);

test('PersonSection', function(t) {
  var section = personSection.refs.section;
  t.ok(section, 'renders a section');
  t.equal(section.props.label, label, 'section has the appropriate label');

  t.test('person type field', function(t) {
    var personTypeField = personSection.refs['gen-persoană'];
    t.ok(personTypeField, 'is rendered');
    t.equal(personTypeField.props.label, 'Gen persoană', 'has the appropriate label');
    t.equal(personTypeField.props.onChange, personSection.onPersonTypeChange, 'has the appropriate onChange');
    t.equal(personTypeField.props.isValuable, true, 'is marked as valuable');
    t.equal(personTypeField.props.value, PersonSection.PERSON_TYPES.INDIVIDUAL, 'has the default value of “fizică”');

    var optionDOMElements = personTypeField.getDOMNode().querySelectorAll('select option');
    var optionTexts = [].map.call(optionDOMElements, function(option) {
      return option.textContent;
    });

    PersonSection.PERSON_TYPES.forEach(function(type) {
      t.ok(optionTexts.indexOf(type) > -1, 'has the “' + type + '” option');
    });

    t.end();
  });

  document.body.removeChild(sandbox);
  t.end();
});

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
    var personTypeField = section.props.children[0]; // TODO: make this more clear?
    t.ok(personTypeField, 'is rendered');
    t.equal(personTypeField.ref, 'gen-persoană', 'has the appropriate ref');
    t.equal(personTypeField.props.label, 'Gen persoană', 'has the appropriate label');
    t.equal(personTypeField.props.onChange, personSection.onPersonTypeChange, 'has the appropriate onChange');

    t.end();
  });

  document.body.removeChild(sandbox);
  t.end();
});

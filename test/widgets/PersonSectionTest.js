(function() {
  'use strict';

  var PersonSection = window.App.Widgets.PersonSection;
  var test = tape;

  var value = {
    'gen-persoană': PersonSection.PERSON_TYPES.INDIVIDUAL,
    'nume': 'John DOE'
  };
  var label = 'Test person section';
  var renderIntoDocument = React.addons.TestUtils.renderIntoDocument;

  var personSection = renderIntoDocument(e(PersonSection, {label: label, value: value}));

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

    t.end();
  });

  test('PersonSection when it’s “' + value['gen-persoană'] + '”', function(t) {
    var component = renderShallowly(e(PersonSection, {label: label, value: value}));
    var fieldComponents = component.props.children[1];

    var nameFieldComponent = fieldComponents[0];
    var expectedProps = { isValuable: true, label: 'Nume', value: 'John DOE' };
    t.equal(nameFieldComponent.type.name, TextField.name, 'name field component is of the appropriate type');
    t.deepEqual(nameFieldComponent.props, expectedProps, 'name field component is passed the appropriate props');

    t.end();
  });

  function renderShallowly(component) {
    var renderer = React.addons.TestUtils.createRenderer();
    renderer.render(component);
    return renderer.getRenderOutput();
  }

  var TextField = window.App.Widgets.TextField;
}());

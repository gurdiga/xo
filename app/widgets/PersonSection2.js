(function() {
  'use strict';

  function PersonSection2(input) {
    var domElement = createTitledContainer(input.titleText);

    var personTypeField = createPersonTypeField();
    personTypeField.appendTo(domElement);

    this.appendTo = getAppenderOf(domElement);
  }

  function createTitledContainer(titleText) {
    var container = createDOMElement('person-section');
    var title = createDOMElement('section-title');

    title.textContent = titleText;
    container.appendChild(title);

    return container;
  }

  function createPersonTypeField() {
    var labelText = 'Gen persoană';
    var personTypeNames = ['fizică', 'juridică'];

    return new LabeledSelectField(labelText, personTypeNames);
  }

  var LabeledSelectField = window.App.Widgets.LabeledSelectField;

  var createDOMElement = window.App.Utils.createDOMElement;
  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.PersonSection2 = PersonSection2;

}());

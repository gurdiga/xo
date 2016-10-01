(function() {
  'use strict';

  function PersonSection2(titleText) {
    var domElement = createTitledContainer(titleText);

    var FieldListClass = PersonFieldList;
    var personTypeField = createPersonTypeField(FieldListClass);
    personTypeField.appendTo(domElement);

    var personTypeSpecificFieldList = new FieldListClass({});
    personTypeSpecificFieldList.appendTo(domElement);

    this.appendTo = getAppenderOf(domElement);
  }

  function createTitledContainer(titleText) {
    var container = createDOMElement('person-section');
    var title = createDOMElement('section-title');

    title.textContent = titleText;
    container.appendChild(title);

    return container;
  }

  function createPersonTypeField(FieldListClass) {
    var labelText = 'Gen persoană';
    var personTypeNames = ['fizică', 'juridică'];
    var defaultValue = FieldListClass.PERSON_TYPE_NAME;

    return new LabeledSelectField(labelText, personTypeNames, defaultValue);
  }

  var LabeledSelectField = window.App.Widgets.LabeledSelectField;
  var PersonFieldList = window.App.Widgets.PersonFieldList;

  var createDOMElement = window.App.Utils.createDOMElement;
  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.PersonSection2 = PersonSection2;

}());

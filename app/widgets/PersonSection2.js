(function() {
  'use strict';

  function PersonSection2(titleText) {
    var domElement = createTitledContainer(titleText);

    var DefaultFieldList = PersonFieldList;
    var defaultPersonTypeName = DefaultFieldList.PERSON_TYPE_NAME;
    var personTypeField = createPersonTypeField(defaultPersonTypeName);
    personTypeField.appendTo(domElement);

    var personTypeSpecificFieldList = new DefaultFieldList({});
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

  function createPersonTypeField(defaultPersonTypeName) {
    var labelText = 'Gen persoană';
    var personTypeNames = ['fizică', 'juridică'];

    return new LabeledSelectField(labelText, personTypeNames, defaultPersonTypeName);
  }

  var LabeledSelectField = window.App.Widgets.LabeledSelectField;
  var PersonFieldList = window.App.Widgets.PersonFieldList;

  var createDOMElement = window.App.Utils.createDOMElement;
  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.PersonSection2 = PersonSection2;

}());

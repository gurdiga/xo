(function() {
  'use strict';

  function PersonFieldCollection() {
    var domElement = createDOMElement('person-field-collection');

    this.appendTo = getAppenderOf(domElement);
  }

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.PersonFieldCollection = PersonFieldCollection;

}());

(function() {
  'use strict';

  function ActivitiesSection(additionalStyle) {
    var domElement = createElement(additionalStyle);

    var section = new Section('Acţiuni procedurale');

    section.appendWidgets([
      createAddActionButton()
    ]);

    section.appendTo(domElement);

    this.appendTo = getAppenderOf(domElement);
  }

  function createElement(additionalStyle) {
    var style = _.extend({
      display: 'block'
    }, additionalStyle);

    var domElement = createDOMElement('case-activities-section', style);

    return domElement;
  }

  function createAddActionButton() {
    return new DropdownButton('adaugă acţiune', {
      'Intentare': function() {
        console.log('Intentare');
      },
      'Refuz': function() {
        console.log('Refuz');
      }
    });
  }

  var Section = window.App.Widgets.Section;
  var DropdownButton = window.App.Widgets.DropdownButton;

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.ActivitiesSection = ActivitiesSection;

}());

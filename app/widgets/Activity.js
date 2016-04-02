(function() {
  'use strict';

  /*
   * TODO: Reconsider this extraction. It looks a bit blury at this point, so I
   * will leave this aside for now.
   *
   */
  function Activity(descriptionText, detailWidgets) {
    var domElement = createElement();

    appendWidgets([
      new ActivityDateField(),
      new ActivityDescription(descriptionText),
      new ActivityDetailsSection(detailWidgets)
    ]).to(domElement);

    this.appendTo = getAppenderOf(domElement);
  }

  function createElement() {
    var style = {
      marginTop: '5px',
      marginBottom: '10px',
      borderWidth: '0',
      padding: '0'
    };

    var domElement = createDOMElement('fieldset', style);
    domElement.setAttribute('widget', 'Activity');

    return domElement;
  }

  var ActivityDateField = window.App.Widgets.ActivityDateField;
  var ActivityDescription = window.App.Widgets.ActivityDescription;
  var ActivityDetailsSection = window.App.Widgets.ActivityDetailsSection;

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;
  var appendWidgets = window.App.Utils.appendWidgets;

  window.App.Widgets.Activity = Activity;

}());

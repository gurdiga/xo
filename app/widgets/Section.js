(function() {
  'use strict';

  function Section(labelText, childWidgets, additionalStyle, widgetName) {
    var domElement = createElement(additionalStyle, widgetName);

    var legend = createLegend(labelText);
    domElement.appendChild(legend);

    appendWidgets(childWidgets).to(domElement);

    this.appendTo = getAppenderOf(domElement);

    this.appendWidgets = function(childWidgets) {
      if (!Array.isArray(childWidgets)) childWidgets = [childWidgets];
      appendWidgets(childWidgets).to(domElement);
    };
  }

  function createElement(additionalStyle, widgetName) {
    var style = {
      borderWidth: '0px',
      margin: '0',
      padding: '10px 0 40px 5px'
    };

    var attributes = {
      'widget-name': widgetName || 'Section'
    };

    _.extend(style, additionalStyle);

    return createDOMElement('fieldset', style, attributes);
  }

  function createLegend(labelText) {
    var style = {
      color: 'white',
      backgroundColor: '#333',
      width: '100%',
      fontWeight: 'bold',
      fontSize: '22px',
      fontFamily: 'TitleFont',
      marginLeft: '-5px',
      padding: '8px 0 8px 6px'
    };

    var legend = createDOMElement('legend', style);

    legend.textContent = labelText;

    return legend;
  }

  var appendWidgets = window.App.Utils.appendWidgets;
  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.Section = Section;

}());

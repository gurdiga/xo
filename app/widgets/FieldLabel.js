(function() {
  'use strict';

  function FieldLabel(text, additionalStyle, childWidgets) {
    var domElement = createElement(additionalStyle);
    var textSpan = createTextSpan(text);

    appendWidgets(both(textSpan, childWidgets)).to(domElement);

    this.appendTo = getAppenderOf(domElement);
  }

  function createElement(additionalStyle) {
    var style = {
      display: 'inline-block',
      margin: '0 0 3px'
    };

    _.extend(style, additionalStyle);

    var attributes = {
      'widget-name': 'FieldLabel'
    };

    return createDOMElement('label', style, attributes);
  }

  function createTextSpan(text) {
    var style = {
      color: '#555',
      fontSize: '14px',
      display: 'inline-block',
      width: '11em'
    };

    var span = createDOMElement('span', style);

    span.textContent = text;

    return span;
  }

  function both(one, others) {
    return [one].concat(others);
  }

  var appendWidgets = window.App.Utils.appendWidgets;
  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.FieldLabel = FieldLabel;

}());

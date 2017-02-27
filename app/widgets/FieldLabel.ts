(function() {
  'use strict';

  function FieldLabel(text, childWidgets) {
    var domElement = createElement();
    WidgetRole.apply(this, [domElement]);

    var textSpan = createTextSpan(text);

    appendWidgets(both(textSpan, childWidgets)).to(domElement);
  }

  function createElement() {
    var style = {
      display: 'inline-block',
      margin: '0 0 3px'
    };

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

  var WidgetRole = window.App.Widgets.WidgetRole;

  var appendWidgets = window.App.Utils.appendWidgets;
  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.FieldLabel = FieldLabel;

}());

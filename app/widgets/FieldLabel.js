(function() {
  'use strict';

  function FieldLabel(text, additionalStyle, childWidgets) {
    var domElement = createElement(additionalStyle);
    var span = createSpan(text);

    domElement.appendChild(span);
    appendWidgets(childWidgets).to(domElement);

    this.appendTo = getAppenderOf(domElement);
  }

  function createElement(additionalStyle) {
    var style = {
      display: 'inline-block',
      margin: '0 0 3px 5px'
    };

    _.extend(style, additionalStyle);

    return createDOMElement('label', style);
  }

  function createSpan(text) {
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

  var appendWidgets = window.App.Utils.appendWidgets;
  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.FieldLabel = FieldLabel;

}());

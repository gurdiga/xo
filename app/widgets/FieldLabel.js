(function() {
  'use strict';

  function FieldLabel(text, additionalStyle, childWidgets) {
    var domElement = createElement(additionalStyle);

    addTextSpan(domElement, text);
    addChildWidgets(domElement, childWidgets);

    this.appendTo = getAppenderOf(domElement);
  }

  function createElement(additionalStyle) {
    var style = {
      display: 'inline-block',
      margin: '0 0 3px 5px'
    };

    _.extend(style, additionalStyle);

    var domElement = createDOMElement('label', style);

    domElement.setAttribute('widget', 'FieldLabel');

    return domElement;
  }

  function addTextSpan(domElement, text) {
    var style = {
      color: '#555',
      fontSize: '14px',
      display: 'inline-block',
      width: '11em'
    };

    var span = createDOMElement('span', style);

    span.textContent = text;

    domElement.appendChild(span);
  }

  function addChildWidgets(domElement, childWidgets) {
    appendWidgets(childWidgets).to(domElement);
  }

  var appendWidgets = window.App.Utils.appendWidgets;
  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.FieldLabel = FieldLabel;

}());

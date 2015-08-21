(function() {
  'use strict';

  function FieldLabelRaw(text, additionalStyle, childWidgets) {
    var domElement = document.createElement('label');
    _.extend(domElement.style, style, additionalStyle);

    var span = document.createElement('span');
    span.textContent = text;
    _.extend(span.style, spanStyle);
    domElement.appendChild(span);

    appendWidgets(childWidgets).to(domElement);

    this.appendTo = function(parentDomElement) {
      parentDomElement.appendChild(domElement);
    };
  }

  var style = {
    display: 'block',
    margin: '0 0 3px 5px'
  };

  var spanStyle = {
    color: '#555',
    fontSize: '14px',
    display: 'inline-block',
    width: '11em'
  };

  var appendWidgets = window.App.Utils.appendWidgets;

  window.App.Widgets.FieldLabelRaw = FieldLabelRaw;

}());

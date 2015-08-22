(function() {
  'use strict';

  function SectionRaw(labelText, childWidgets) {
    var domElement = document.createElement('fieldset');
    _.extend(domElement.style, fieldsetStyle);

    var legend = document.createElement('legend');
    legend.textContent = labelText;
    _.extend(legend.style, legendStyle);
    domElement.appendChild(legend);

    appendWidgets(childWidgets).to(domElement);

    this.appendTo = function(parentDomElement) {
      parentDomElement.appendChild(domElement);
    };

    this.appendWidgets = function(childWidgets) {
      if (!Array.isArray(childWidgets)) childWidgets = [childWidgets];
      appendWidgets(childWidgets).to(domElement);
    };
  }

  var fieldsetStyle = {
    float: 'left',
    width: '43%',
    border: 'none',
    margin: '0 7% 10px 0',
    padding: '10px 0 0'
  };

  var legendStyle = {
    color: 'white',
    backgroundColor: '#333',
    width: '100%',
    fontWeight: 'bold',
    fontSize: '22px',
    padding: '8px 0 8px 6px'
  };

  var appendWidgets = window.App.Utils.appendWidgets;

  window.App.Widgets.SectionRaw = SectionRaw;

}());

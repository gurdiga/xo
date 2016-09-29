(function() {
  'use strict';

  function PersonSection2(input) {
    var domElement = createElement(input.titleText);

    this.appendTo = getAppenderOf(domElement);
  }

  function createElement(titleText) {
    var domElement = createDOMElement('person-section');
    var title = createDOMElement('section-title');

    title.textContent = titleText;
    domElement.appendChild(title);

    return domElement;
  }

  var createDOMElement = window.App.Utils.createDOMElement;
  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.PersonSection2 = PersonSection2;

}());

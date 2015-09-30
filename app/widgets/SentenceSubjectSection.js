(function() {
  'use strict';

  function SentenceSubjectSection() {
    var domElement = createDomElement();

    this.appendTo = getAppenderOf(domElement);

    function createDomElement() {
      var domElement = document.createElement('sentence-subject-section');
      return domElement;
    }
  }

  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.SentenceSubjectSection = SentenceSubjectSection;

}());

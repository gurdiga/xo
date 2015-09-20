(function() {
  'use strict';

  function SentenceSection() {
    var domElement = document.createElement('sentence-section');

    this.appendTo = getAppenderOf(domElement);
  }

  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.SentenceSection = SentenceSection;

}());

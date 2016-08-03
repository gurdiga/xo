(function() {
  'use strict';

  function Section(labelText, childWidgets) {
    var container = createContainer(labelText);

    container.appendWidgets(childWidgets);

    this.appendTo = delegateTo(container, 'appendTo');
    this.setStyle = delegateTo(container, 'setStyle');
    this.appendWidgets = delegateTo(container, 'appendWidgets');
  }

  function createContainer(labelText) {
    var container = new LabeledContainer(labelText);

    container.setStyle({
      'padding': '10px 0 40px 5px'
    });

    container.setLabelStyle({
      'color': 'white',
      'background-color': '#333',
      'width': '100%',
      'font-weight': 'bold',
      'font-size': '22px',
      'font-family': 'TitleFont',
      'margin-left': '-5px',
      'padding': '8px 0 8px 6px'
    });

    return container;
  }

  var LabeledContainer = window.App.Widgets.LabeledContainer;

  var delegateTo = window.App.Utils.delegateTo;

  window.App.Widgets.Section = Section;

}());

'use strict';

var UI = window.App.UI;

React.render(e(UI), document.getElementById('ui'));

var newCaseButton = new window.App.Widgets.NewCaseButtonRaw();
newCaseButton.onClick(function() {
  window.alert('onClick');
});

var options = ['one', 'two', 'three'];
var defaultValue = 'two';
var selectField = new window.App.Widgets.SelectFieldRaw('A raw select field', options, defaultValue);
selectField.onChange(function() {
  window.alert('onChange');
});

var section = new window.App.Widgets.SectionRaw('A raw section', [
  new window.App.Widgets.TextFieldRaw('I am a raw text field', 'yes'),
  new window.App.Widgets.DateFieldRaw('I am a raw date field', ''),
  new window.App.Widgets.LargeTextFieldRaw('Raw textarea', 'yep'),
  selectField,
  newCaseButton
]);

section.appendTo(document.body);

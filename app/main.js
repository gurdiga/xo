'use strict';

var UI = window.App.UI;

React.render(e(UI), document.getElementById('ui'));

var textField = new window.App.Widgets.TextFieldRaw('I am a raw text field', 'yes');
textField.appendTo(document.body);

var dateField = new window.App.Widgets.DateFieldRaw('I am a raw date field', '');
dateField.appendTo(document.body);

var largeTextField = new window.App.Widgets.LargeTextFieldRaw('Raw textarea', 'yep');
largeTextField.appendTo(document.body);

var newCaseButton = new window.App.Widgets.NewCaseButtonRaw();
newCaseButton.appendTo(document.body);
newCaseButton.onClick(function() {
  window.alert(1);
});

var options = ['one', 'two', 'three'];
var defaultValue = 'two';
var selectField = new window.App.Widgets.SelectFieldRaw('A raw select field', options, defaultValue);
selectField.appendTo(document.body);
selectField.onChange(function() {
  window.alert('onChange');
});

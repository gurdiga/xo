'use strict';

var UI = window.App.UI;

React.render(e(UI), document.getElementById('ui'));

var textField = new window.App.Widgets.TextFieldRaw('I am a raw text field', 'yes');
textField.appendTo(document.body);

var dateField = new window.App.Widgets.DateFieldRaw('I am a raw date field', '');
dateField.appendTo(document.body);

var largeTextField = new window.App.Widgets.LargeTextFieldRaw('Raw textarea', 'yep');
largeTextField.appendTo(document.body);

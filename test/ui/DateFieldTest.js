'use strict';

var DateField = window.App.DateField;
var test = tape;

var sandbox = document.createElement('div');
var labelText = 'My DateField component';
var fieldValue = '22.03.2015';

var dateField = React.render(
  e(DateField, {
    label: labelText,
    value: fieldValue
  }),
  sandbox
);
document.body.appendChild(sandbox);

test('DateField label', function(t) {
  var label = sandbox.querySelector('label');
  t.ok(label, 'it renders a <label> element');

  var labelSpan = label.querySelector('span');
  t.equal(labelSpan.textContent, labelText,
    '<label> contains a <span> with the text given in the “label” attribute');

  t.end();
});

test('DateField label layout CSS', function(t) {
  var css = window.getComputedStyle(sandbox.querySelector('label'));
  t.equal(css.display, 'block', 'is block-styled because it’s always one per line');
  t.equal(css.margin, '0px 0px 3px 5px', 'has some air to breath at the left and below');

  t.end();
});

test('DateField label text CSS', function(t) {
  var css = window.getComputedStyle(sandbox.querySelector('label>span'));

  t.equal(css.color, 'rgb(85, 85, 85)', 'is a bit dimmed compared to the input text because it’s less important');
  t.equal(css.fontSize, '14px', 'has the same font size as the <input/>');
  t.equal(css.display, 'inline-block', 'is inline-block to be able to have it’s own width');
  t.equal(css.width, '154px', 'is 11em wide');

  t.end();
});

test('DateField value handling', function(t) {
  var input = sandbox.querySelector('label>input[type="text"]');

  t.ok(input, 'is renders <input type="text"> element inside <label> for binding (accessibility)');
  t.equal(
    input.value,
    fieldValue,
    'the <intput/> has the value given in the DateField “value” attribute');
  t.equal(
    dateField.getValue(),
    fieldValue,
    'its getValue() method returns the <input> value');

  t.end();
});

test('DateField input CSS', function(t) {
  var css = window.getComputedStyle(sandbox.querySelector('input'));
  t.equal(css.color, 'rgb(0, 0, 0)', 'its text renders in black color');
  t.equal(css.padding, '4px', 'has 4 px padding');
  t.equal(css.font, 'normal normal bold normal 14px/normal sans-serif', 'the text is rendered with “bold 14px sans-serif”');
  t.equal(css.width, '224px', 'is 16em wide');
  t.equal(
    css.backgroundImage,
    'url(data:image/gif;base64,R0lGODlhMgAYAIABAN3d3f///yH5BAEKAAEALAAAAAAyABgAAAIrjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyrAGBjd96zu9+D/wFCgA7)',
    'has the image of a fine dotted line on the background'
  );
  t.equal(css.backgroundPosition, '0px -4px',
    'the background image is vertically positioned -4px to match the input padding');
  t.equal(css.borderRadius, '2px', 'has nice rounded corners');
  t.equal(css.border, '0px none rgb(0, 0, 0)', 'it has no border, its role is taken on by the background image');
  t.equal(css.outline, 'rgb(0, 0, 0) none 0px', 'it has no outline, its role is taken on by the box-shadow');

  t.end();
});

test('DateField outlines <input/> on focus', function(t) {
  var sandbox = document.createElement('div');

  React.render(
    e(DateField, {
      label: 'Some label',
      value: '22.03.2015'
    }),
    sandbox
  );

  var input = sandbox.querySelector('input');
  t.equal(input.style.boxShadow, '', 'does not have the CSS box-shadow property set');

  React.addons.TestUtils.Simulate.focus(input);
  t.equal(input.style.boxShadow, 'rgb(181, 213, 255) 0px 0px 3px 2px', 'has CSS box-shadow property set when focused');

  React.addons.TestUtils.Simulate.blur(input);
  t.equal(input.style.boxShadow, '', 'has CSS box-shadow property removed when loses focus');

  t.end();
});

test('DateField input editability', function(t) {
  var input = sandbox.querySelector('label>input[type="text"]');
  var newFieldValue = '20.10.2010';

  input.value = newFieldValue;
  React.addons.TestUtils.Simulate.change(input);

  t.equal(newFieldValue, input.value, 'it is editable');
  t.equal(dateField.getValue(), newFieldValue,
    'its getValue() method returns the changed <input> value');

  t.end();
});

test('Date picker button CSS', function(t) {
  var button = sandbox.querySelector('label>input+button');
  t.ok(button, 'it’s positioned at the right side of input');

  var css = window.getComputedStyle(button);
  t.equal(css.position, 'absolute', 'it’s absolutely positioned not to affect the layout');
  t.equal(css.marginLeft, '-18px', 'uses 18px of negative left margin to look as being inside of the field');
  t.equal(css.width, '20px', 'is 20px wide to accommodate clicking');
  t.equal(css.height, '20px', 'is 20px high to accommodate clicking');
  t.equal(css.padding, '0px', 'has no padding');
  t.equal(css.backgroundColor, 'rgba(0, 0, 0, 0)', 'is transparent to be less intrusive');
  t.ok(/^url\(.+\)/.test(css.backgroundImage), 'has a date picker image on the background');
  t.equal(css.backgroundPosition, '50% 50%', 'its background image is centered');
  t.equal(css.backgroundRepeat, 'no-repeat', 'background image is not repeated');

  t.end();
});

test('Date picker behavior', function(t) {
  var button = sandbox.querySelector('label>button');
  t.equal(button.title, 'Deschide calendarul', 'has the appropriate tool-tip');

  var datePicker = sandbox.querySelector('label>.pika-single');
  t.equal(datePicker, null, 'date picker is not there before clicking the button');

  button.click();
  datePicker = sandbox.querySelector('label>.pika-single');
  t.ok(datePicker, 'inserts the date picker');
  t.ok(datePicker.classList.contains('xo'), 'has the “xo” theme');

  var firstMonth = datePicker.querySelector('.pika-select-month option');
  t.equal(firstMonth.textContent, 'Ianuarie', 'month names are translated');

  var firstWeekDay = datePicker.querySelector('.pika-table th abbr');
  t.equal(firstWeekDay.title, 'Luni', 'first day of the wiik is Monday');
  t.equal(firstWeekDay.textContent, 'Lu', 'short week day names are translated');

  var prevMonthButton = datePicker.querySelector('button.pika-prev');
  t.equal(prevMonthButton.textContent, 'luna precedentă', 'the button to go to previous month is translated');

  var nextMonthButton = datePicker.querySelector('button.pika-next');
  t.equal(nextMonthButton.textContent, 'luna următoare', 'the button to go to next month is translated');

  var input = sandbox.querySelector('label>input');
  t.equal(getDatePickerSelectedDate(), input.value, 'when opened, date picker reflects input’s value');

  var newDate = nextDay(input.value);
  selectDateInDatePicker(newDate);
  t.equal(getDatePickerSelectedDate(), newDate, 'when selected, it updates input value accordingly');
  t.equal(dateField.getValue(), newDate, 'when selected, getValue() returns the new value');

  datePicker = sandbox.querySelector('label>.pika-single');
  t.equal(datePicker, null, 'hides the date picker when a date is selected');

  input.value = '';
  React.addons.TestUtils.Simulate.change(input);
  button.click();

  datePicker = sandbox.querySelector('label>.pika-single');
  t.ok(datePicker, 'date picker is displayed with en empty field value');

  var todayDate = DateFormatting.format(new Date(), DateField.DATE_FORMAT);
  t.equal(getDatePickerSelectedDate(), todayDate, 'hides the date picker when a date is selected');

  button.click();
  datePicker = sandbox.querySelector('label>.pika-single');
  t.equal(datePicker, null, 'hides the date picker when clicked again');

  /* this setTimeout call is required because focus() call is async too */
  window.setTimeout(function() {
    t.equal(document.activeElement, input, 'when tha date picker id closed, the input get focus again');

    button.click();
    document.body.click();
    datePicker = sandbox.querySelector('label>.pika-single');
    t.equal(datePicker, null, 'hides the date picker when clicked outside');

    button.click();
    simulateEscapeKey();
    datePicker = sandbox.querySelector('label>.pika-single');
    t.equal(datePicker, null, 'hides the date picker when pressing Escape key');

    document.body.removeChild(sandbox);
    t.end();
  });

  function getDatePickerSelectedDate() {
    var selectedDate = datePicker.querySelector('.is-selected .pika-day');
    assert(selectedDate, 'getDatePickerSelectedDate() expects a selected date in the date picker');

    var year =  selectedDate.getAttribute('data-pika-year');
    var month = selectedDate.getAttribute('data-pika-month');
    var day =   selectedDate.getAttribute('data-pika-day');

    return DateFormatting.format(new Date(year, month, day), DateField.DATE_FORMAT);
  }

  function nextDay(initialFormattedDate) {
    var initialDate = DateFormatting.parse(initialFormattedDate, DateField.DATE_FORMAT);
    var nextDate = new Date(initialDate.getFullYear(), initialDate.getMonth(), initialDate.getDate() + 1);

    return DateFormatting.format(nextDate, DateField.DATE_FORMAT);
  }

  function selectDateInDatePicker(newDate) {
    var date = DateFormatting.parse(newDate, DateField.DATE_FORMAT);
    var selectorForDate = '.pika-day' +
      '[data-pika-year="' + date.getFullYear() + '"]' +
      '[data-pika-month="' + date.getMonth() + '"]' +
      '[data-pika-day="' + date.getDate() + '"]';

    var correspondingDate = datePicker.querySelector(selectorForDate);
    correspondingDate.dispatchEvent(new window.Event('mousedown'));
  }

  function simulateEscapeKey() {
    var keydownEvent = new window.Event('keydown');
    keydownEvent.keyCode = 27;
    document.body.dispatchEvent(keydownEvent);
  }
});

var DateFormatting = require('utils/DateFormatting');
var assert = require('utils/assert');

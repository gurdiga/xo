describe('DateFieldInput', function() {
  'use strict';

  var DateFieldInput = window.App.Widgets.DateFieldInput;

  var sandbox, value, dateFieldInput, additionalStyle, input, datePickerButton;

  before(function() {
    sandbox = document.createElement('div');
    document.body.appendChild(sandbox);

    value = '25.06.2015';
    additionalStyle = {
      backgroundColor: 'red'
    };

    dateFieldInput = new DateFieldInput(value, additionalStyle);
    dateFieldInput.appendTo(sandbox);

    input = sandbox.firstChild;
    datePickerButton = sandbox.children[1];
  });

  it('has the structural elements in place', function() {
    assert.equal(input.tagName, 'INPUT', 'is first renders an <input>');
    assert.equal(datePickerButton.tagName, 'BUTTON', 'renders a <button> to trigger the date picker');
  });

  it('accepts an initial value', function() {
    assert.equal(input.value, value, 'the <intpu/> has the value passed into the constructor');
    assert.equal(dateFieldInput.getValue(), value,
      'its getValue() method returns the <input/> value');
  });

  it('is focusable', function() {
    dateFieldInput.focus();
    assert.equal(document.activeElement, input, 'focuses its <input>');
  });

  it('is styled', function() {
    var css = input.style;

    assert.equal(css.color, 'black', 'its text renders in black color');
    assert.equal(css.padding, '4px', 'has 4 px padding');
    assert.equal(css.fontSize, '14px', 'the text is rendered with 14px');
    assert.equal(css.fontWeight, 'bold', 'the text is rendered bold');
    assert.equal(css.fontFamily, 'sans-serif', 'the text is rendered with sans-serif');
    assert.equal(css.width, '200px', 'is 200px wide');
    assert.equal(
      css.backgroundImage,
      'url("data:image/gif;base64,R0lGODlhMgAYAIABAN3d3f///yH5BAEKAAEALAAAAAAyABgAAAIrjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyrAGBjd96zu9+D/wFCgA7")',
      'has the image of a fine dotted line on the background'
    );
    assert.equal(css.backgroundPosition, '0px -4px',
      'the background image is vertically positioned -4px to match the input padding');
    assert.equal(css.borderRadius, '2px', 'has nice rounded corners');
    assert.equal(css.borderWidth, '0px', 'it has no border, its role is taken on by the background image');
    assert.equal(css.outlineWidth, '0px', 'it has no outline, its role is taken on by the box-shadow');

    assert.equal(css.backgroundColor, additionalStyle.backgroundColor,
      'accepts additional style');
  });

  it('is outlined on focus', function() {
    assert.ok(input.hasAttribute('has-on-focus-effect'));
  });

  it('has the date picker putton styled', function() {
    assert.equal(datePickerButton.getAttribute('shy'), '', 'is’s shy');

    var css = datePickerButton.style;
    assert.equal(css.position, 'absolute', 'it’s absolutely positioned not to affect the layout');
    assert.equal(css.marginTop, '2px', 'vertically align the icon with the input text');
    assert.equal(css.marginLeft, '-18px', 'uses 18px of negative left margin to look as being inside of the field');
    assert.equal(css.width, '20px', 'is 20px wide to accommodate clicking');
    assert.equal(css.height, '20px', 'is 20px high to accommodate clicking');
    assert.equal(css.padding, '0px', 'has no padding');
    assert.equal(css.backgroundColor, 'transparent', 'is transparent to be less intrusive');
    assert.ok(/^url\(.+\)/.test(css.backgroundImage), 'has a date picker image on the background');
    assert.equal(css.backgroundPosition, '50% 50%', 'its background image is centered');
    assert.equal(css.backgroundRepeat, 'no-repeat', 'background image is not repeated');
  });

  it('works', function(done) {
    assert.equal(datePickerButton.title, 'Deschide calendarul', 'has the appropriate tool-tip');

    var datePicker = sandbox.querySelector(DateFieldInput.DATE_PICKER_SELECTOR);
    assert.equal(datePicker, null, 'date picker is not there before clicking the button');

    var bodyClickListener = prepareBodyClickListener();

    datePickerButton.click();
    assert.ok(!bodyClickListener.receivedClicks, 'clicks do not propagate to <body> and hide the picker');

    datePicker = sandbox.querySelector(DateFieldInput.DATE_PICKER_SELECTOR);
    assert.ok(datePicker.classList.contains('xo'), 'has the “xo” theme');

    var firstMonth = datePicker.querySelector('.pika-select-month option');
    assert.equal(firstMonth.textContent, 'Ianuarie', 'month names are translated');

    var firstWeekDay = datePicker.querySelector('.pika-table th abbr');
    assert.equal(firstWeekDay.title, 'Luni', 'first day of the wiik is Monday');
    assert.equal(firstWeekDay.textContent, 'Lu', 'short week day names are translated');

    var prevMonthButton = datePicker.querySelector('button.pika-prev');
    assert.equal(prevMonthButton.textContent, 'luna precedentă', 'the button to go to previous month is translated');

    var nextMonthButton = datePicker.querySelector('button.pika-next');
    assert.equal(nextMonthButton.textContent, 'luna următoare', 'the button to go to next month is translated');

    assert.equal(getDatePickerSelectedDate(), input.value, 'when opened, date picker reflects input’s value');

    var newDate = nextDay(input.value);
    selectDateInDatePicker(newDate);
    assert.equal(getDatePickerSelectedDate(), newDate, 'when selected, it updates input value accordingly');
    assert.equal(dateFieldInput.getValue(), newDate, 'when selected, getValue() returns the new value');

    datePicker = sandbox.querySelector(DateFieldInput.DATE_PICKER_SELECTOR);
    assert.equal(datePicker, null, 'hides the date picker when a date is selected');

    input.value = '';
    input.dispatchEvent(new Event('change'));
    datePickerButton.click();

    datePicker = sandbox.querySelector(DateFieldInput.DATE_PICKER_SELECTOR);
    assert.ok(datePicker, 'date picker is displayed with en empty field value');

    var todayDate = DateFormatting.format(new Date(), DateFieldInput.DATE_FORMAT);
    assert.equal(getDatePickerSelectedDate(), todayDate, 'hides the date picker when a date is selected');

    datePickerButton.click();
    datePicker = sandbox.querySelector(DateFieldInput.DATE_PICKER_SELECTOR);
    assert.equal(datePicker, null, 'hides the date picker when clicked again');

    /* this setTimeout call is required because focus() is called async too */
    window.setTimeout(function() {
      assert.equal(document.activeElement, input, 'when tha date picker id closed, the input get focus again');

      datePickerButton.click();
      document.body.click();
      datePicker = sandbox.querySelector(DateFieldInput.DATE_PICKER_SELECTOR);
      assert.equal(datePicker, null, 'hides the date picker when clicked outside');

      datePickerButton.click();
      simulateEscapeKey();
      datePicker = sandbox.querySelector(DateFieldInput.DATE_PICKER_SELECTOR);
      assert.equal(datePicker, null, 'hides the date picker when pressing Escape key');

      done();
    });

    function getDatePickerSelectedDate() {
      var selectedDate = datePicker.querySelector('.is-selected .pika-day');
      assert(selectedDate, 'getDatePickerSelectedDate() expects a selected date in the date picker');

      var year =  selectedDate.getAttribute('data-pika-year');
      var month = selectedDate.getAttribute('data-pika-month');
      var day =   selectedDate.getAttribute('data-pika-day');

      return DateFormatting.format(new Date(year, month, day), DateFieldInput.DATE_FORMAT);
    }

    function nextDay(initialFormattedDate) {
      var initialDate = DateFormatting.parse(initialFormattedDate, DateFieldInput.DATE_FORMAT);
      var nextDate = new Date(initialDate.getFullYear(), initialDate.getMonth(), initialDate.getDate() + 1);

      return DateFormatting.format(nextDate, DateFieldInput.DATE_FORMAT);
    }

    function selectDateInDatePicker(newDate) {
      var date = DateFormatting.parse(newDate, DateFieldInput.DATE_FORMAT);
      var selectorForDate = '.pika-day' +
        '[data-pika-year="' + date.getFullYear() + '"]' +
        '[data-pika-month="' + date.getMonth() + '"]' +
        '[data-pika-day="' + date.getDate() + '"]';

      var correspondingDate = datePicker.querySelector(selectorForDate);
      correspondingDate.dispatchEvent(new Event('mousedown'));
    }

    function prepareBodyClickListener() {
      var listener = {
        receivedClicks: false
      };

      document.body.addEventListener('click', function eventHandler() {
        listener.receivedClicks = true;
        document.body.removeEventListener('click', eventHandler);
      });

      return listener;
    }
  });

  after(function() {
    document.body.removeChild(sandbox);
  });

  var DateFormatting = window.App.Utils.DateFormatting;

  var simulateEscapeKey = window.TestHelpers.simulateEscapeKey;
  var assert = window.TestHelpers.assert;
});

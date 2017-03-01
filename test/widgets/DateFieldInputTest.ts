describe('DateFieldInput', function() {
  'use strict';

  var DateFieldInput = window.App.Widgets.DateFieldInput;

  var sandbox, value, dateFieldInput, domElement, datePickerButton, bodyClickListener;

  beforeEach(function() {
    value = '25.06.2015';
    dateFieldInput = new DateFieldInput(value);

    domElement = getWidgetDOMElement(dateFieldInput);
    datePickerButton = domElement.nextSibling;

    sandbox = domElement.parentNode;
    document.body.appendChild(sandbox);

    bodyClickListener = sinon.spy();
    document.body.addEventListener('click', bodyClickListener);
  });

  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.tagName, 'INPUT', 'is first renders an <input>');
    assert.equal(datePickerButton.tagName, 'BUTTON', 'renders a <button> to trigger the date picker');
  });

  it('accepts an initial value', function() {
    assert.equal(domElement.value, value, 'the <intpu/> has the value passed into the constructor');
    assert.equal(dateFieldInput.getValue(), value,
      'its getValue() method returns the <input/> value');
  });

  it('is focusable', function() {
    dateFieldInput.focus();
    assert.equal(document.activeElement, domElement, 'focuses its <input>');
  });

  it('is styled', function() {
    var css = domElement.style;

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
  });

  it('can be asked to setStyle', function() {
    var style = {
      'color': 'red'
    };

    dateFieldInput.setStyle(style);
    assert.equal(domElement.style.color, style.color, 'sets the color appropriately');
  });

  it('is outlined on focus', function() {
    assert.isTrue(domElement.hasAttribute('has-on-focus-effect'));
  });

  it('has the date picker button styled appropriately', function() {
    assert.isTrue(datePickerButton.hasAttribute('shy'), 'is’s shy');

    var css = datePickerButton.style;
    assert.equal(css.position, 'absolute', 'it’s absolutely positioned not to affect the layout');
    assert.equal(css.marginTop, '2px', 'vertically align the icon with the input text');
    assert.equal(css.marginLeft, '-18px', 'uses 18px of negative left margin to look as being inside of the field');
    assert.equal(css.width, '20px', 'is 20px wide to accommodate clicking');
    assert.equal(css.height, '20px', 'is 20px high to accommodate clicking');
    assert.equal(css.padding, '0px', 'has no padding');
    assert.equal(css.backgroundColor, 'transparent', 'is transparent to be less intrusive');
    assert.match(css.backgroundImage, /^url\(.+\)/, 'has a date picker image on the background');
    assert.equal(css.backgroundPosition, '50% 50%', 'its background image is centered');
    assert.equal(css.backgroundRepeat, 'no-repeat', 'background image is not repeated');
  });

  it('works', function(done) {
    assert.equal(datePickerButton.title, 'Deschide calendarul', 'has the appropriate tool-tip');

    var datePicker = getDatePicker();
    assert.isNull(datePicker, 'date picker is not there before clicking the button');

    datePickerButton.click();
    assert.isNotTrue(bodyClickListener.called, 'clicks do not propagate to <body>, and don’t hide the picker');

    datePicker = getDatePicker();
    assert.isTrue(datePicker.classList.contains('xo'), 'has the “xo” theme');

    var firstMonth = datePicker.querySelector('.pika-select-month option');
    assert.equal(firstMonth.textContent, 'Ianuarie', 'month names are translated');

    var firstWeekDay = datePicker.querySelector('.pika-table th abbr');
    assert.equal(firstWeekDay.title, 'Luni', 'first day of the wiik is Monday');
    assert.equal(firstWeekDay.textContent, 'Lu', 'short week day names are translated');

    var prevMonthButton = datePicker.querySelector('button.pika-prev');
    assert.equal(prevMonthButton.textContent, 'luna precedentă', 'the button to go to previous month is translated');

    var nextMonthButton = datePicker.querySelector('button.pika-next');
    assert.equal(nextMonthButton.textContent, 'luna următoare', 'the button to go to next month is translated');

    assert.equal(getDatePickerSelectedDate(), domElement.value, 'when opened, date picker reflects input’s value');

    var newDate = nextDay(domElement.value);
    selectDateInDatePicker(newDate);
    assert.equal(getDatePickerSelectedDate(), newDate, 'when selected, it updates input value accordingly');
    assert.equal(dateFieldInput.getValue(), newDate, 'when selected, getValue() returns the new value');

    datePicker = getDatePicker();
    assert.isNull(datePicker, 'hides the date picker when a date is selected');

    domElement.value = '';
    datePickerButton.click();
    datePicker = getDatePicker();
    assert.isNotNull(datePicker, 'date picker is displayed with en empty field value');

    var todayDate = DateFormatting.format(new Date(), DateFieldInput.DATE_FORMAT);
    assert.equal(getDatePickerSelectedDate(), todayDate,
      'when opening the date picker with an empty field, it has today marked');

    datePickerButton.click();
    datePicker = getDatePicker();
    assert.isNull(datePicker, 'hides the date picker when clicked again');

    /* this setTimeout call is required because focus() is called async too */
    window.setTimeout(function() {
      assert.equal(document.activeElement, domElement, 'when the date picker is closed, the input get focus again');

      datePickerButton.click();
      document.body.click();
      datePicker = getDatePicker();
      assert.isNull(datePicker, 'hides the date picker when clicking outside');

      datePickerButton.click();
      simulateEscapeKey();
      datePicker = getDatePicker();
      assert.isNull(datePicker, 'hides the date picker when pressing Escape key');

      done();
    });

    function getDatePicker() {
      return sandbox.querySelector(DateFieldInput.DATE_PICKER_SELECTOR);
    }

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
  });

  afterEach(function() {
    document.body.removeChild(sandbox);
    document.body.removeEventListener('click', bodyClickListener);
  });

  var DateFormatting = window.App.Utils.DateFormatting;

  var sinon = window.sinon;

  var simulateEscapeKey = window.TestHelpers.simulateEscapeKey;
  var assert = window.TestHelpers.assert;
  var getWidgetDOMElement = window.TestHelpers.getWidgetDOMElement;
});

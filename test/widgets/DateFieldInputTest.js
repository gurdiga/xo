(function() {
  'use strict';

  var DateFieldInput = window.App.Widgets.DateFieldInput;
  var test = tape;

  var sandbox = document.createElement('div');
  document.body.appendChild(sandbox);

  var value = '25.06.2015';
  var additionalStyle = {
    backgroundColor: 'red'
  };

  var dateFieldInput = new DateFieldInput(value, additionalStyle);
  dateFieldInput.appendTo(sandbox);

  test('DateFieldInput', function(t) {
    var input = sandbox.firstChild;
    var datePickerButton = sandbox.children[1];

    t.test('structural elements', function(t) {
      t.ok(input, 'exists');
      t.equal(input.tagName, 'INPUT', 'is first renders an <input>');

      t.ok(datePickerButton, 'exists');
      t.equal(datePickerButton.tagName, 'BUTTON', 'renders a <button> to trigger the date picker');

      t.end();
    });

    t.test('value handling', function(t) {
      t.equal(input.value, value, 'the <intpu/> has the value passed into the constructor');
      t.equal(dateFieldInput.getValue(), value,
        'its getValue() method returns the <input/> value');

      t.end();
    });

    t.test('input styling', function(t) {
      var css = input.style;

      t.equal(css.color, 'black', 'its text renders in black color');
      t.equal(css.padding, '4px', 'has 4 px padding');
      t.equal(css.fontSize, '14px', 'the text is rendered with 14px');
      t.equal(css.fontWeight, 'bold', 'the text is rendered bold');
      t.equal(css.fontFamily, 'sans-serif', 'the text is rendered with sans-serif');
      t.equal(css.width, '200px', 'is 200px wide');
      t.equal(
        css.backgroundImage,
        'url("data:image/gif;base64,R0lGODlhMgAYAIABAN3d3f///yH5BAEKAAEALAAAAAAyABgAAAIrjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyrAGBjd96zu9+D/wFCgA7")',
        'has the image of a fine dotted line on the background'
      );
      t.equal(css.backgroundPosition, '0px -4px',
        'the background image is vertically positioned -4px to match the input padding');
      t.equal(css.borderRadius, '2px', 'has nice rounded corners');
      t.equal(css.borderWidth, '0px', 'it has no border, its role is taken on by the background image');
      t.equal(css.outlineWidth, '0px', 'it has no outline, its role is taken on by the box-shadow');

      t.equal(css.backgroundColor, additionalStyle.backgroundColor,
        'accepts additional style');

      t.end();
    });

    t.test('outlines <input> on focus', function(t) {
      t.equal(input.style.boxShadow, '', 'does not have the CSS box-shadow property set');

      input.dispatchEvent(new Event('focus'));
      t.equal(input.style.boxShadow, 'rgb(181, 213, 255) 0px 0px 3px 2px', 'has CSS box-shadow property set when focused');

      input.dispatchEvent(new Event('blur'));
      t.equal(input.style.boxShadow, '', 'has CSS box-shadow property removed when loses focus');

      t.end();
    });

    t.test('date picker button CSS', function(t) {
      t.ok(datePickerButton, 'it’s positioned at the right side of input');
      t.equal(datePickerButton.getAttribute('shy'), '', 'is’s shy');

      var css = datePickerButton.style;
      t.equal(css.position, 'absolute', 'it’s absolutely positioned not to affect the layout');
      t.equal(css.marginLeft, '-18px', 'uses 18px of negative left margin to look as being inside of the field');
      t.equal(css.width, '20px', 'is 20px wide to accommodate clicking');
      t.equal(css.height, '20px', 'is 20px high to accommodate clicking');
      t.equal(css.padding, '0px', 'has no padding');
      t.equal(css.backgroundColor, 'transparent', 'is transparent to be less intrusive');
      t.ok(/^url\(.+\)/.test(css.backgroundImage), 'has a date picker image on the background');
      t.equal(css.backgroundPosition, '50% 50%', 'its background image is centered');
      t.equal(css.backgroundRepeat, 'no-repeat', 'background image is not repeated');

      t.end();
    });

    t.test('date picker behavior', function(t) {
      t.equal(datePickerButton.title, 'Deschide calendarul', 'has the appropriate tool-tip');

      var datePicker = sandbox.querySelector(DateFieldInput.DATE_PICKER_SELECTOR);
      t.equal(datePicker, null, 'date picker is not there before clicking the button');

      var bodyClickListener = prepareBodyClickListener();

      datePickerButton.click();
      t.ok(!bodyClickListener.receivedClicks, 'clicks do not propagate to <body> and hide the picker');

      datePicker = sandbox.querySelector(DateFieldInput.DATE_PICKER_SELECTOR);
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

      t.equal(getDatePickerSelectedDate(), input.value, 'when opened, date picker reflects input’s value');

      var newDate = nextDay(input.value);
      selectDateInDatePicker(newDate);
      t.equal(getDatePickerSelectedDate(), newDate, 'when selected, it updates input value accordingly');
      t.equal(dateFieldInput.getValue(), newDate, 'when selected, getValue() returns the new value');

      datePicker = sandbox.querySelector(DateFieldInput.DATE_PICKER_SELECTOR);
      t.equal(datePicker, null, 'hides the date picker when a date is selected');

      input.value = '';
      input.dispatchEvent(new Event('change'));
      datePickerButton.click();

      datePicker = sandbox.querySelector(DateFieldInput.DATE_PICKER_SELECTOR);
      t.ok(datePicker, 'date picker is displayed with en empty field value');

      var todayDate = DateFormatting.format(new Date(), DateFieldInput.DATE_FORMAT);
      t.equal(getDatePickerSelectedDate(), todayDate, 'hides the date picker when a date is selected');

      datePickerButton.click();
      datePicker = sandbox.querySelector(DateFieldInput.DATE_PICKER_SELECTOR);
      t.equal(datePicker, null, 'hides the date picker when clicked again');

      /* this setTimeout call is required because focus() is called async too */
      window.setTimeout(function() {
        t.equal(document.activeElement, input, 'when tha date picker id closed, the input get focus again');

        datePickerButton.click();
        document.body.click();
        datePicker = sandbox.querySelector(DateFieldInput.DATE_PICKER_SELECTOR);
        t.equal(datePicker, null, 'hides the date picker when clicked outside');

        datePickerButton.click();
        simulateEscapeKey();
        datePicker = sandbox.querySelector(DateFieldInput.DATE_PICKER_SELECTOR);
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

    t.end();
  });

  var DateFormatting = window.App.Utils.DateFormatting;
  var assert = window.App.Utils.assert;

  var simulateEscapeKey = window.TestHelpers.simulateEscapeKey;

}());

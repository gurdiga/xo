(function() {
  'use strict';

  tape('OptionList', function(t) {
    var sandbox = document.createElement('div');

    var handler1 = createSpy();
    var handler2 = createSpy();
    var options = {
      'label1': handler1,
      'label2': handler2
    };

    var optionList = new OptionList(options);

    optionList.appendTo(sandbox);

    var domElement = sandbox.firstChild;

    t.test('DOM structure', function(t) {
      t.equal(domElement.getAttribute('widget-name'), 'OptionList', 'has the appropriate widget name');

      var optionLabels = _.toArray(domElement.children).map(_.property('textContent'));
      t.deepEqual(optionLabels, Object.keys(options), 'option buttons have the expected labels');

      t.end();
    });

    t.test('style', function(t) {
      var style = domElement.style;

      t.equal(style.marginLeft, '10px', 'shifts the option list a bit inside to suggest containment');
      t.equal(style.backgroundColor, 'white', 'has white background');
      t.equal(style.position, 'absolute', 'is absolutely positioned');
      t.equal(style.boxShadow, 'rgba(0, 0, 0, 0.298039) 1px 1px 3px', 'has a nice shadow');

      t.test('option buttons', function(t) {
        var optionButton = domElement.querySelector('button');
        var style = optionButton.style;

        t.equal(style.padding, '5px 10px', 'has nice padding to increase clickable area');
        t.equal(style.borderWidth, '0px', 'removes the border off option buttons');
        t.equal(style.backgroundColor, 'transparent', 'removes the background off option buttons');
        t.equal(style.width, '100%', 'makes buttons 100% wide');
        t.equal(style.textAlign, 'left', 'aligns button labels left');
        t.equal(style.fontSize, '13px', 'has a nice large font size');

        optionButton.dispatchEvent(new Event('mouseenter'));
        t.equal(optionButton.style.backgroundColor, 'rgb(195, 195, 195)',
          'options backgroun change to gray on mouseenter');

        optionButton.dispatchEvent(new Event('mouseleave'));
        t.equal(optionButton.style.backgroundColor, 'transparent',
          'options backgroun change back to normal on on mouseleave');

        t.end();
      });

      t.end();
    });

    t.test('behavior', function(t) {
      var option1 = domElement.children[0];
      option1.click();
      option1.click();
      t.deepEqual(handler1.calls.length, 2, 'clicking on an option calls its corresponding handler');

      var option2 = domElement.children[1];
      option2.click();
      t.deepEqual(handler2.calls.length, 1, 'clicking on an option calls its corresponding handler');

      t.end();
    });

    t.test('resetting options', function(t) {
      var handlerA = createSpy();
      var handlerB = createSpy();
      var newOptions = {
        'labelA': handlerA,
        'labelB': handlerB
      };

      optionList.setOptions(newOptions);

      var optionLabels = _.toArray(domElement.children).map(_.property('textContent'));
      t.deepEqual(optionLabels, Object.keys(newOptions), 'option buttons have the expected labels');

      var optionA = domElement.children[0];
      optionA.click();
      optionA.click();
      t.deepEqual(handlerA.calls.length, 2, 'clicking on an option calls its corresponding handler');

      t.end();
    });

    t.end();
  });

  var OptionList = window.App.Widgets.OptionList;

  var createSpy = window.TestHelpers.createSpy;

}());

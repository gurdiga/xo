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

    function createSpy() {
      return function spy() {
        spy.calls = spy.calls || [];
        spy.calls.push({ args: arguments });
      };
    }
  });

  var OptionList = window.App.Widgets.OptionList;

}());

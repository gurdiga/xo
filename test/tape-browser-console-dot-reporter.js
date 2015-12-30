(function() {
  'use strict';

  var totalCount = 0;
  var failedCount = 0;
  var output = '';
  var failureMessages = [];
  var testContext = [];

  window.TapeBrowserConsoleDotReporter = TapeBrowserConsoleDotReporter;

  function TapeBrowserConsoleDotReporter(tape) {
    reportDuration(
      tape.createStream({ objectMode: true })
      .on('data', processMessage)
      .on('end', displayResults)
      .on('error', displayError)
    );
  }

  function reportDuration(stream) {
    var started = false;
    var startTime, endTime;

    stream
    .on('data', function() {
      if (started) return;

      startTime = new Date();
      started = true;
    })
    .on('end', function() {
      endTime = new Date();
      started = false;

      var seconds = (endTime - startTime) / 1000;

      console.log('test run time: ' + seconds + 's');
    });
  }

  function processMessage(message) {
    switch (message.type) {
      case 'assert': count(message); log(message); break;
      case 'test': pushContext(message); break;
      case 'end': popContext(); break;
      default: console.log('-- unknown message', message);
    }
  }

  function count(message) {
    totalCount++;

    if (!message.ok) failedCount++;
  }

  function log(message) {
    output += message.ok ? '.' : 'F';

    if (!message.ok) {
      message.testContext = testContext.slice();
      failureMessages.push(message);
    }
  }

  function displayResults() {
    console.log(output);
    console.log('total: ', totalCount);
    console.log('failed:', failedCount);

    if (failureMessages.length === 0) return;

    console.log('\n\n');

    failureMessages.forEach(printFailureMessage);
  }

  function printFailureMessage(message) {
    console.error('context:  ', getTextContext(message));
    console.log('  operator: ', message.operator);
    console.log('  expected: ', typeof message.expected, inspectableValue(message.expected));
    console.log('  actual:   ', typeof message.actual,   inspectableValue(message.actual));
    console.log('  location: ', getAppStack(message));
    console.log('');
  }

  function displayError(e) {
    console.error(e);
  }

  function getTextContext(message) {
    return message.testContext.concat([message.name]).join(': ');
  }

  function inspectableValue(value) {
    if (typeof value === 'function') return value.name || 'anonymous';
    if (value instanceof HTMLElement) return value;
    else return JSON.stringify(value);
  }

  function getAppStack(message) {
    var stackLines = message.error.stack.split('\n').slice(1);
    var appStackLines = stackLines.filter(isNonTapeLine);

    return '\n' + appStackLines.join('\n');
  }

  var IS_TAPE_STACK_LINE = /lib\/tape\.js:/;

  function isNonTapeLine(line) {
    return !IS_TAPE_STACK_LINE.test(line);
  }

  function pushContext(message) {
    testContext.push(message.name);
  }

  function popContext() {
    testContext.pop();
  }

}());

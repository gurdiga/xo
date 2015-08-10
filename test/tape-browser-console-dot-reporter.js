(function() {
  'use strict';

  var totalCount = 0;
  var failedCount = 0;
  var output = '';
  var failureMessages = [];

  window.TapeBrowserConsoleDotReporter = TapeBrowserConsoleDotReporter;

  function TapeBrowserConsoleDotReporter(tape) {
    reportDuration(
      tape.createStream({objectMode: true})
      .on('data', processMessage)
      .on('end', displayResults)
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
    switch(message.type) {
      case 'assert': count(message); log(message); break;
      case 'test': break;
      case 'end': break;
      default: console.log('-- unknown message', message);
    }
  }

  function count(message) {
    totalCount++;

    if (!message.ok) failedCount++;
  }

  function log(message) {
    output += message.ok ? '.' : 'F';

    if (!message.ok) failureMessages.push(message);
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
    console.log('assertion:', message.name);
    console.log('operator: ', message.operator);
    console.log('expected: ', typeof message.expected, JSON.stringify(message.expected));
    console.log('actual:   ', typeof message.actual  , JSON.stringify(message.actual));
    console.log('location: ', getAppStack(message));
  }

  function getAppStack(message) {
    var stackLines = message.error.stack.split('\n').slice(1);
    var appStackLines = stackLines.filter(isNonTapeLine).map(getPathInfo);

    return appStackLines.join('\n');
  }

  var IS_TAPE_STACK_LINE = /lib\/tape\.js:/;

  function isNonTapeLine(line) {
    return !IS_TAPE_STACK_LINE.test(line);
  }

  var INSIDE_PARENS = /\((.+)\)/;

  function getPathInfo(line) {
    return line.match(INSIDE_PARENS)[1];
  }

}());

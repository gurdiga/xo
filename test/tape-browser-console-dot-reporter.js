(function() {
  'use strict';

  var totalCount = 0;
  var failedCount = 0;
  var output = '';
  var failureMessages = [];

  window.TapeBrowserConsoleDotReporter = TapeBrowserConsoleDotReporter;

  function TapeBrowserConsoleDotReporter(tape) {
    tape
    .createStream({objectMode: true})
    .on('data', function(message) {
      switch(message.type) {
        case 'assert': count(message); log(message); printOutput(); break;
        case 'test': break;
        case 'end': break;
        default: console.log(message);
      }
    })
    .on('end', displayResults);
  }


  function count(message) {
    totalCount++;
    if (!message.ok) failedCount++;
  }

  function log(message) {
    output += message.ok ? '.' : 'F';

    if (!message.ok) failureMessages.push(message);
  }

  function printOutput() {
    console.clear();
    console.log(output);
  }

  function displayResults() {
    console.log('total', totalCount, 'failed', failedCount);

    if (failureMessages.length === 0) return;

    console.log('\n\n');

    failureMessages.forEach(function(message) {
      console.log('assertion:', message.name);
      console.log('operator: ', message.operator);
      console.log('expected: ', typeof message.expected, JSON.stringify(message.expected));
      console.log('actual:   ', typeof message.actual  , JSON.stringify(message.actual));
      console.log('location: ', appStack(message));
    });
  }

  var IS_TAPE_STACK_LINE = /lib\/tape\.js:/;

  function nonTapeLine(line) {
    return !IS_TAPE_STACK_LINE.test(line);
  }

  var INSIDE_PARENS = /\((.+)\)/;
  function pathInfo(line) {
    return line.match(INSIDE_PARENS)[1];
  }

  function appStack(message) {
    var stackLines = message.error.stack.split('\n').slice(1);
    var appStackLines = stackLines.filter(nonTapeLine).map(pathInfo);

    return appStackLines.join('\n');
  }

}());

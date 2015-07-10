'use strict';

var jade = require('jade');

var options = {
  'files': getFileList(),
  'keepingAtTop': require('../../utils/keepingAtTop'),
  'pretty': true
};

var html = jade.renderFile('app/index.jade', options);

console.log(html);

function getFileList() {
  var fs = require('fs');

  return fs.readFileSync('/dev/stdin')
    .toString()
    .split('\n')
    .filter(nonEmpty);
}

function nonEmpty(line) {
  return line.trim().length > 0;
}

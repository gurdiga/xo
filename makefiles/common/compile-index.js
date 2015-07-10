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
    .filter(nonEmpty)
    .map(translateExtension);
}

function nonEmpty(line) {
  return line.trim().length > 0;
}

function translateExtension(path) {
  return path.replace(/jsx/g, 'js');
}

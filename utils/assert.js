'use strict';

function assert(condition, message) {
  if (!condition) throw new AssertionError(message);
}

function AssertionError(message) {
  this.name = "AssertionError";
  this.message = message || "(no error message given)";
}

AssertionError.prototype = Error.prototype;

module.exports = assert;

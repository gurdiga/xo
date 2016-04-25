[![Code Climate](https://codeclimate.com/github/gurdiga/xo/badges/gpa.svg)](https://codeclimate.com/github/gurdiga/xo)

# XO

A productivity app for bailiffs. A breakable toy.

# The Big Idea®

This is an experiment to prove that it’s possible to sanely develop
single-page Web UIs using only raw JS. The approach is simliar to React,
but without its baggage.

Widgets are [JS
classes](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes).
They
[create](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
and
[style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)
their own DOM. This increases cohesion and prevents issues with [CSS
issues](http://meexposed.tumblr.com/post/129425951130/the-c-in-css) as
the code grows.

I’ve started with React and Browserify, and dropped them both because
transpilation time got unacceptably long. First I decided to give up on
JSX and use React’s JS API. It was still too slow. Then I decided to
give up on Browserify and just use
[IIFEs](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression),
script tags and raw JS namespaces.

# Module system

I found that for single-page web apps I don’t need a module system. From
the code perspective, a module system has two purposes:

* allow breaking the app into smaller pieces;
* allow pieces to refer other pieces.

It is essentially a global registry.

For example, this:
```js
		var assert = require('./app/utils/assert.js');
```
is equivalent to this:
```js
		var assert = window.App.Utils.assert;
```

# Build system

Linting (ESLint) is my only build step. I only run it when it seems like
something is broken and I can’t quickly figure out what it is. It is
also run from Git’s pre-commit hook.

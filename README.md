[![Code Climate](https://codeclimate.com/github/gurdiga/xo/badges/gpa.svg)](https://codeclimate.com/github/gurdiga/xo)

# XO

A productivity app for bailiffs. A breakable toy.

# The Big Idea®

This is an experiment to prove that it’s possible to sanely develop
Web UIs with vanilla JS. Since it’s intented to be an
[Electron](http://electron.atom.io/) app, it’s Chrome only for now.

Widgets are [JS
classes](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes).
They
[create](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
and
[style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)
their own DOM pieces and encapsulate behavior. This yields cohesion and
prevents issues with
[CSS](http://meexposed.tumblr.com/post/129425951130/the-c-in-css) as the
code grows.

I’ve started with React and Browserify, and dropped them both because
transpilation time got unacceptably long. First I decided to give up on
JSX and use React’s JS API. It was still too slow. Then I gave up on
Browserify in favor of vanilla JS namespaces,
[IIFEs](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression),
and script tags.

Now I make a change in the code, and refresh to see it live, which is
quite lightweight a workflow.

# Module system

It turned out that for single-page web apps I don’t need a module
system. From the code perspective, a module system has two purposes:

* allow breaking the app into smaller pieces;
* allow pieces to refer other pieces.

It is essentially a global registry of all the meaningful code pieces of
the app.

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

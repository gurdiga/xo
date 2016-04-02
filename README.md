[![Code Climate](https://codeclimate.com/github/gurdiga/xo/badges/gpa.svg)](https://codeclimate.com/github/gurdiga/xo)

# XO

A productivity app for bailiffs. A breakable toy.

## Interesting technical things

This is intented to be a single-page app and/or a desktop web app (like
Chrome app).  I’ve started with React and Browserify. But compilation to
JS was getting slower and slower as the code grew.

First I decided to give up on JSX and use React’s JS API. It was still
too slow. Then I decided to give up on Browserify and just use script
tags and raw JS namespaces. Now I only have ESLint, but I only run it
when it seems like something is broken and I can’t quickly figure out
what it is. It is also run from Git’s pre-commit hook.

It turns out that for SAP-like web front-end applications, there is
really not much need for a module system like Browserify. As far as
program code is concerned, they are just a mechanism to address code
modules given their paths: a global registry of modules. Because
module’s path is essentially a namespacing mechanism this can be
easily achieved with raw JS namespaces.

This is where I am now: I use script tags, edit code, and refresh to see
it working.

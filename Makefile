JS_FILES=$(shell find app -name '*.jsx') $(shell find app -name '*.js') manifest.json config/package.json

ui: node_modules lintspaces jsxhint build/react.js
	@browserify \
		--transform reactify \
		--exclude react \
		app/main.jsx > build/main.js

chrome: ui
	@/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
		--load-and-launch-app=$$(pwd) \
		&> /dev/null

build/react.js: build 
	@browserify --require react > build/react.js

build:
	@mkdir build

jsxhint: config/jshint.json

config/jshint.json: $(JS_FILES)
	@jsxhint \
		--show-non-errors \
		--config $@ \
		$? \
	&& touch $@

deps: node_modules
node_modules: package.json
	@npm install && touch node_modules

package.json:
	ln -s config/package.json .

lintspaces:
	@lintspaces \
		--newline \
		--maxnewlines 2 \
		--trailingspaces \
		--indentation spaces \
		$(JS_FILES)

server:
	~/src/nginx-server/nginx-server.py ./

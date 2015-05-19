ui: node_modules jsxhint build/react.js
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

jsxhint:
	@jsxhint \
		--show-non-errors \
		--config config/jshint.json \
		app/**/*.js* manifest.json

deps: node_modules

node_modules:
	@npm install \
		browserify \
		react \
		react-tools \
		reactify

server:
	~/src/nginx-server/nginx-server.py ./

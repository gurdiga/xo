export
	JS_FILES=$(shell find app makefiles -name '*.jsx' -or -name '*.js' -or -name '*.json' -and -not -name 'jshint.json')

default: ui

open-in-browser: ui chrome-app-package
	@open build/index.html

dist: ui chrome-app-package open-app

pre-commit: clean lint-force dist

open-app:
	@/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
		--load-and-launch-app=$$(pwd)/build/ \
		&> /dev/null

ui: build deps lint
	@browserify \
		--transform reactify \
		app/index.jsx \
		> build/index.js

clean:
	rm -rf build/

include $(shell find makefiles -name '*.mk' | sort)

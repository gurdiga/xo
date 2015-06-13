export
	NODE_ENV=development
	JS_FILES=$(shell \
		find \
			test app mixins utils makefiles \
			-name '*.jsx' \
			-or -name '*.js' \
			-or -name '*.json' \
			-and -not -name 'jshint.json' \
	)

default: ui chrome-app-package

open-in-browser: ui chrome-app-package
	@open build/index.html

dist: ui chrome-app-package open-app

pre-commit: clean lint-force dist

open-app:
	@/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
		--load-and-launch-app=$$(pwd)/build/

ui: build deps lint
	@browserify \
		--debug \
		--transform envify \
		--transform reactify \
		app/main.jsx \
		> build/main.js

clean:
	rm -rf build/

include $(shell find makefiles -name '*.mk' | sort)

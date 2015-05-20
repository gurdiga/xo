export
	JS_FILES=$(shell find app makefiles -name '*.jsx' -or -name '*.js' -or -name '*.json' -and -not -name 'jshint.json')
	NODE_ENV=development

dist: ui chrome-app-package open-app

pre-commit: clean lint-force dist

open-app:
	@/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
		--load-and-launch-app=$$(pwd)/build/ \
		&> /dev/null

ui: deps testing-tools lint build/react-with-addons.min.js
	@browserify \
		--transform reactify \
		--transform envify \
		app/index.jsx \
		> build/index.js

clean:
	rm -rf build/

include $(shell find makefiles -name '*.mk' | sort)

export
	JS_FILES=$(shell find app config -name '*.jsx' -or -name '*.js' -or -name '*.json')
	NODE_ENV=development

dist: ui chrome-app-package open-app

open-app:
	@/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
		--load-and-launch-app=$$(pwd)/build/ \
		&> /dev/null

ui: deps testing-tools lint build/react-with-addons.min.js
	@browserify \
		--transform reactify \
		--transform envify \
		app/index.jsx > build/index.js

clean:
	rm -rf build/

include $(shell find makefiles -name '*.mk' | sort)

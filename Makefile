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

# experimental
build/%.js: app/%.jsx
	$(eval destination_dir=$(dir $@))
	@mkdir -p $(destination_dir)
	jsx $< > $@

build/%.js: app/%.js
	cp $< $@

build/%.json: app/%.json
	cp $< $@

#build/index.html: app/index.jade build/js-list.diff
#	node makefiles/common/compile-index.js < build/js-list.txt > $@

build/js-list.diff:: # double colon means “allways build”
	@mv build/js-list.txt build/js-list.txt.prev || touch build/js-list.txt.prev
	@find app test -type f -name '*.jsx' -or -name '*.js' > build/js-list.txt
	@diff --new-file build/js-list.txt build/js-list.txt.prev || touch $@

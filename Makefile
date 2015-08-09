export
	NODE_ENV=development
	JS_FILES=$(shell \
		find \
			test app utils makefiles \
			-name '*.jsx' \
			-or -name '*.js' \
			-or -name '*.json' \
			-and -not -name 'jshint.json' \
	)

default: lib-all lint

pre-commit: lib-all lint-force open-app

open-app: lib-all lint
	@open --new -a "Google Chrome" --args \
		--load-and-launch-app=$$(pwd)

include $(shell find makefiles -name '*.mk' | sort)

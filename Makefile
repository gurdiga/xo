export
	NODE_ENV=development
	JS_FILES=$(shell \
		find . -regextype posix-extended \
			-type d -regex '^./(lib|node_modules)' -prune \
			-type f \
			-or -name '*.js' \
			-or -name '*.json' \
			-and -not -name 'jshint.json' \
	)

default: lib-all lint

open: lib-all lint
	@open --new -a "Google Chrome" --args \
		--load-and-launch-app=$$(pwd)

include $(shell find makefiles -name '*.mk' | sort)

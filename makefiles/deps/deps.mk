deps: install-npm-packages node_modules/utils

install-npm-packages: package.json node_modules

package.json:
	ln --force --symbolic makefiles/deps/package.json

node_modules:
	npm prune && \
	npm install

node_modules/utils:
	ln --force --symbolic ../utils --target node_modules

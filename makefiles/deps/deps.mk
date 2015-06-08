deps: \
	node_modules \
	node_modules/utils \
	node_modules/mixins

node_modules: package.json
	npm prune && \
	npm install

package.json:
	ln --force --symbolic makefiles/deps/package.json

node_modules/utils: | node_modules
	ln --force --symbolic ../utils --target node_modules

node_modules/mixins: | node_modules
	ln --force --symbolic ../mixins --target node_modules

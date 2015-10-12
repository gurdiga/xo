LINTSPACES_TIMESTAMP_FILE=makefiles/lint/lintspaces.timestamp

lintspaces: $(LINTSPACES_TIMESTAMP_FILE) | node_modules/lintspaces-cli
$(LINTSPACES_TIMESTAMP_FILE): $(JS_FILES)
	$(call lintspaces-do-work, $?) && touch $(LINTSPACES_TIMESTAMP_FILE)

lintspaces-force: | node_modules/lintspaces-cli
	$(call lintspaces-do-work, $(JS_FILES))

node_modules/lintspaces-cli:
	npm install lintspaces-cli@0.1.1

define lintspaces-do-work
	$(eval files=$(1))

	@echo Space linting...
	@echo $(files)
	@lintspaces \
		--newline \
		--maxnewlines 2 \
		--trailingspaces \
		--indentation spaces \
		$(files)
endef

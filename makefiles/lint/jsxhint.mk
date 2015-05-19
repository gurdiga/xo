JSHINT_CONFIG_FILE=makefiles/lint/jshint.json
JSHINT_TIMESTAMP_FILE=$(JSHINT_CONFIG_FILE)

jsxhint: $(JSHINT_TIMESTAMP_FILE)
$(JSHINT_TIMESTAMP_FILE): $(JS_FILES)
	$(call jsxhint-do-work, $?) && touch $(JSHINT_TIMESTAMP_FILE)

jsxhint-force:
	$(call jsxhint-do-work, $(JS_FILES))

define jsxhint-do-work
	$(eval files=$(1))

	@echo JSHinting...
	@echo $(files)
	@jsxhint \
		--config $(JSHINT_CONFIG_FILE) $(files) && \
		touch $(JSHINT_TIMESTAMP_FILE)
endef

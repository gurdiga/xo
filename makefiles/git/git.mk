pre-commit:# lib-all lint-force
	@echo skipping make pre-commit

git-hook: .git/hooks/pre-commit

.git/hooks/pre-commit: makefiles/git/pre-commit-hook
	cp $< $@

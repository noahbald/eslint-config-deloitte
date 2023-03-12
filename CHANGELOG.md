## Changelog for Deloitte Digital's ESLint Config

### [next]

- Configuration updates
	- Updated default node version to lts/gallium (v16.19.0)
	- Updated node minimum to v12
	- Upgraded ESLint to version 8.35.1
	- Upgraded eslint-plugin-import to version 2.27.5
	- Upgraded eslint-plugin-new-with-error to version 3.1.0
	- Upgraded eslint-plugin-jsx-a11y to version 6.7.1
	- Upgraded eslint-plugin-react to version 7.32.2
	- Added new eslint-plugin-react-hooks
	- Upgraded @typescript-eslint/eslint-plugin to version 5.54.0
	- Upgraded @typescript-eslint/parser to version 5.54.0
	- Updated resolvers and extensions for /imports
- Updated rules to match Deloitte's internal guidelines
	- best-practices
		- Set `no-bitwise` to warn
		- Set `camelcase` to check destructuring
		- Set `wrap-iife` to `inside`
		- Set `no-plusplus` to check loop afterthought
		- Moved `no-undef` to /variables
		- Moved `no-unused-vars` to /variables
		- Set `space-before-function-paren` to check for space before anonymous
		- Set `quote-props` to `consistent-as-needed`
		- Set `key-spacing` to use `mode-strict`
		- Set `space-unary-ops` to space words
		- Set `yoda` to except ranges
		- Enabled `one-var`
		- Set `dot-notation` to allow keywords
		- Set `indent` to use tabs on switch case
	- es6
		- Enabled `arrow-body-style`
		- Set `arrow-parens` to `always`
		- Enabled `no-restricted-imports`
		- Enabled `object-shorthand`
		- Enabled `prefer-numeric-literals`
		- Enabled `prefer-template`
	- imports
		- Enabled `import/no-unresolved`
		- Enabled `import/named`
		- Disabled `import/imports-first`; deprecated
		- Enabled `import/no-namespace`
		- Enabled `import/extensions`
		- Enabled `import/order`
		- Enabled `import/max-dependencies` to `warn`
		- Enabled `import/no-absolute-path`
	- react/jsx-a11y
		- Disabled `jsx-a11y/accessible-emoji`; deprecated
		- Enabled `jsx-a11y/anchor-has-content`
		- Enabled `jsx-a11y/aria-activedescendant-has-tabindex`
		- Set `jsx-a11y/aria-role` to ignore non-DOM
		- Set `jsx-a11y/html-has-lang` to `error`
		- Enabled `jsx-a11y/interactive-supports-focus`
		- Set `jsx-a11y/media-has-caption` to `error`
		- Enabled `jsx-a11y/mouse-events-have-key-events`
		- Enabled `jsx-a11y/no-autofocus`
		- Enabled `jsx-a11y/tabindex-no-positive`
		- Disabled `jsx-a11y/label-has-for`; replaced with `jsx-a11y/label-has-associated-control`
		- Enabled `jsx-a11y/anchor-is-valid` to `warn`
	- react/react
		- Set `react/display-name` to `warn`
		- Enabled `react/forbid-prop-types`
		- Enabled `react/no-danger` to `warn`
		- Set `react/no-deprecated` to `error`
		- Disabled `react/no-multi-comp`
		- Enabled `react/prefer-stateless-function`
		- Set `react/require-default-props` to `forbidDefaultForRequired`
		- Set `react/self-closing-comp` to `error`
		- Updated orders for `react/sort-comp`
		- Set `react/jsx-boolean-value` to `error`
		- Set `react/jsx-closing-bracket-location` to `line-aligned`
		- Set `react/jsx-filename-extension` to `error` and set extensions to `.jsx`
		- Disabled `react/jsx-handler-names`
		- Set `react/jsx-no-bind` to `error` and ignoreDOMComponents
		- Set `react/jsx-no-duplicate-props` to ignore case
		- Set `react/jsx-no-target-blank` to `error`
		- Set `react/jsx-no-undef` to `error`
		- Set `react/jsx-tag-spacing` to error on space before closing
		- Set `react/jsx-wrap-multilines` to include condition, logical, and prop
		- Enabled `react/jsx-curly-brace-presence`
		- Enabled `react/destructuring-assignment`
		- Set `react/no-access-state-in-setstate` to `error`
		- Set `react/button-has-type` to forbid `reset`
		- Disabled `react/jsx-child-element-spacing`
- Added various rules to match Deloitte's internal guidelines
	- best-practices (see git history)
	- Created /errors
	- es6 (see git history)
	- imports (see git history)
	- Created /node
	- Created /strict
	- Created /style
	- Created /variables
	- react/jsx-a11y (see git history)
	- react/react (see git history)
	- typescript/typescript
		- Disabled more rules in overrides
		- Added naming convention
- Updated packages to extend base recommendations
	- eslint-config extends `eslint:recommended`
	- react/jsx-a11y extends `jsx-a11y/recommended`
	- react extends `react/recommended`
	- react extends `react-hooks/recommended`
	- typescript extends `@typescript-eslint/recommended
	- typescript extends `@typescript-eslint/recommended-type-checking
	- typescript doesn't extend `@typescript-eslint/strict`, but is included commented out to be enabled per-project


### [3.4.1]

- Enforce `async () => {}` instead of `async() => {}`.
- Added `eslint-plugin-you-dont-need-lodash-underscore` plugin
- Added `eslint-plugin-new-with-error` plugin
- Allow JSX in `.tsx` files
- Added a TypeScript config
- Migrated this mono repo from npm to yarn
- Update node version in .travis.yml
- Bump ajv from 6.10.0 to 6.12.6 by @dependabot in #39
 
### [3.4.0]

- Packages are now scoped to `@deloitte-digital-au`

### [3.3.1]

- Added overrides for Webpack, ESLint, Stylelint and Karma configuration files, to set the Node environment variable to true
- Updated the linting of this project
- Added documentation for publishing to npm

### [3.3.0]

- Added ECMAScript 2017 support
- Added lerna to manage our packages
- Added contributing readme
- Added .nvmrc to promote node 8.7
- Updated travis build config and node version
- Upgraded eslint 4.18
- Upgraded eslint-plugin-import to 2.9
- Upgraded eslint-plugin-react to 7.7
- Added `react/button-has-type` rule
- Added `react/no-this-in-sfc` rule
- Added `react/jsx-child-element-spacing` rule
- Added `react/jsx-max-depth` rule
- Updated `react/prefer-stateless-function` to off
- Updated `jsx-a11y/anchor-is-valid` to off
- Updated `react/jsx-key` from error to warn
- Updated `react/jsx-curly-brace-presence` to off
- Updated `react/jsx-no-bind` from error to warn
- Updated `react/jsx-filename-extension` from error to warn and now expects `.js`
- Updated `react/self-closing-comp` from error to warn
- Updated `react/no-array-index-key` from error to warn
- Updated `object-shorthand` from error to off

### [3.1.1]

- Fixed duplicate of `jsx-a11y/label-has-for` rule

### [3.1.0]

- Added npm lock files
- Moved npm prePublish script to prepublishOnly
- Upgraded ESLint to 4.9.0
- Upgraded ESLint plugin react to 7.4.0
- Upgraded ESLint plugin import to 2.7.0
- Upgraded ESLint plugin jsx a11y to 6.0.2
- Moved peerDepencies into dependencies (now install everything in one go since this is nearly always the case)
- Added new `jsx-a11y/label-has-for` rule
- Added new `jsx-a11y/anchor-is-valid` rule
- Added new `react/boolean-prop-naming` rule
- Added new `react/no-typos` rule
- Changed `arrow-body-style`, now is turned off
- Changed `arrow-parens`, removed require block body
- Changed `keyword-spacing`, now has overrides defined
- Changed `react/jsx-no-bind`, to be a bit more relaxed
- Fixed `jsx-a11y/href-no-hash` deprecated error

### [3.0.0]

- Upgraded ESLint to version 4.1
- Added switch-colon-spacing rule, a new ESLint 4 rule.

### [2.0.0]

- Now enforcing comma-dangle for multiline statements [#2](https://github.com/DeloitteDigitalAPAC/eslint-config-deloitte/pull/2)
- Turned off no-unresolved imports as it tends to raise false positives in webpack projects
- Added new React config package
- Updated Docs

### [1.0.1]

- Disallow debugger statements [#1](https://github.com/DeloitteDigitalAPAC/eslint-config-deloitte/pull/1).

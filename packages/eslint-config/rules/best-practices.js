module.exports = {
	extends: 'eslint:recommended',
	globals: {
		DDIGITAL: true,
		DD: true,
	},
	rules: {
		// Disallow bitwise operators
		// http://eslint.org/docs/rules/no-bitwise
		'no-bitwise': 'warn',

		// Require Camelcase
		// http://eslint.org/docs/rules/camelcase
		camelcase: ['error', {
			properties: 'never',
			ignoreDestructuring: false,
		}],

		// Require Following Curly Brace Conventions
		// http://eslint.org/docs/rules/curly
		curly: ['error', 'all'],

		// Require === and !==
		// http://eslint.org/docs/rules/eqeqeq
		eqeqeq: ['error', 'always', {
			null: 'ignore', // eslint-disable-line quote-props
		}],

		// Require Guarding for-in
		// http://eslint.org/docs/rules/guard-for-in
		'guard-for-in': 'error',

		// Require IIFEs to be Wrapped
		// http://eslint.org/docs/rules/wrap-iife
		'wrap-iife': ['error', 'inside'],

		// Disallow Early Use
		// http://eslint.org/docs/rules/no-use-before-define
		'no-use-before-define': 'error',

		// Require constructor function names to begin with a capital letter
		// http://eslint.org/docs/rules/new-cap
		'new-cap': 'error',

		// Disallow Use of caller/callee
		// http://eslint.org/docs/rules/no-caller
		'no-caller': 'error',

		// Disallow empty block statements
		// http://eslint.org/docs/rules/no-empty
		'no-empty': ['error', {
			allowEmptyCatch: true,
		}],

		// Disallow the unary operators ++ and --
		// http://eslint.org/docs/rules/no-plusplus
		'no-plusplus': 'error',

		// Enforce the consistent use of single quotes
		// http://eslint.org/docs/rules/quotes
		quotes: ['error', 'single'],

		// Require or disallow strict mode directives
		// babel inserts `'use strict';` for you, so if your project uses babel, override this rule to 'strict': ['error', 'never']
		// http://eslint.org/docs/rules/strict
		strict: 'error',

		// Require or disallow semicolons instead of ASI
		// http://eslint.org/docs/rules/semi
		semi: 'error',

		// Enforce consistent spacing before opening parenthesis in function definitions
		// http://eslint.org/docs/rules/space-before-function-parentheses
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'always',
			},
		],

		// Disallow or enforce spaces inside of brackets
		// http://eslint.org/docs/rules/array-bracket-spacing
		'array-bracket-spacing': ['error', 'never'],

		// Disallow or enforce spaces inside of parentheses
		// http://eslint.org/docs/rules/space-in-parens
		'space-in-parens': ['error', 'never'],

		// Enforce consistent object literal property names
		// http://eslint.org/docs/rules/quote-props
		'quote-props': ['error', 'as-needed'],

		// Enforce consistent spacing between keys and values in object literal properties
		// http://eslint.org/docs/rules/key-spacing
		'key-spacing': ['error', {
			beforeColon: false,
			afterColon: true,
			mode: 'strict',
		}],

		// Require or disallow spaces before/after unary operators
		// http://eslint.org/docs/rules/space-unary-ops
		'space-unary-ops': ['error', {
			words: true,
			nonwords: false,
		}],

		// Require space after colons of case and default clauses in switch statements
		// http://eslint.org/docs/rules/switch-colon-spacing
		'switch-colon-spacing': ['error', {
			after: true,
			before: false,
		}],

		// Disallow mixed spaces and tabs for indentation
		// http://eslint.org/docs/rules/no-mixed-spaces-and-tabs'
		'no-mixed-spaces-and-tabs': 'error',

		// Disallow trailing whitespace at the end of lines
		// http://eslint.org/docs/rules/no-trailing-spaces
		'no-trailing-spaces': 'error',

		// Require or disallow trailing commas
		// http://eslint.org/docs/rules/comma-dangle
		'comma-dangle': ['error', 'always-multiline'],

		// Disallow Yoda Conditions
		// http://eslint.org/docs/rules/yoda
		yoda: ['error', 'never', {
			exceptRange: true,
		}],

		// Disallow multiple empty lines
		// http://eslint.org/docs/rules/no-multiple-empty-lines
		'no-multiple-empty-lines': 'error',

		// Require Or Disallow Space Before Blocks
		// http://eslint.org/docs/rules/space-before-blocks
		'space-before-blocks': ['error', 'always'],

		// Disable variables to be declared together
		// http://eslint.org/docs/rules/one-var
		'one-var': ['error', 'never'],

		// Comma style
		// http://eslint.org/docs/rules/comma-style
		'comma-style': ['error', 'last'],

		// Require Spaces Around Infix Operators
		// http://eslint.org/docs/rules/space-infix-ops
		'space-infix-ops': 'error',

		// Require file to end with single newline
		// http://eslint.org/docs/rules/eol-last
		'eol-last': ['error', 'always'],

		// Require Dot Notation
		// http://eslint.org/docs/rules/dot-notation
		'dot-notation': ['error', { allowKeywords: true }],

		// Enforce consistent spacing before and after keywords
		// http://eslint.org/docs/rules/keyword-spacing
		'keyword-spacing': ['error', {
			before: true,
			after: true,
			overrides: {
				return: { after: true },
				throw: { after: true },
				case: { after: true },
			},
		}],

		// Require Consistent This
		// http://eslint.org/docs/rules/consistent-this
		'consistent-this': ['error', '_this'],

		// Enforce consistent linebreak style
		// http://eslint.org/docs/rules/linebreak-style
		'linebreak-style': ['error', 'unix'],

		// Enforce consistent indentation
		// http://eslint.org/docs/rules/indent
		indent: ['error', 'tab'],

		// Require Brace Style
		// http://eslint.org/docs/rules/brace-style
		'brace-style': ['warn', '1tbs', {
			allowSingleLine: true,
		}],
		// enforces getter/setter pairs in objects
		// https://eslint.org/docs/rules/accessor-pairs
		'accessor-pairs': 'off',

		// enforces return statements in callbacks of array's methods
		// https://eslint.org/docs/rules/array-callback-return
		'array-callback-return': ['error', { allowImplicit: true }],

		// treat var statements as if they were block scoped
		// https://eslint.org/docs/rules/block-scoped-var
		'block-scoped-var': 'error',

		// specify the maximum cyclomatic complexity allowed in a program
		// https://eslint.org/docs/rules/complexity
		complexity: ['off', 20],

		// enforce that class methods use "this"
		// https://eslint.org/docs/rules/class-methods-use-this
		'class-methods-use-this': ['error', {
			exceptMethods: [],
		}],

		// require return statements to either always or never specify values
		// https://eslint.org/docs/rules/consistent-return
		'consistent-return': 'error',

		// require default case in switch statements
		// https://eslint.org/docs/rules/default-case
		'default-case': ['error', { commentPattern: '^no default$' }],

		// Enforce default clauses in switch statements to be last
		// https://eslint.org/docs/rules/default-case-last
		'default-case-last': 'error',

		// https://eslint.org/docs/rules/default-param-last
		'default-param-last': 'error',

		// enforces consistent newlines before or after dots
		// https://eslint.org/docs/rules/dot-location
		'dot-location': ['error', 'property'],

		// Require grouped accessor pairs in object literals and classes
		// https://eslint.org/docs/rules/grouped-accessor-pairs
		'grouped-accessor-pairs': 'error',

		// enforce a maximum number of classes per file
		// https://eslint.org/docs/rules/max-classes-per-file
		'max-classes-per-file': ['error', 1],

		// disallow the use of alert, confirm, and prompt
		// https://eslint.org/docs/rules/no-alert
		'no-alert': 'warn',

		// disallow lexical declarations in case/default clauses
		// https://eslint.org/docs/rules/no-case-declarations
		'no-case-declarations': 'error',

		// Disallow returning value in constructor
		// https://eslint.org/docs/rules/no-constructor-return
		'no-constructor-return': 'error',

		// disallow division operators explicitly at beginning of regular expression
		// https://eslint.org/docs/rules/no-div-regex
		'no-div-regex': 'off',

		// disallow else after a return in an if
		// https://eslint.org/docs/rules/no-else-return
		'no-else-return': ['warn', { allowElseIf: false }],

		// disallow empty functions, except for standalone funcs/arrows
		// https://eslint.org/docs/rules/no-empty-function
		'no-empty-function': ['error', {
			allow: [
				'arrowFunctions',
				'functions',
				'methods',
			],
		}],

		// disallow empty destructuring patterns
		// https://eslint.org/docs/rules/no-empty-pattern
		'no-empty-pattern': 'error',

		// Disallow empty static blocks
		// https://eslint.org/docs/latest/rules/no-empty-static-block
		'no-empty-static-block': 'error',

		// disallow comparisons to null without a type-checking operator
		// https://eslint.org/docs/rules/no-eq-null
		'no-eq-null': 'off',

		// disallow use of eval()
		// https://eslint.org/docs/rules/no-eval
		'no-eval': 'error',

		// disallow adding to native types
		// https://eslint.org/docs/rules/no-extend-native
		'no-extend-native': 'error',

		// disallow unnecessary function binding
		// https://eslint.org/docs/rules/no-extra-bind
		'no-extra-bind': 'error',

		// disallow Unnecessary Labels
		// https://eslint.org/docs/rules/no-extra-label
		'no-extra-label': 'error',

		// disallow fallthrough of case statements
		// https://eslint.org/docs/rules/no-fallthrough
		'no-fallthrough': 'error',

		// disallow the use of leading or trailing decimal points in numeric literals
		// https://eslint.org/docs/rules/no-floating-decimal
		'no-floating-decimal': 'error',

		// disallow reassignments of native objects or read-only globals
		// https://eslint.org/docs/rules/no-global-assign
		'no-global-assign': 'error',

		// deprecated in favor of no-global-assign
		// https://eslint.org/docs/rules/no-native-reassign
		'no-native-reassign': 'off',

		// disallow implicit type conversions
		// https://eslint.org/docs/rules/no-implicit-coercion
		'no-implicit-coercion': ['error', {
			boolean: false,
			disallowTemplateShorthand: true,
			allow: [],
		}],

		// disallow var and named functions in global scope
		// https://eslint.org/docs/rules/no-implicit-globals
		'no-implicit-globals': 'off',

		// disallow use of eval()-like methods
		// https://eslint.org/docs/rules/no-implied-eval
		'no-implied-eval': 'error',

		// disallow this keywords outside of classes or class-like objects
		// https://eslint.org/docs/rules/no-invalid-this
		'no-invalid-this': 'off',

		// disallow usage of __iterator__ property
		// https://eslint.org/docs/rules/no-iterator
		'no-iterator': 'error',

		// disallow use of labels for anything other than loops and switches
		// https://eslint.org/docs/rules/no-labels
		'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

		// disallow unnecessary nested blocks
		// https://eslint.org/docs/rules/no-lone-blocks
		'no-lone-blocks': 'error',

		// disallow creation of functions within loops
		// https://eslint.org/docs/rules/no-loop-func
		'no-loop-func': 'error',

		// disallow magic numbers
		// https://eslint.org/docs/rules/no-magic-numbers
		'no-magic-numbers': ['warn', {
			ignore: [],
			ignoreArrayIndexes: true,
			enforceConst: true,
			detectObjects: false,
		}],

		// disallow use of multiple spaces
		// https://eslint.org/docs/rules/no-multi-spaces
		'no-multi-spaces': ['error', {
			ignoreEOLComments: false,
		}],

		// disallow use of multiline strings
		// https://eslint.org/docs/rules/no-multi-str
		'no-multi-str': 'error',

		// disallow use of new operator when not part of the assignment or comparison
		// https://eslint.org/docs/rules/no-new
		'no-new': 'error',

		// disallow use of new operator for Function object
		// https://eslint.org/docs/rules/no-new-func
		'no-new-func': 'error',

		// disallows creating new instances of String, Number, and Boolean
		// https://eslint.org/docs/rules/no-new-wrappers
		'no-new-wrappers': 'error',

		// Disallow \8 and \9 escape sequences in string literals
		// https://eslint.org/docs/rules/no-nonoctal-decimal-escape
		'no-nonoctal-decimal-escape': 'error',

		// disallow use of (old style) octal literals
		// https://eslint.org/docs/rules/no-octal
		'no-octal': 'error',

		// disallow use of octal escape sequences in string literals, such as
		// var foo = 'Copyright \251';
		// https://eslint.org/docs/rules/no-octal-escape
		'no-octal-escape': 'error',

		// disallow reassignment of function parameters
		// disallow parameter object manipulation except for specific exclusions
		// rule: https://eslint.org/docs/rules/no-param-reassign.html
		'no-param-reassign': ['error', {
			props: true,
			ignorePropertyModificationsFor: [
				'acc', // for reduce accumulators
				'accumulator', // for reduce accumulators
				'e', // for e.returnvalue
				'ctx', // for Koa routing
				'context', // for Koa routing
				'req', // for Express requests
				'request', // for Express requests
				'res', // for Express responses
				'response', // for Express responses
				'$scope', // for Angular 1 scopes
				'staticContext', // for ReactRouter context
			],
		}],

		// disallow usage of __proto__ property
		// https://eslint.org/docs/rules/no-proto
		'no-proto': 'error',

		// disallow declaring the same variable more than once
		// https://eslint.org/docs/rules/no-redeclare
		'no-redeclare': 'error',

		// disallow certain object properties
		// https://eslint.org/docs/rules/no-restricted-properties
		'no-restricted-properties': ['error', {
			object: 'arguments',
			property: 'callee',
			message: 'arguments.callee is deprecated',
		}, {
			object: 'global',
			property: 'isFinite',
			message: 'Please use Number.isFinite instead',
		}, {
			object: 'self',
			property: 'isFinite',
			message: 'Please use Number.isFinite instead',
		}, {
			object: 'window',
			property: 'isFinite',
			message: 'Please use Number.isFinite instead',
		}, {
			object: 'global',
			property: 'isNaN',
			message: 'Please use Number.isNaN instead',
		}, {
			object: 'self',
			property: 'isNaN',
			message: 'Please use Number.isNaN instead',
		}, {
			object: 'window',
			property: 'isNaN',
			message: 'Please use Number.isNaN instead',
		}, {
			property: '__defineGetter__',
			message: 'Please use Object.defineProperty instead.',
		}, {
			property: '__defineSetter__',
			message: 'Please use Object.defineProperty instead.',
		}, {
			object: 'Math',
			property: 'pow',
			message: 'Use the exponentiation operator (**) instead.',
		}],

		// disallow use of assignment in return statement
		// https://eslint.org/docs/rules/no-return-assign
		'no-return-assign': 'error',

		// disallow redundant `return await`
		// https://eslint.org/docs/rules/no-return-await
		'no-return-await': 'error',

		// disallow use of `javascript:` urls.
		// https://eslint.org/docs/rules/no-script-url
		'no-script-url': 'error',

		// disallow self assignment
		// https://eslint.org/docs/rules/no-self-assign
		'no-self-assign': ['error', {
			props: true,
		}],

		// disallow comparisons where both sides are exactly the same
		// https://eslint.org/docs/rules/no-self-compare
		'no-self-compare': 'error',

		// disallow use of comma operator
		// https://eslint.org/docs/rules/no-sequences
		'no-sequences': 'error',

		// restrict what can be thrown as an exception
		// https://eslint.org/docs/rules/no-throw-literal
		'no-throw-literal': 'error',

		// disallow unmodified conditions of loops
		// https://eslint.org/docs/rules/no-unmodified-loop-condition
		'no-unmodified-loop-condition': 'warn',

		// disallow usage of expressions in statement position
		// https://eslint.org/docs/rules/no-unused-expressions
		'no-unused-expressions': ['error', {
			allowShortCircuit: false,
			allowTernary: false,
			allowTaggedTemplates: false,
		}],

		// disallow unused labels
		// https://eslint.org/docs/rules/no-unused-labels
		'no-unused-labels': 'error',

		// disallow unnecessary .call() and .apply()
		// https://eslint.org/docs/rules/no-useless-call
		'no-useless-call': 'warn',

		// Disallow unnecessary catch clauses
		// https://eslint.org/docs/rules/no-useless-catch
		'no-useless-catch': 'error',

		// disallow useless string concatenation
		// https://eslint.org/docs/rules/no-useless-concat
		'no-useless-concat': 'error',

		// disallow unnecessary string escaping
		// https://eslint.org/docs/rules/no-useless-escape
		'no-useless-escape': 'error',

		// disallow redundant return; keywords
		// https://eslint.org/docs/rules/no-useless-return
		'no-useless-return': 'error',

		// disallow use of void operator
		// https://eslint.org/docs/rules/no-void
		'no-void': 'error',

		// disallow use of the with statement
		// https://eslint.org/docs/rules/no-with
		'no-with': 'error',

		// require using Error objects as Promise rejection reasons
		// https://eslint.org/docs/rules/prefer-promise-reject-errors
		'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

		// Suggest using named capture group in regular expression
		// https://eslint.org/docs/rules/prefer-named-capture-group
		'prefer-named-capture-group': 'off',

		// Prefer Object.hasOwn() over Object.prototype.hasOwnProperty.call()
		// https://eslint.org/docs/rules/prefer-object-has-own
		'prefer-object-has-own': 'warn',

		// https://eslint.org/docs/rules/prefer-regex-literals
		'prefer-regex-literals': ['error', {
			disallowRedundantWrapping: true,
		}],

		// require use of the second argument for parseInt()
		// https://eslint.org/docs/rules/radix
		radix: 'error',

		// require `await` in `async function` (note: this is a horrible rule that should never be used)
		// https://eslint.org/docs/rules/require-await
		'require-await': 'off',

		// Enforce the use of u flag on RegExp
		// https://eslint.org/docs/rules/require-unicode-regexp
		'require-unicode-regexp': 'off',

		// requires to declare all vars on top of their containing scope
		// https://eslint.org/docs/rules/vars-on-top
		'vars-on-top': 'error',
	},
};

module.exports = {
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-type-checking',
		// TODO: Enable if your team is proficient in TypeScript
		// 'plugin:@typescript-eslint/strict',
	],
	plugins: ['@typescript-eslint'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: true,
		tsconfigRootDir: __dirname,
	},
	rules: {
		// Enforce naming conventions for everything across a codebase
		// https://typescript-eslint.io/rules/naming-convention/
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'default',
				format: ['camelCase'],
			},
			{
				selector: ['class', 'interface'],
				format: ['PascalCase'],
			},
			{
				selector: 'function',
				format: ['camelCase', 'PascalCase'],
			},
			{
				selector: ['enum', 'enumMember'],
				format: ['UPPER_CASE'],
			},
			{
				selector: 'variable',
				format: 'PascalCase',
				prefix: ['is', 'did', 'has', 'can', 'will', 'should'],
				types: 'boolean',
			},
			{
				selector: 'variable',
				format: 'camelCase',
				suffix: 's',
				types: 'array',
			},
		],
		// Disallow aliasing this
		// https://typescript-eslint.io/rules/no-this-alias/
		'@typescript-eslint/no-this-alias': ['error', { allowDestructuring: true, allowedNames: ['_this'] }],
		// Disallow unnecessary equality comparisons against boolean literals
		// https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare/
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
		// Requires consistently using either T[] or Array<T> for arrays.
		// https://typescript-eslint.io/rules/array-type/
		'@typescript-eslint/array-type': 'warn',
		// Require a specific member delimiter style for interface and type literals
		// https://typescript-eslint.io/rules/member-delimiter-style/
		// TODO: Use 'none' or 'comma' if your project prefers no-semi
		'@typescript-eslint/member-delimiter-style': 'warn',
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			rules: {
				// Typescript prefers const and let instead of var.
				'no-var': 'error',
				'prefer-const': 'error',
				// The spread operator/rest parameters should be preferred in Typescript.
				'prefer-rest-params': 'error',
				'prefer-spread': 'error',

				// Allow duplicate imports for separate type imports
				'no-duplicate-imports': 'off',

				// The following rules are already checked (more thoroughly) by the TypeScript compiler
				// Some of the rules also fail in TypeScript files
				'constructor-super': 'off',
				'getter-return': 'off', // ts(2378)
				'no-const-assign': 'off', // ts(2588)
				'no-dupe-args': 'off', // ts(2300)
				'no-dupe-class-members': 'off',
				'no-dupe-keys': 'off', // ts(1117)
				'no-func-assign': 'off',
				'no-import-assign': 'off',
				'no-new-symbol': 'off', // ts(2588)
				'no-obj-calls': 'off',
				'no-redeclare': 'off',
				'no-setter-return': 'off',
				'no-this-before-super': 'off', // ts(2376)
				'no-undef': 'off', // When strictNullChecks is enabled
				'no-unreachable': 'off', // ts(7027)
				'no-unsafe-negation': 'off',
				'valid-typeof': 'off', // ts(2367)

				// The following rules are recommended to be disabled within TypeScript projects
				'import/named': 'off',
				'import/no-named-as-default-member': 'off',
				'import/no-unresolved': 'off',
			},
		},
	],
};

module.exports = {
	extends: [
		'./rules/best-practices',
		'./rules/errors',
		'./rules/es6',
		'./rules/imports',
		'./rules/node',
		'./rules/strict',
		'./rules/style',
		'./rules/variables',
		'plugin:you-dont-need-lodash-underscore/all', //all rules set to error
	],
	parserOptions: {
		ecmaVersion: 2017,
		sourceType: 'module',
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
		},
	},
	overrides: [
		{
			files: [
				'.eslintrc.js',
				'.stylelintrc.js',
				'karma.conf.js',
				'webpack.config.js',
			],
			env: {
				node: true,
			},
		},
	],
};

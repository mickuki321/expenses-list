module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'xo',
	],
	parser: '@typescript-eslint/parser',
	overrides: [
		{
			extends: [
				'xo-typescript',
			],
			files: [
				'*.ts',
				'*.tsx',
			],
			rules: {
				'react/react-in-jsx-scope': 'off',
				'@typescript-eslint/no-floating-promises': 'off',
				'@typescript-eslint/naming-convention': 'off',
				'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
			},
		},
	],
	parserOptions: {
		tsconfigRootDir: __dirname,
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
		'@typescript-eslint',
	],

	root: true,
};

module.exports = {
	extends: ['eslint:recommended', 'plugin:prettier/recommended'],
	env: {
		es6: true,
		node: true
	},
	rules: {
		'prettier/prettier': 'warn'
	}
}

module.exports = {
	extends: ['eslint:recommended', 'plugin:prettier/recommended'],
	env: {
		es6: true,
		node: true
	}
}

// With TypeScript:
// npm install typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
// https://blog.theodo.com/2019/08/empower-your-dev-environment-with-eslint-prettier-and-editorconfig-with-no-conflicts
/*
module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'plugin:@typescript-eslint/recommended',
		'eslint:recommended',
		'prettier',
		'prettier/@typescript-eslint'
	],
	env: {
		es6: true,
		node: true
	},
	rules: {
		'prettier/prettier': 'error'
	},
	plugins: ['prettier']
}
*/

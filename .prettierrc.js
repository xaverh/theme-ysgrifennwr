module.exports = {
	tabWidth: 2,
	semi: false,
	singleQuote: true,
	useTabs: true,
	printWidth: 100,
	overrides: [
		{
			files: ['*.md', '*.markdown'],
			options: {
				tabWidth: 2,
				useTabs: false
			}
		}
	]
}

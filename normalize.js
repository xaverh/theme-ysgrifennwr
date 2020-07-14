var JSONC = require('jsonc-parser')
var fs = require('fs')

var theme = JSONC.parse(fs.readFileSync('./dump.json', 'utf8'))

var byScope = {}
theme.tokenColors.forEach(element => {
	if (Array.isArray(element.scope)) {
		element.scope.forEach(sc => {
			if (byScope[sc] == null) byScope[sc] = {}
			if (element.settings.foreground != null) byScope[sc].foreground = element.settings.foreground
			if (element.settings.fontStyle != null) byScope[sc].fontStyle = element.settings.fontStyle
		})
	} else {
		if (byScope[element.scope] == null) byScope[element.scope] = {}
		if (element.settings.foreground != null)
			byScope[element.scope].foreground = element.settings.foreground
		if (element.settings.fontStyle != null)
			byScope[element.scope].fontStyle = element.settings.fontStyle
	}
})

var bySettings = {}
bySettings.foreground = {}
bySettings.fontStyle = {}
Object.keys(byScope).forEach(key => {
	if (byScope[key].fontStyle != null) {
		if (!Array.isArray(bySettings.fontStyle[byScope[key].fontStyle]))
			bySettings.fontStyle[byScope[key].fontStyle] = []
		bySettings.fontStyle[byScope[key].fontStyle].push(key)
	}
	if (byScope[key].foreground != null) {
		if (!Array.isArray(bySettings.foreground[byScope[key].foreground]))
			bySettings.foreground[byScope[key].foreground] = []
		bySettings.foreground[byScope[key].foreground].push(key)
	}
})

var normalized = []
Object.keys(bySettings.fontStyle).forEach(key => {
	normalized.push({ scope: bySettings.fontStyle[key], settings: { fontStyle: key } })
})

Object.keys(bySettings.foreground).forEach(key => {
	normalized.push({ scope: bySettings.foreground[key], settings: { foreground: key } })
})

theme.tokenColors = normalized

fs.writeFileSync('./normalized.json', JSON.stringify(theme))

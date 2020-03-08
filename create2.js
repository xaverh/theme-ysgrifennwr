'use strict'

var light = true

if (light) {
	var bg = '#f9f8f4',
		r = '#e32791',
		g = '#488432',
		y = '#a25d0e',
		b = '#2c65b5',
		m = '#b062a7',
		c = '#27bbbe',
		w = '#999999',
		kk = '#b8b8b8',
		rr = '#9f1b66',
		gg = '#325d23',
		yy = '#71410a',
		bb = '#1f477f',
		mm = '#7b4474',
		cc = '#1b8486',
		fg = '#424242',
		cursor = '#553a63',
		selbg = '#add6ff',
		error = '#ed2939',
		warning = '#e9a700',
		info = '#20bbfc',
		uiBlue = '#0f3a4b',
		uiPurple = '#553a63',
		uiOrange = '#964f00'
} else {
	var bg = '#1e1e1e',
		r = '#e32791',
		g = '#30c798',
		y = '#e3c472',
		b = '#6796e6',
		m = '#e59fdf',
		c = '#81d8d0',
		w = '#999999',
		kk = '#515151',
		rr = '#e466ad',
		gg = '#6cd1b2',
		yy = '#e4cf98',
		bb = '#91b0e6',
		mm = '#e5b6e1',
		cc = '#a2dcd7',
		fg = '#e5e6e6',
		cursor = '#20bbfc',
		selbg = '#0f3a4b',
		error = '#ed2939',
		warning = '#e9a700',
		info = '#20bbfc',
		uiBlue = '#0f3a4b',
		uiPurple = '#553a63',
		uiOrange = '#522900'
}

var nn1 = '#111111',
	nn2 = '#222222',
	nn3 = '#333333',
	nn4 = '#444444',
	nn5 = '#555555',
	nn6 = '#666666'

var theme = {
	$schema: 'vscode://schemas/color-theme',
	type: light ? 'light' : 'dark',
	colors: {
		'activityBarBadge.background': uiBlue,
		'editor.background': bg,
		'editor.foreground': fg,
		'editor.selectionHighlightBackground': selbg + (light ? '80' : '26'),
		'activityBar.activeBorder': light ? bg : fg,
		'activityBar.background': light ? '#edece8' : '#333',
		'activityBar.dropBackground': fg + '1f',
		'activityBar.foreground': fg,
		'activityBar.inactiveForeground': fg + '66',
		'activityBarBadge.foreground': fg,
		'badge.foreground': fg,
		'breadcrumb.background': bg,
		'button.background': uiBlue,
		'button.foreground': light ? bg : fg,
		'button.hoverBackground': uiBlue + '20',
		'diffEditor.insertedTextBackground': g + '33',
		'diffEditor.removedTextBackground': g + '33',
		'dropdown.background': bg,
		'dropdown.foreground': fg,
		'editor.findMatchHighlightBackground': uiOrange + '55',
		'editor.focusedStackFrameHighlightBackground': g + '73',
		'editor.foldBackground': selbg + '4d',
		'editor.hoverHighlightBackground': selbg + '26',
		'editor.rangeHighlightBackground': warning + '33',
		'editor.selectionBackground': selbg,
		'editor.symbolHighlightBackground': uiOrange + '55',
		'editor.wordHighlightStrongBackground': uiBlue + (light ? '40' : 'b8'),
		'editorBracketMatch.background': g + '1a',
		'editorCursor.foreground': cursor,
		'editorError.foreground': error,
		'editorGroup.dropBackground': uiBlue + '80',
		'editorGroupHeader.noTabsBackground': bg,
		'editorGroupHeader.tabsBackground': fg + '11',
		'editorGutter.addedBackground': g + '99',
		'editorGutter.background': bg,
		'editorGutter.deletedBackground': r + 99,
		'editorGutter.modifiedBackground': uiPurple,
		'editorInfo.foreground': info,
		'editorLightBulb.foreground': warning,
		'editorLightBulbAutoFix.foreground': uiBlue,
		'editorLineNumber.activeForeground': uiBlue,
		'editorLineNumber.foreground': uiBlue + 'dd',
		'editorLink.activeForeground': b,
		'editorMarkerNavigation.background': bg,
		'editorMarkerNavigationError.background': error,
		'editorMarkerNavigationInfo.background': info,
		'editorMarkerNavigationWarning.background': warning,
		'editorOverviewRuler.addedForeground': g + '99',
		'editorOverviewRuler.currentContentForeground': c + '80',
		'editorOverviewRuler.deletedForeground': r + '99',
		'editorOverviewRuler.errorForeground': error + 'b3',
		'editorOverviewRuler.findMatchForeground': warning + '99',
		'editorOverviewRuler.incomingContentForeground': b + '80',
		'editorOverviewRuler.infoForeground': info + 'bb',
		'editorOverviewRuler.modifiedForeground': uiPurple + '99',
		'editorOverviewRuler.rangeHighlightForeground': uiBlue + '99',
		'editorOverviewRuler.warningForeground': warning,
		'editorPane.background': bg,
		'editorSuggestWidget.foreground': fg,
		'editorSuggestWidget.highlightForeground': info,
		'editorSuggestWidget.selectedBackground': selbg,
		'editorWarning.foreground': warning,
		errorForeground: error,
		'gitDecoration.addedResourceForeground': g,
		'gitDecoration.conflictingResourceForeground': m,
		'gitDecoration.deletedResourceForeground': r,
		'gitDecoration.ignoredResourceForeground': w,
		'gitDecoration.modifiedResourceForeground': y,
		'gitDecoration.submoduleResourceForeground': b,
		'gitDecoration.untrackedResourceForeground': c,
		'icon.foreground': fg,
		'inputOption.activeBackground': uiBlue + '1f',
		'inputOption.activeBorder': uiBlue + '00',
		'inputValidation.errorBackground': error + 'dd',
		'inputValidation.errorBorder': error,
		'inputValidation.infoBackground': info + 'dd',
		'inputValidation.infoBorder': info,
		'inputValidation.warningBackground': warning + 'dd',
		'inputValidation.warningBorder': warning,
		'list.activeSelectionBackground': uiBlue,
		'list.activeSelectionForeground': light ? bg : fg,
		'list.errorForeground': error,
		'list.filterMatchBackground': uiOrange + '55',
		'list.highlightForeground': info,
		'list.invalidItemForeground': r,
		'list.warningForeground': warning,
		'listFilterWidget.noMatchesOutline': error,
		'merge.currentContentBackground': c + '33',
		'merge.currentHeaderBackground': c + '80',
		'merge.incomingContentBackground': b + '33',
		'merge.incomingHeaderBackground': b + '80',
		'minimap.errorHighlight': error + 'b3',
		'minimap.findMatchHighlight': uiOrange,
		'minimap.selectionHighlight': selbg,
		'minimap.warningHighlight': warning,
		'minimapGutter.addedBackground': g + '99',
		'minimapGutter.deletedBackground': r + '99',
		'minimapGutter.modifiedBackground': uiPurple,
		'notificationLink.foreground': b,
		'notificationsErrorIcon.foreground': error,
		'notificationsInfoIcon.foreground': info,
		'notificationsWarningIcon.foreground': warning,
		'panel.background': bg,
		'statusBar.background': uiBlue,
		'statusBar.debuggingBackground': uiOrange,
		'statusBar.debuggingForeground': bg,
		'statusBar.foreground': bg,
		'statusBar.noFolderBackground': uiPurple,
		'statusBar.noFolderForeground': bg,
		'symbolIcon.classForeground': uiOrange,
		'symbolIcon.constructorForeground': uiPurple,
		'symbolIcon.enumeratorForeground': uiOrange,
		'symbolIcon.enumeratorMemberForeground': uiBlue,
		'symbolIcon.eventForeground': uiOrange,
		'symbolIcon.fieldForeground': uiBlue,
		'symbolIcon.functionForeground': uiPurple,
		'symbolIcon.interfaceForeground': uiBlue,
		'symbolIcon.methodForeground': uiPurple,
		'symbolIcon.variableForeground': uiBlue,
		'tab.activeBackground': bg,
		'tab.activeModifiedBorder': uiPurple,
		'tab.inactiveModifiedBorder': uiBlue + '80',
		'tab.unfocusedActiveBackground': bg,
		'tab.unfocusedActiveModifiedBorder': uiBlue + 'b3',
		'tab.unfocusedInactiveModifiedBorder': uiBlue + '40',
		'terminal.ansiBlack': fg,
		'terminal.ansiBlue': b,
		'terminal.ansiBrightBlack': kk,
		'terminal.ansiBrightBlue': bb,
		'terminal.ansiBrightCyan': cc,
		'terminal.ansiBrightGreen': gg,
		'terminal.ansiBrightMagenta': mm,
		'terminal.ansiBrightRed': rr,
		'terminal.ansiBrightWhite': fg,
		'terminal.ansiBrightYellow': yy,
		'terminal.ansiCyan': c,
		'terminal.ansiGreen': g,
		'terminal.ansiMagenta': m,
		'terminal.ansiRed': r,
		'terminal.ansiWhite': w,
		'terminal.ansiYellow': y,
		'terminal.background': bg,
		'terminal.foreground': fg,
		'terminal.selectionBackground': selbg
	},
	tokenColors: [
		{
			scope: ['meta.embedded', 'source.groovy.embedded'],
			settings: {
				foreground: fg
			}
		},
		{
			scope: 'emphasis',
			settings: {
				fontStyle: 'italic'
			}
		},
		{
			scope: 'strong',
			settings: {
				fontStyle: 'bold'
			}
		},
		{
			scope: 'meta.diff.header',
			settings: {
				foreground: bb
			}
		},
		{
			scope: 'comment',
			settings: {
				foreground: w,
				fontStyle: 'italic'
			}
		},
		{
			scope: 'constant.language',
			settings: {
				foreground: b
			}
		},
		{
			scope: [
				'constant.numeric',
				'entity.name.operator.custom-literal.number',
				'variable.other.enummember',
				'keyword.operator.plus.exponent',
				'keyword.operator.minus.exponent'
			],
			settings: {
				foreground: cc
			}
		},
		{
			scope: 'constant.regexp',
			settings: {
				foreground: gg
			}
		},
		{
			scope: 'entity.name.tag',
			settings: {
				foreground: nn2
			}
		},
		{
			scope: 'entity.name.selector',
			settings: {
				foreground: nn2
			}
		},
		{
			scope: 'entity.other.attribute-name',
			settings: {
				foreground: nn4
			}
		},
		{
			scope: [
				'entity.other.attribute-name.class.css',
				'entity.other.attribute-name.class.mixin.css',
				'entity.other.attribute-name.id.css',
				'entity.other.attribute-name.parent-selector.css',
				'entity.other.attribute-name.pseudo-class.css',
				'entity.other.attribute-name.pseudo-element.css',
				'source.css.less entity.other.attribute-name.id',
				'entity.other.attribute-name.attribute.scss',
				'entity.other.attribute-name.scss'
			],
			settings: {
				foreground: nn2
			}
		},
		{
			scope: 'invalid',
			settings: {
				foreground: error
			}
		},
		{
			scope: 'markup.underline',
			settings: {
				fontStyle: 'underline'
			}
		},
		{
			scope: 'markup.bold',
			settings: {
				// "foreground": "bb",
				fontStyle: 'bold'
			}
		},
		{
			scope: 'markup.heading',
			settings: {
				foreground: nn2,
				fontStyle: 'bold'
			}
		},
		{
			scope: 'markup.italic',
			settings: {
				fontStyle: 'italic'
			}
		},
		{
			scope: 'markup.inserted',
			settings: {
				foreground: cc
			}
		},
		{
			scope: 'markup.deleted',
			settings: {
				foreground: kk
			}
		},
		{
			scope: 'markup.changed',
			settings: {
				foreground: nn3
			}
		},
		{
			scope: [
				'punctuation.definition.quote.begin.markdown',
				'punctuation.definition.list.begin.markdown'
			],
			settings: {
				foreground: nn3
			}
		},
		{
			scope: 'markup.inline.raw',
			settings: {
				foreground: nn2
			}
		},
		{
			scope: 'punctuation.definition.tag',
			settings: {
				foreground: nn2
			}
		},
		{
			scope: ['meta.preprocessor', 'entity.name.function.preprocessor'],
			settings: {
				foreground: b
			}
		},
		{
			scope: 'meta.preprocessor.string',
			settings: {
				foreground: g
			}
		},
		{
			scope: 'meta.preprocessor.numeric',
			settings: {
				foreground: cc
			}
		},
		{
			scope: 'meta.structure.dictionary.key.python',
			settings: {
				foreground: nn3
			}
		},
		{
			scope: 'storage',
			settings: {
				foreground: b
			}
		},
		{
			scope: 'storage.type',
			settings: {
				foreground: b
			}
		},
		{
			scope: ['storage.modifier', 'keyword.operator.noexcept'],
			settings: {
				foreground: b
			}
		},
		{
			scope: [
				'string',
				'entity.name.operator.custom-literal.string',
				'meta.embedded.assembly'
			],
			settings: {
				foreground: g
			}
		},
		{
			scope: [
				'string.comment.buffered.block.pug',
				'string.quoted.pug',
				'string.interpolated.pug',
				'string.unquoted.plain.in.yaml',
				'string.unquoted.plain.out.yaml',
				'string.unquoted.block.yaml',
				'string.quoted.single.yaml',
				'string.quoted.double.xml',
				'string.quoted.single.xml',
				'string.unquoted.cdata.xml',
				'string.quoted.double.html',
				'string.quoted.single.html',
				'string.unquoted.html',
				'string.quoted.single.handlebars',
				'string.quoted.double.handlebars'
			],
			settings: {
				foreground: b
			}
		},
		{
			scope: 'string.regexp',
			settings: {
				foreground: gg
			}
		},
		{
			scope: [
				'punctuation.definition.template-expression.begin',
				'punctuation.definition.template-expression.end',
				'punctuation.section.embedded'
			],
			settings: {
				foreground: b
			}
		},
		{
			scope: ['meta.template.expression'],
			settings: {
				foreground: fg
			}
		},
		{
			scope: [
				'support.constant.property-value',
				'support.constant.font-name',
				'support.constant.media-type',
				'support.constant.media',
				'constant.other.color.rgb-value',
				'constant.other.rgb-value',
				'support.constant.color'
			],
			settings: {
				foreground: nn3
			}
		},
		{
			scope: [
				'support.type.vendored.property-name',
				'support.type.property-name',
				'variable.css',
				'variable.scss',
				'variable.other.less',
				'source.coffee.embedded'
			],
			settings: {
				foreground: nn4
			}
		},
		{
			scope: ['support.type.property-name.json'],
			settings: {
				foreground: nn3
			}
		},
		{
			scope: 'keyword',
			settings: {
				foreground: b
			}
		},
		{
			scope: 'keyword.control',
			settings: {
				foreground: b
			}
		},
		{
			scope: 'keyword.operator',
			settings: {
				foreground: nn1
			}
		},
		{
			scope: [
				'keyword.operator.new',
				'keyword.operator.expression',
				'keyword.operator.cast',
				'keyword.operator.sizeof',
				'keyword.operator.alignof',
				'keyword.operator.typeid',
				'keyword.operator.alignas',
				'keyword.operator.instanceof',
				'keyword.operator.logical.python',
				'keyword.operator.wordlike'
			],
			settings: {
				foreground: b
			}
		},
		{
			scope: 'keyword.other.unit',
			settings: {
				foreground: cc
			}
		},
		{
			scope: [
				'punctuation.section.embedded.begin.php',
				'punctuation.section.embedded.end.php'
			],
			settings: {
				foreground: nn2
			}
		},
		{
			scope: 'support.function.git-rebase',
			settings: {
				foreground: nn3
			}
		},
		{
			scope: 'constant.sha.git-rebase',
			settings: {
				foreground: cc
			}
		},
		{
			scope: [
				'storage.modifier.import.java',
				'variable.language.wildcard.java',
				'storage.modifier.package.java'
			],
			settings: {
				foreground: fg
			}
		},
		{
			scope: 'variable.language',
			settings: {
				foreground: b
			}
		},
		{
			scope: [
				'entity.name.function',
				'support.function',
				'support.constant.handlebars',
				'source.powershell variable.other.member',
				'entity.name.operator.custom-literal'
			],
			settings: {
				foreground: y
			}
		},
		{
			scope: [
				'meta.return-type',
				'support.class',
				'support.type',
				'entity.name.type',
				'entity.name.namespace',
				'entity.other.attribute',
				'entity.name.scope-resolution',
				'entity.name.class',
				'storage.type.numeric.go',
				'storage.type.byte.go',
				'storage.type.boolean.go',
				'storage.type.string.go',
				'storage.type.uintptr.go',
				'storage.type.error.go',
				'storage.type.rune.go',
				'storage.type.cs',
				'storage.type.generic.cs',
				'storage.type.modifier.cs',
				'storage.type.variable.cs',
				'storage.type.annotation.java',
				'storage.type.generic.java',
				'storage.type.java',
				'storage.type.object.array.java',
				'storage.type.primitive.array.java',
				'storage.type.primitive.java',
				'storage.type.token.java',
				'storage.type.groovy',
				'storage.type.annotation.groovy',
				'storage.type.parameters.groovy',
				'storage.type.generic.groovy',
				'storage.type.object.array.groovy',
				'storage.type.primitive.array.groovy',
				'storage.type.primitive.groovy'
			],
			settings: {
				foreground: c
			}
		},
		{
			scope: [
				'meta.type.cast.expr',
				'meta.type.new.expr',
				'support.constant.math',
				'support.constant.dom',
				'support.constant.json',
				'entity.other.inherited-class'
			],
			settings: {
				foreground: c
			}
		},
		{
			scope: [
				'keyword.control',
				'source.cpp keyword.operator.new',
				'source.cpp keyword.operator.delete',
				'keyword.other.using',
				'keyword.other.operator',
				'entity.name.operator'
			],
			settings: {
				foreground: r
			}
		},
		{
			scope: [
				'variable',
				'meta.definition.variable.name',
				'support.variable',
				'entity.name.variable'
			],
			settings: {
				foreground: m
			}
		},
		{
			scope: ['meta.object-literal.key'],
			settings: {
				foreground: m
			}
		},
		{
			scope: [
				'support.constant.property-value',
				'support.constant.font-name',
				'support.constant.media-type',
				'support.constant.media',
				'constant.other.color.rgb-value',
				'constant.other.rgb-value',
				'support.constant.color'
			],
			settings: {
				foreground: nn3
			}
		},
		{
			scope: [
				'punctuation.definition.group.regexp',
				'punctuation.definition.group.assertion.regexp',
				'punctuation.definition.character-class.regexp',
				'punctuation.character.set.begin.regexp',
				'punctuation.character.set.end.regexp',
				'keyword.operator.negation.regexp',
				'support.other.parenthesis.regexp'
			],
			settings: {
				foreground: nn5
			}
		},
		{
			scope: [
				'constant.character.character-class.regexp',
				'constant.other.character-class.set.regexp',
				'constant.other.character-class.regexp',
				'constant.character.set.regexp'
			],
			settings: {
				foreground: gg
			}
		},
		{
			scope: 'keyword.operator.quantifier.regexp',
			settings: {
				foreground: nn6
			}
		},
		{
			scope: [
				'keyword.operator.or.regexp',
				'keyword.control.anchor.regexp'
			],
			settings: {
				foreground: nn4
			}
		},
		{
			scope: 'constant.character',
			settings: {
				foreground: b
			}
		},
		{
			scope: 'constant.character.escape',
			settings: {
				foreground: nn4
			}
		},
		{
			scope: 'entity.name.label',
			settings: {
				foreground: fg
			}
		},
		{
			scope: 'token.info-token',
			settings: {
				foreground: info
			}
		},
		{
			scope: 'token.warn-token',
			settings: {
				foreground: warning
			}
		},
		{
			scope: 'token.error-token',
			settings: {
				foreground: error
			}
		},
		{
			scope: 'token.debug-token',
			settings: {
				foreground: uiPurple
			}
		}
	]
}

console.log(JSON.stringify(theme))

const replace = require('replace_in_file')

/*
# cp /opt/visual-studio-code/resources/app/extensions/theme-defaults/themes/dark_defaults.json qillqaq_defaults.json
# cp /opt/visual-studio-code/resources/app/extensions/theme-defaults/themes/dark_plus.json qillqaq.json
# cp /opt/visual-studio-code/resources/app/extensions/theme-defaults/themes/dark_vs.json qillqaq_vs.json
*/

const themeName = 'Qillqaq'
const defaultsName = 'Qillqaq Default Colors'
const baseName = 'Qillqaq Base'
const blueLagoon = '#005577'
const grey10 = '#1E1E1E'
const deepCerise = '#E32791'
const shamrock = '#30C798'
const chenin = '#E3C472'
const cornflowerBlue = '#6796E6'
const plum = '#E59FDF'
const riptide = '#81D8D0'
const grey30 = '#515151'
const grey90 = '#E5E6E6'
const alizarin = '#ED2939'
const mediumAquamarine = '#6CD1B2'
const sinbad = '#A2DCD7'
const frenchLilac = '#E5B6E1'
const doubleColonialWhite = '#E4CF98'
const grey60 = '#969696'
// const goldenBrown = '#AF5E00'
// const scarletGum = '#442059'
// const deepSkyBlue = '#20BBFC'

/* TODO:
    "editorInactiveSelection": "#3A3D41",
    "editorIndentGuides": "#404040",
    "editorSelectionHighlight": "#add6ff26"
    "editorCursor": deepSkyBlue,
    "statusBarBackground": blueLagoon,
    "statusBarDebuggingBackground": goldenBrown,
    "statusBarNoFolderBackground": scarletGum,
    "statusBarForeground": grey90
*/

const options = {
  encoding: 'utf8',
  files: [
    'themes/*.json'
  ],

  from: [/"Dark\+ \(default dark\)"/g, /Dark Default Colors/g, /Dark \(Visual Studio\)/g, /#c586c0/gi, /#569cd6/gi, /#4ec9b0/gi, /#ce9178/gi, /#608b4e/gi, /#d16969/gi, /#dcdcaa/gi, /#f44747/gi, /#000080/g, /#9cdcfe/gi, /#d4d4d4/gi, /#e1e1e1/gi, /#b5cea8/gi, /#646695/g, /#d7ba7d/gi, /#808080/g],
  to: [themeName, defaultsName, baseName, deepCerise, cornflowerBlue, riptide, shamrock, grey30, mediumAquamarine, chenin, alizarin, blueLagoon, plum, grey90, grey10, sinbad, frenchLilac, doubleColonialWhite, grey60]
}

replace(options)
  .then(changedFiles => { console.log('Modified files:', changedFiles.join(', ')) })
  .catch(error => { console.error('Error occurred:', error) })

'use strict'

const replace = require('replace-in-file')

/*
# cp /opt/visual-studio-code/resources/app/extensions/theme-defaults/themes/dark_defaults.json ysgrifennwr_defaults.json
# cp /opt/visual-studio-code/resources/app/extensions/theme-defaults/themes/dark_plus.json ysgrifennwr.json
# cp /opt/visual-studio-code/resources/app/extensions/theme-defaults/themes/dark_vs.json ysgrifennwr_vs.json
*/

const themeName = 'Ysgrifennwr'
const defaultsName = 'Ysgrifennwr Default Colors'
const baseName = 'Ysgrifennwr Base'
const blueLagoon = '#005577'
const floralWhite = '#F9F8F4'
const deepCerise = '#E32791'
const laPalma = '#488432'
const goldenBrown = '#A25D0E'
const ceruleanBlue = '#2C65B5'
const violetBlue = '#B062A7'
const lightSeaGreen = '#27BBBE'
const grey70 = '#B8B8B8'
const grey20 = '#424242'
const alizarin = '#ED2939'
const parsley = '#325D23'
const atoll = '#1B8486'
const rawUmber = '#71410A'
const grey60 = '#999999'
// const scarletGum = '#442059'
// const deepSkyBlue = '#20BBFC'

/* TODO:
  // usually missing
  {
    "settings": {
    "foreground": "#424242",
    "background": "#f9f8f4"
    }
  },

    "editorInactiveSelection": "#3A3D41",
    "editorIndentGuides": "#404040",
    "editorSelectionHighlight": "#add6ff26"
    "editorCursor": deepSkyBlue,
    "statusBarBackground": blueLagoon,
    "statusBarDebuggingBackground": goldenBrown,
    "statusBarNoFolderBackground": scarletGum,
    "statusBarForeground": grey20
*/

const options = {
  encoding: 'utf8',
  files: [
    'themes/*.json'
  ],

  from: [/Light\+ \(default light\)/g, /Light Default Colors/g, /Light \(Visual Studio\)/g, /#af00db/gi, /#0000ff/gi, /#267f99/gi, /#a31515/gi, /#008000/g, /#811f3f/gi, /#795E26/gi, /#cd3131/gi, /#000080/g, /#001080/g, /#000000/g, /#ffffff/gi, /#09885a/gi, /#d7ba7d/gi, /#800000/g],
  to: [themeName, defaultsName, baseName, deepCerise, ceruleanBlue, lightSeaGreen, laPalma, grey70, parsley, goldenBrown, alizarin, blueLagoon, violetBlue, grey20, floralWhite, atoll, rawUmber, grey60]
}

replace(options)
  .then(changedFiles => { console.log('Modified files:', changedFiles.join(', ')) })
  .catch(error => { console.error('Error occurred:', error) })

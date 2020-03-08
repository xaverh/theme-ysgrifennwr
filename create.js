'use strict'

const replace = require('replace-in-file')

const floralWhite = '#f9f8f4'
const deepCerise = '#e32791'
const laPalma = '#488432'
const goldenBrown = '#a25d0e'
const ceruleanBlue = '#2c65b5'
const violetBlue = '#b062a7'
const lightSeaGreen = '#27bbbe'
const grey70 = '#b8b8b8'
const grey60 = '#999999'
const jazzberryJam = '#9f1b66'
const parsley = '#325d23'
const rawUmber = '#71410a'
const bahamaBlue = '#1f477f'
const eminence = '#7b4474'
const atoll = '#1b8486'
const grey20 = '#424242'
const blueLagoon = '#005577'
const paleCornflowerBlue = '#add6ff'
const alizarin = '#ed2939'
const loveSymbolNo2 = '#553a63'
// const scarletGum = '#442059'
// const deepSkyBlue = '#20BBFC'

const options = {
	encoding: 'utf8',
	files: ['themes/*.json'],

	from: [
		/#cd3131/gi,
		/#000080/g,
		/#007acc/g,
		/#ffffff/gi,
		/#d7ba7d/gi,
		/#800000/g,
		/#ff0000/gi
	],
	to: [
		alizarin,
		blueLagoon,
		blueLagoon,
		floralWhite,
		rawUmber,
		bahamaBlue,
		eminence
	]
}

replace(options)
	.then(changedFiles => {
		console.log('Modified files:', changedFiles.join(', '))
	})
	.catch(error => {
		console.error('Error occurred:', error)
	})

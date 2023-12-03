import inputData from '../inputData.js';

const data = inputData.split('\n');

const numbersAsWords = [
	{ word: 'one', nr: 'o1e' },
	{ word: 'two', nr: 't2o' },
	{ word: 'three', nr: 't3e' },
	{ word: 'four', nr: 'f4r' },
	{ word: 'five', nr: 'f5e' },
	{ word: 'six', nr: 's6x' },
	{ word: 'seven', nr: 's7n' },
	{ word: 'eight', nr: 'e8t' },
	{ word: 'nine', nr: 'n9e' },
];

let totalSum = 0;
for (let i = 0; i < data.length; i++) {
	let numbersArr = [];
	for (let l = 0; l < numbersAsWords.length; l++) {
		data[i] = data[i].replaceAll(numbersAsWords[l].word, numbersAsWords[l].nr);
	}

	for (let j = 0; j < data[i].length; j++) {
		if (!isNaN(data[i][j])) numbersArr.push(data[i][j]);
	}
	totalSum += parseInt(numbersArr[0] + numbersArr[numbersArr.length - 1]);
}

console.log(parseInt(totalSum));

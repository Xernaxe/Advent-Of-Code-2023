import inputData from '../inputData.js';

const data = inputData.split('\n');

let sum = 0;

for (let i = 0; i < data.length; i++) {
	let [gameId, gameMatches] = data[i].split(': ');

	// get game id
	gameId = gameId.split(' ')[1];

	// get game matches
	gameMatches = gameMatches.split('; ');

	let gameLimit = {
		red: 0,
		green: 0,
		blue: 0,
	};

	for (let j = 0; j < gameMatches.length; j++) {
		gameMatches[j].split(', ').forEach((card) => {
			let [nr, color] = card.split(' ');

			if (nr >= gameLimit[color]) {
				nr = parseInt(nr);
				gameLimit[color] = nr;
			}
		});
	}

	sum += gameLimit.red * gameLimit.green * gameLimit.blue;
}

console.log(sum);

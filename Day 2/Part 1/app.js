import inputData from '../inputData.js';

const data = inputData.split('\n');

const gameLimit = {
	red: 12,
	green: 13,
	blue: 14,
};

let sum = 0;
for (let i = 0; i < data.length; i++) {
	const [gameId, gameMatches] = data[i].split(': ');
	let isValidGame = true;

	// get game id
	gameId = gameId.split(' ')[1];

	// get game matches
	gameMatches = gameMatches.split('; ');

	for (let j = 0; j < gameMatches.length; j++) {
		gameMatches[j].split(', ').forEach((card) => {
			let [nr, color] = card.split(' ');
			if (nr > gameLimit[color]) {
				isValidGame = false;
			}
		});
	}

	if (isValidGame) sum += parseInt(gameId);

}

console.log(sum);

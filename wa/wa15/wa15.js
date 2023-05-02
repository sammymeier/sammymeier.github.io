var diceValues = [];
var score = 0;

function rollDice() {
	// Clear previous values
	diceValues = [];
	score = 0;

	// Roll dice and store values
	for (var i = 0; i < 5; i++) {
		var value = Math.floor(Math.random() * 6) + 1;
		diceValues.push(value);
	}

	// Sort dice values
	diceValues.sort();

	// Calculate score
	if (diceValues[0] === 1 && diceValues[1] === 2 && diceValues[2] === 3 && diceValues[3] === 4 && diceValues[4] === 5) {
		// Captain, Ship, Crew
		score = 1000;
	} else if (diceValues[0] === diceValues[2] || diceValues[1] === diceValues[3] || diceValues[2] === diceValues[4]) {
		// Three of a kind
		score = diceValues[2] * 100;
	} else if (diceValues[0] === diceValues[3] || diceValues[1] === diceValues[4]) {
		// Four of a kind
		score = diceValues[2] * 1000;
	} else if (diceValues[0] === 1 && diceValues[1] === 1 && diceValues[2] === 1) {
		// Three ones
		score = 1000;
	} else if (diceValues[0] === 6 && diceValues[1] === 6 && diceValues[2] === 6) {
		// Three sixes
		score = 600;
	}

	// Display dice values and score
	var diceValuesText = "Dice values: " + diceValues.join(", ");
	var scoreText = "Score: " + score;
	document.getElementById("dice-values").innerHTML = diceValuesText;
	document.getElementById("score").innerHTML = scoreText;
}

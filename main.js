

var word = require('./word.js');
var letter = require('./letter.js');
var inquirer = require('inquirer');



var playGame = function() {
	word.chancesLeft = 15;
	word.wrongGuess = [];

	inquirer.prompt({
		type: 'input',
		message: 'Wanna Play again? Y/N: ',
		name: 'again'
	}).then(function (answer) {
		if(answer.again.toLowerCase() === 'y' || answer.again.toLowerCase() === 'yes') {
			letter.choseWord();
			word.updateCurrentWord();
			word.displayBlank();
			guessLetter();
		}
		else if(answer.again.toLowerCase() == 'n' || answer.again.toLowerCase() == 'no') {
			console.log('\n       [Leaving game.]\n');
			printinFo();
		}
		else {
			console.log('Please enter a command.');
			playGame();
		}
	});
}

function printInfo() {
	console.log('       Wins: ' + word.wins + '  Losses: ' + word.losses + '\n');
}

var guessLetter = function() {
	if(word.chancesLeft > 0) {
		if(word.currentWord.blank.indexOf('_') !== -1) {
			inquirer.prompt({
				type: 'input',
				message: 'Guess a letter:',
				name: 'guess'
			}).then(function (answer) {
				if(answer.guess.toLowerCase() == 'exit') {
					console.log('\n       [Leaving game.]\n');
					printInfo();
				}
				else if (answer.guess.toLowerCase() == 'new') {
					letter.choseWord();
					word.updateCurrentWord();
					word.chancesLeft = 15;
					word.wrongGuess = [];
					word.displayBlank();
					guessLetter();
				}
				else {
					if(answer.guess.match(word.allowedCharacters)) {
						word.findLetter(answer.guess);
						word.displayBlank();
						guessLetter();
					}
					else {
						console.log('\n       [Aww man! That\'s not a letter! Try again.]\n');
						guessLetter();
					}
				}
			});
		}
		else {
			console.log('       [CORRECT!]\n');
			word.wins++;
			playGame();
		}
	}
	else {
			console.log('       [Unfortunatelely the letter was ' + word.currentWord.word.toUpperCase() + '.]\n');
		word.losses++;
		playGame();
	}
}


// ----------------------------------------------------------------------------------------------
// Run Game
// ----------------------------------------------------------------------------------------------

console.log('                  WELCOME TO THE  HANGMAN GAME');

console.log('INSTRUCTIONS: Hi, guess a animal names. Press a KEY to guess a letter.');
console.log('              Type EXIT at any time to leave game.');
console.log('              Press Y below to get started.');
console.log('              .');
word.displayBlank();

guessLetter();
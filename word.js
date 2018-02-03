
var letter = require('./letter.js');




exports.allowedCharacters = /[a-z]/i;
exports.wrongLetters = [];
exports.guessesLeft = 15;
exports.wins = 0;
exports.losses = 0;




function wordConstructor(word,blank) {
	this.word = word;
	this.blank = blank;
	this.letter = letter;
}

function wrongLettersGuessed() {
	var wrongLettersGuessed = "";
	for (var i = 0; i < exports.wrongLetters.length; i++) {
		wrongLettersGuessed = wrongLettersGuessed + " " + exports.wrongLetters[i].toUpperCase();
	}
	return wrongLettersGuessed;
}

function addLetterToBlank(character) {
	for (var i = 0; i < character.word.length; i++) {
		//If lowercase letter at i is equal to the guessed letter
		if(character.word.charAt(i).toLowerCase() == character.letter.toLowerCase()) {
			//If the letter at i is uppercase, add an uppercase letter
			if (character.word.charAt(i) >= "A" && character.word.charAt(i) <= "Z") {
				character.blank = character.blank.substr(0, i) + character.letter.toUpperCase() + character.blank.substr(i+1);
			}

			//Else add a lowercase letter
			else {
				character.blank = character.blank.substr(0, i) + character.letter + character.blank.substr(i+1);
			}
		}
	}
}

exports.displayBlank = function() {
	var repeatNum = (28 - exports.currentWord.blank.length)/2;
	var repeatNum2 = repeatNum;
	if (exports.currentWord.blank.length % 2 == 1) { repeatNum2 = repeatNum + 1; }

	
	console.log('        |' + ' '.repeat(repeatNum) + exports.currentWord.blank + ' '.repeat(repeatNum2) + '|');
	
	console.log('       ' + wrongLettersGuessed());
	console.log('       Guesses: ' + exports.guessesLeft + '  Wins: ' + exports.wins + '  Losses: ' + exports.losses + '\n');
}

exports.findletter = function(guess) {
	exports.currentWord.letter = guess;

	
	if(guess.length > 1) {
		
	}
	else {
		
		if(exports.currentWord.word.toLowerCase().indexOf(guess) == -1) {

			if (exports.wrongLetters.indexOf(guess) == -1) {
				exports.wrongLetters.push(guess);
				exports.guessesLeft--;
				console.log('\n       this is Letter is not in the word ');
			}
			else {
				console.log('\n       Umm you actually guessed this already');
			}
		}

		
		else {
			findletter(exports.currentWord);
		}
	}
}

exports.updateCurrentWord = function() {
	exports.currentWord = new wordConstructor(letter.chosenWord.word,letter.chosenWord.blank);
}


// ----------------------------------------------------------------------------------------------
// Run Functions
// ----------------------------------------------------------------------------------------------

exports.updateCurrentWord();
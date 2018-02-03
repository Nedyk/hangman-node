//required items

var play = require('./play.js');


//function for blank word

function blankWord(word,underscore) {
	this.word = word;
	this.underscore = underscore;
	this.blank = '';
}
//function for a character to represent the word
function wordRep(character) {
	for (var i = 0; i < character.word.length; i++) {
		if (character.word.charAt(i) == ' ') {
			character.blank = character.blank + '\'';
		}
		else if (character.word.charAt(i) == '\'') {
			character.blank = character.blank + '\'';
		}
		else {
			character.blank = character.blank + character.underscore;
		}
	}
}

//Choose a word
exports.choseWord = function() {
	play.randomWord();
	exports.chosenWord = new blankWord(play.word,'_');
	wordRep(exports.chosenWord);
}


// ----------------------------------------------------------------------------------------------
// Run Functions
// ----------------------------------------------------------------------------------------------

exports.choseWord();
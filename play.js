

var animals =  [
	'rhino', 'hyena', 'lion', 'crocodile', 'hippopotamus', 'elephant', 'chickens', 'Bees', 'giraffe', 'dogs', 'sharks'];



exports.randomWord = function() {
	exports.word = animals[Math.floor(Math.random()*animals.length)];
}
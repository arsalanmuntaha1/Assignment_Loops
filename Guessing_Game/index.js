//-----------------------------------------> ASSIGNMENT OF LOOP <----------------------------------------------------------------------------------------------
//-----------------------------------------> GUESSING GAME <-----------------------------------------------------------------------------------------------
var maxValue = 50;
var randomNum = 33; //Math.floor(Math.random() * maxValue) + 1;
console.log(randomNum);
var trackGuess = false;
var predefineGuesses = [11, 15, 22, 25, 33, 35, 44];
var i = 0;
while (!trackGuess && i < predefineGuesses.length) {
    var currentGuess = predefineGuesses[i];
    console.log("User guess: ".concat(currentGuess));
    i++;
    if (currentGuess === randomNum) {
        console.log("\"Congratulations!\uD83E\uDD73\uD83E\uDD73 You guess the correct number.\"");
        trackGuess = true;
    }
    else if (currentGuess < randomNum) {
        console.log("Your guess is too low\uD83D\uDE14");
    }
    else {
        console.log("Your guess is too high\uD83D\uDE44.");
    }
}

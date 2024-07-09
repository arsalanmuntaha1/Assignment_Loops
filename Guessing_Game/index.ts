//-----------------------------------------> ASSIGNMENT OF LOOP <----------------------------------------------------------------------------------------------

//-----------------------------------------> GUESSING GAME <-----------------------------------------------------------------------------------------------

let maxValue = 50;
let randomNum = 33; //Math.floor(Math.random() * maxValue) + 1;

console.log(randomNum);

let trackGuess = false;
let predefineGuesses = [11, 15, 22, 25, 33, 35, 44];
let i = 0;

while (!trackGuess && i < predefineGuesses.length) {
    let currentGuess = predefineGuesses[i];

    console.log(`User guess: ${currentGuess}`);
    i++;
    
    if (currentGuess === randomNum) {
        console.log(`"Congratulations!🥳🥳 You guess the correct number."`);
        trackGuess = true;
    } else if (currentGuess < randomNum) {
        console.log(`Your guess is too low😔`);
    } else {
        console.log(`Your guess is too high🙄.`);
    }
}

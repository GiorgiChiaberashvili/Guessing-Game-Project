const readline = require('readline');

secretNumber = randomInRange(0, 100);
let numAttempts = 3;

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout

});

function askGuess() {
    if (numAttempts <= 0) {
        console.log("You Lose")
        rl.close()
    } else {
        rl.question('Enter a guess', function (guess) {
            if (checkGuess(guess, secretNumber)) {
                console.log("You Win!")
                rl.close()
            } else {
                numAttempts--;
                askGuess()
            }
        });
    }
}
function checkGuess(number) {
    if (number > secretNumber) {
        console.log("Too High!")
        return false;
    }
    if (number < secretNumber) {
        console.log("Too Low!")
        return false;
    } else {
        console.log("Correct!")
        return true;
    }
}


function randomInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
    // The maximum is exclusive and the minimum is inclusive
}
function askLimit() {
    rl.question("Enter the number of attempts: ", function (attempts) {
        numAttempts = attempts;
        askRange();
    });
}

function askRange() {
    rl.question("Enter a maximum number: ", function (max) {
        rl.question("Enter a minumum number: ", function (min) {
            secretNumber = randomInRange(min, max);
            // askLimit();
            askGuess();
        });
    });
}

askLimit()

const readline = require('readline');

let secretNumber = 7;


const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout

  });

    function askGuess(){
    rl.question('Enter a guess',function (guess){
        if(checkGuess(guess)) {
        console.log("You Win!")
        rl.close()
     } else {
        askGuess();
     }
  });
}

function checkGuess(number){
    if(number > secretNumber){
        console.log("Too High!")
        return false;
    }
        else if(number < secretNumber){
            console.log("Too Low!")
                return false;
            } else {
                (number === secretNumber)
                    console.log("Correct!")
                    return true;
                }
            }

askGuess(8)

# Guessing-Game-Project

It's time for our first non-spec guided project! There are many projects in the course, some of which will not have test cases for you to run. These types of projects will hold your hand less and force you to make design decisions. Instead of specs, you will be provided with text instructions and example snippets to guide you. In order to end up with a working project, you should analyze these instructions closely.

The Objective
Our objective for this project is to build a simple game where the user has to guess a secret number that is chosen at random. Upon making a guess, the user will receive a hint indicating if their guess is too small or too large. Below is an example of how the final product will play. We've denoted the user's input with *asterisks*. All other text is produced by the computer:

Enter a max number: *20*
Enter a min number: *11*
I'm thinking of a number between 11 and 20...
Enter a guess: *15*
Too high.
Enter a guess: *11*
Too low.
Enter a guess: *13*
Too high.
Enter a guess: *12*
Correct!
YOU WON.
We'll be building this project in phases, with each phase bringing us closer to the final product shown above. It's important that you follow the phases closely and don't jump the gun by ignoring the instructions and attempting to create your own game quickly. For these guided projects, the journey is more important than the final destination. Without further ado, let's jump in!

Phase I: Too High? Too Low? Who knows.
Begin by creating a folder called guessing-game-project. Open the folder in VSCode. Inside of that folder create a guessing-game.js file. This is the file where we will do all of the coding.

Begin by initializing a variable in the global scope named secretNumber to any positive integer. Later we will program this variable to be assigned at random, but for now we'll hard-code a value that we can test for quickly.

checkGuess
Define a function named checkGuess that accepts a number as an argument. It should compare that argument against the global secretNumber. It should have the following behavior:

when the argument is larger than secretNumber, it should print 'Too high.' and return false
when the argument is smaller than secretNumber, it should print 'Too low.' and return false
when the argument is equal to secretNumber, it should print 'Correct!' and return true
Let's take a moment to verify that our code is working as intended. Make a few test calls to checkGuess in the global scope. Be sure to use a range of numbers so we can verify that it behaves properly in all three scenarios. You'll want to console.log the return values of checkGuess since it should return booleans. Run your code with node guessing-game.js. When you are positive that your function is working, remove the test calls from your file.

askGuess
Since we will be taking user input during gameplay, we'll need to do some standard setup for Node's readline module. Reference the readline docs to create an interface for input and output that we will use. To stay organized, we recommend that you import the module and create the interface at the tippy top of your file.

Define a function named askGuess. The method should use the readline module's question method to ask the user to 'Enter a guess: '. If you need a refresher on how to use this method, check out the question docs. Once the user enters their number, the checkGuess function should be called with their number as an argument and the interface should be closed.

When accepting user input, there is a very important nuance to take into account. When the user enters their guess it will be interpreted as a string of numeric characters and not an actual number type! Depending on how you wrote your checkGuess function, this could be disastrous because:

console.log(42 === "42"); // false
To overcome this issue, we should explicitly turn their guess into a number before we pass it into checkGuess. You can do this by calling the Number function. Here's an example of Number in action:

let str = "42";
console.log(42 === Number(str)); // true
Test your askGuess by calling it once in the global scope. Then run your program a few times, entering different numbers. After trying a single guess, you will have to run the program again. Be sure to include an attempt with a correct guess by entering the secretNumber value that you hard-coded.

Once you have verified that the user's guess is being properly checked, let's work on having the function ask the user for another guess if they are incorrect. Refactor the askGuess method with some conditional logic. Recall that the checkGuess function returns a boolean - very convenient! Here is how the askGuess function should flow:

check the user's guess
if it is correct, print out 'You win!' and close the interface
if it is incorrect, call askGuess again
You may find it a bit startling that you can reference the askGuess function from within the askGuess function. That is, you can a reference a function from within itself! This self-referential mechanism is leveraged quite frequently in programming. We will return to this concept in later lessons.

Run your program and test it out, being sure that you have a single call to askGuess in the global scope so the game can begin. Woohoo! We now have our minimal viable product (MVP) version of the game.

Before moving onto the next phase, ask a TA for a code review.

Phase II: Making it Random
Now that we have the core gameplay down, we'll want to implement logic to allow the secretNumber to be chosen at random. To do this, we'll utilize the Math#random method. Take a look at the docs. The method returns a decimal number between 0 and 1 (excluding 1). For example:

console.log(Math.random()); // 0.5719957072947224
console.log(Math.random()); // 0.08590173924968769
console.log(Math.random()); // 0.0965770175443883
By itself, this method won't be too useful because our game should only use whole numbers. Luckily, the docs provide some insight into how we can design a function that returns a random whole number that lies within a certain range. Scroll through the docs and locate examples about "Getting a random integer between two values." You'll use these examples to inspire your code. You may notice that the examples provided rely on other methods like Math.floor. Research those methods so that you understand how the code works. Googling around and researching the docs is an important aspect of being a developer, so take your time!

randomInRange
Define a function called randomInRange that accepts a minimum and maximum number as arguments. The function should return a random whole number between the provided minimum and maximum (inclusive). Be sure to test your function, here is an example of how it might behave:

console.log(randomInRange(15, 20)); // 16
console.log(randomInRange(15, 20)); // 17
console.log(randomInRange(15, 20)); // 20
Once you have confirmed that your randomInRange function is returning numbers properly, edit your initialization of secretNumber. Instead of setting it to a hard-coded value, use your function's return value to set it to a random number between 0 and 100. Play a few games! Remember that you'll have to call askGuess() once in the global scope to begin the game. Next up, we'll allow the user to choose the min and max for the game.

askRange
Delete or comment out your global call to askGuess for now. Define a function called askRange. This method should ask the user to enter a minimum number and then ask them to enter a maximum number. We want to ask them for the maximum only after they have responded to the first question. This means you will have to use the question method twice! Recall what you learned from the readings. The question method is asynchronous, so how can we ask two questions one after the other? We'll leave the implementation to you. After the user enters their min and max, you should print a message confirming the range. Here is an example of how our askRange method behaves. We've put asterisks around the user's input:

Enter a max number: *20*
Enter a min number: *11*
I'm thinking of a number between 11 and 20...
As always, test your function thoroughly by adding a call to askRange in global scope. Your program may hang because the interface is not closed after the user enters their max. That's okay, since we are debugging; press ctrl + c in your terminal to kill the program.

Once your function is able to properly take the min and max from your user, it's time to put it all together! When the user enters both the min and the max, call your randomInRange function with that min and max as arguments. Recall that the user's input is automatically interpreted as strings and not numbers. You should explicitly turn the min and max to actual numbers before passing them in. Take the random number returned from your function and set that as the secretNumber. Then call your old askGuess method so that gameplay can begin. All of this should happen within the askRange function. We design it this way because we only want to ask for a guess after the random number has been chosen.

The askRange function is the "main" function that will begin our game, so you'll need call it once in the global scope. Run your program and play a few games!

Before moving onto the bonus ask a TA for a code review.

Bonus: Limiting the number of turns
With our main features complete, let's work on increasing the difficulty of the game by limiting the number of guesses a user can make. If the player uses all of their attempts without guessing the correct number, they will lose the game.

Limiting turns to 5
Start by limiting the player to 5 attempts. You can accomplish this by initializing a numAttempts variable in the global scope. Refactor your askGuess method to decrement the number of remaining attempts whenever it is called. If the numAttempts reaches 0 before the correct guess is made, end the game by printing 'You Lose'. We'll leave the details of the implementation up to you.

Limiting turns dynamically
Make the limit dynamic by allowing the user to specify the number of attempts. We recommend creating an askLimit function that behaves similarly to askRange. Be sure to chain the callbacks in the right order to ensure the game is configured properly. For example, one valid callback chain order would be askLimit -> askRange -> askGuess. If you follow this order, you'll need to call askLimit in the global scope to begin the game.

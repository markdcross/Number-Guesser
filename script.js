let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//* Function called at the beginning of each round to generate the new secret target number
const generateTarget = targetNumber => Math.floor(Math.random() * 10);

//* Function called at the beginning of each round to determine which guess is closest to the target number
const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    const humanDifference = Math.abs(humanGuess-targetNumber)
    const computerDifference = Math.abs(computerGuess-targetNumber) 
    return humanDifference <= computerDifference;
};

//* Increases the winner's score after each round
const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
};

//* Updates the round number
const advanceRound = () => currentRoundNumber++
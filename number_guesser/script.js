let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Generate a random number from 0-9
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (human, computer, target, ) => {
    if ( Math.abs(target-human) < Math.abs(target-computer) || Math.abs(target-human) === Math.abs(target-computer)){
        // console.log(`human:${human}, computer:${computer}, target:${target} YOU WON`)
        return true;
    }else{
        return false;
        // console.log(`human:${human}, computer:${computer}, target:${target} YOU LOST`)
    }
}

const updateScore = (strWinner) => {
    if (strWinner === 'human'){
        humanScore++;
    }else {
        computerScore++;
    }
}

const advanceRound = () => {
    currentRoundNumber++;
}

// compareGuesses(generateTarget(), generateTarget(), generateTarget() );
// compareGuesses(generateTarget(), generateTarget(), generateTarget() );
// compareGuesses(generateTarget(), generateTarget(), generateTarget() );
// compareGuesses(generateTarget(), generateTarget(), generateTarget() );
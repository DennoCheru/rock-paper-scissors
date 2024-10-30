// function to get computer choice
function getComputerChoice() {
    // Generate a random number
    const randomNumber = Math.random() * 10;
    
    // Generate computer choice from random number 
    if (randomNumber < 3.3) {
        return "rock";
    } else if (randomNumber < 6.7) {
        return "paper";
    } else {
        return "scissors"
    }
}

// function to get human choice
function getHumanChoice() {
    // input human choice
    const choice = prompt("Enter your choice:(rock/ paper/ scissors) ")
    return choice.toLowerCase();
}

// function to play game
function playGame() {
    // initialize scores
    let humanScore = 0;
    let computerScore = 0;
    
    // function to play game round
    function playRound(humanChoice, computerChoice) {
        
        if(
            // human win
            (humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'scissors' && computerChoice === 'paper') ||
            (humanChoice === 'paper' && computerChoice === 'rock')
        ) {
            humanScore++;
            return `You win! ${humanChoice} beats ${computerChoice}`;
        } else if (humanChoice === computerChoice) {
            // Tie
            return "It's a tie!";
        } else {
            // computer win
            computerScore++;
            return `You lose! ${computerChoice} beats ${humanChoice}`;
        }
    }
    
    // play 5 times 
    // initialize count
    for (let round = 1; round <= 5; round++) {
        // get human and computer choices
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
    }
    // show winner
    if (computerScore > humanScore) {
        // computer win
        return `Computer Wins ${computerScore} to ${humanScore}!`;
    } else if(humanScore > computerScore) {
        // human win
        return `You win ${humanScore} to ${computerScore}!`;
    } else {
        // Tie
        return `It's a tie! You: ${humanScore} Computer: ${computerScore}`
    }
}
console.log(playGame());



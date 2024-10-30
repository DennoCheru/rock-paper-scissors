function getComputerChoice() {
    const randomNumber = Math.random() * 10;
    if (randomNumber < 3.3) {
        return "rock";
    } else if (randomNumber < 6.7) {
        return "paper";
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    const choice = prompt("Enter your choice:(rock/ paper/ scissors) ")
    return choice.toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {
        
        if(
            (humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'scissors' && computerChoice === 'paper') ||
            (humanChoice === 'paper' && computerChoice === 'rock')
        ) {
            humanScore++;
            return `You win! ${humanChoice} beats ${computerChoice}`;
        } else if (humanChoice === computerChoice) {
            return "It's a tie!";
        } else {
            computerScore++;
            return `You lose! ${computerChoice} beats ${humanChoice}`;
        }
    }
    
    for (let round = 1; round <= 5; round++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
    }

    if (computerScore > humanScore) {
        return `Computer Wins ${computerScore} to ${humanScore}!`;
    } else if(humanScore > computerScore) {
        return `You win ${humanScore} to ${computerScore}!`;
    } else {
        return `It's a tie! You: ${humanScore} Computer: ${computerScore}`
    }
}
console.log(playGame());



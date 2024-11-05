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

    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");
    const result = document.querySelector("#result");
    const compScore = document.querySelector("#compScore");
    const playerScore = document.querySelector("#playerScore");
    const winner = document.querySelector("#winner");
    const resetButton = document.querySelector("#reset")

    rock.addEventListener ('click', () => {
        const outcome = playRound('rock', getComputerChoice());
        result.textContent = outcome;
        updateScore();
        checkWinner();
    });

    paper.addEventListener('click', () => {
        const outcome = playRound('paper', getComputerChoice());
        result.textContent = outcome;
        updateScore();
        checkWinner();
    });

    scissors.addEventListener('click', () => {
        const outcome = playRound ('scissors', getComputerChoice());
        result.textContent = outcome;
        updateScore();
        checkWinner();
    });

    resetButton.addEventListener('click', resetGame);

    function updateScore() {
        playerScore.textContent = humanScore;
        compScore.textContent = computerScore;
    }

    function checkWinner() {
        if (humanScore === 5) {
            winner.textContent = "Congratulations! You won the game."
            disableButtons();
        } else if (computerScore === 5) {
            winner.textContent = "Game over! The computer won.";
            disableButtons();
        }
    }

    function disableButtons() {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }

    function resetGame(){
        humanScore = 0;
        computerScore = 0;
        updateScore();
        result.textContent = '';
        winner.textContent = '';
        rock.disabled = false;
        paper.disabled = false;
        scissors.disabled = false;
    }
}
playGame();
//Score and round system
let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;
let currentScore = (score) => (`You: ${playerScore} | Computer: ${computerScore}`);

//Create list of possible choices and calls function to make computer randomly return one
const choiceList = ["rock", "paper", "scissors"];
let computerSelection;
function getComputerChoice(choiceList) {
    computerSelection = (choiceList[Math.floor(Math.random() * choiceList.length)]).toString();
    return computerSelection;
}

//Declare the winner
function declareWinner(playerScore, computerScore) {
    return playerScore > computerScore ? "You Won The Game! Please refresh to restart the game." : playerScore < computerScore ? "You Lost The Game! Please refresh to restart the game." : "You Tied The Game! Please refresh to restart the game.";
}

//Disable buttons
function disableButtons() {
    choiceButtons.forEach(button => {
        button.disabled = true;
    })
}

//Plays one round where it returns the result of the round
function playRound() {
    getComputerChoice(choiceList);

    if (playerSelection === computerSelection) {
        ++roundNumber;
        return ("It's a tie");
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        ++computerScore;
        ++roundNumber;
        return ("You Lose! Paper beats Rock!");
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        ++computerScore;
        ++roundNumber;
        return ("You Lose! scissors beats Paper!");
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        ++computerScore;
        ++roundNumber;
        return ("You Lose! Rock beats scissors!");
    }
    else {
        ++playerScore;
        ++roundNumber;
        return (`You Win! ${(playerSelection.substr(0, 1)).toUpperCase() + playerSelection.slice(!0)} beats ${(computerSelection.substr(0, 1)).toUpperCase() + computerSelection.slice(!0)}`);
    }
}

//A log results function to change the text content of the results divs
const endResults = document.querySelector('.end-results');
const matchResults = document.querySelector('.match-results');
const matchScore = document.querySelector('.match-score');
function logResults() {
    if (roundNumber < 5) {
        matchResults.textContent = `${playRound()}`;
        matchScore.textContent = `${currentScore()}`;
    }
    else {
    endResults.textContent = `${declareWinner(playerScore, computerScore)}`;
    disableButtons();
    }
}

//When a play choice button (rock, paper or scissors) is pressed, it will set the player selection to the id of the button and return it for the round.
let playerSelection;
const choiceButtons = document.querySelectorAll('.choiceButtons button');
choiceButtons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = (button.id).toString();
        logResults();
        return playerSelection
    });
});



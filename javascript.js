//Create list of possible choices and calls function to make computer randomly return one
const choiceList = ["rock", "paper", "scissors"];
let computerSelection;
function getComputerChoice(choiceList) {
    let computerChoice = choiceList[Math.floor(Math.random() * choiceList.length)];
    computerSelection = (computerChoice).toString();
    return computerSelection;
}


//Calls function to gte users input and then converts to lower case
let playerSelection;
function getPlayerChoice() {
    let choice = prompt("Select 'Rock', 'Paper' or 'Scissors: ");
    let convertedChoice = choice.toLowerCase();
    playerSelection = (convertedChoice).toString();
    return playerSelection;
}


//Score System
let playerScore = 0;
let computerScore = 0;
let currentScore = (score) => console.log(`You: ${playerScore} | Computer: ${computerScore}`);

//Plays one round where it returns the result of the round
function playRound() {
    console.log(getPlayerChoice());
    console.log(getComputerChoice(choiceList));

    if (playerSelection === computerSelection) {
        return ("It's a tie");
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        return ("You Lose! Paper beats Rock!");
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return ("You Lose! scissors beats Paper!");
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return ("You Lose! Rock beats scissors!");
    }
    else {
        return (`You Win! ${(playerSelection.substr(0, 1)).toUpperCase() + playerSelection.slice(!0)} beats ${(computerSelection.substr(0, 1)).toUpperCase() + computerSelection.slice(!0)}`);
    }
}



function game() {
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}: ` + playRound());
        currentScore();
    }
}


game();


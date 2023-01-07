//Create list of possible choices and calls function to make computer randomly return one
const choiceList = ["rock", "paper", "scissors"];
let computerSelection;
function getComputerChoice(choiceList) {
    computerSelection = (choiceList[Math.floor(Math.random() * choiceList.length)]).toString();
    return computerSelection;
}

//Event listeners for each choice
const choiceButtons = document.querySelectorAll('.choiceButtons button');

//Calls function to get users input and then converts to lower case
let playerSelection;
function getPlayerChoice() {
    playerSelection = button.id;
    alert(playerSelection);
    // playerSelection = ((prompt("Select 'Rock', 'Paper' or 'Scissors: ")).toLowerCase()).toString();
    return playerSelection;
}

choiceButtons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
});

//Score System
let playerScore = 0;
let computerScore = 0;
let currentScore = (score) => console.log(`You: ${playerScore} | Computer: ${computerScore}`);

//Declare the winner
function declareWinner(playerScore, computerScore) {
    return playerScore > computerScore ? "You Won The Game!" : playerScore < computerScore ? "You Lost The Game!" : "You Tied The Game!";
}

//Plays one round where it returns the result of the round
function playRound() {
    console.log(getPlayerChoice());
    console.log(getComputerChoice(choiceList));

    if (playerSelection === computerSelection) {
        return ("It's a tie");
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        ++computerScore;
        return ("You Lose! Paper beats Rock!");
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        ++computerScore;
        return ("You Lose! scissors beats Paper!");
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        ++computerScore;
        return ("You Lose! Rock beats scissors!");
    }
    else {
        ++playerScore;
        return (`You Win! ${(playerSelection.substr(0, 1)).toUpperCase() + playerSelection.slice(!0)} beats ${(computerSelection.substr(0, 1)).toUpperCase() + computerSelection.slice(!0)}`);
    }
}


// function game() {
//     for (let i = 0; i < 5; i++) {
//         console.log(`Round ${i + 1}: ` + playRound());
//         currentScore();
//     }
//     console.log(declareWinner(playerScore, computerScore));
// }
// game();


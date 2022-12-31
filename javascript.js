//Calls function to gte users input and then converts to lower case
let playerSelection = (playerChoice) => (prompt("Select 'Rock', 'Paper' or 'Scissors: ")).toLowerCase();

//Create list of possible choices and calls function to make computer randomly return one
const choiceList = ["rock", "paper", "scissors"];
function getComputerChoice(choiceList) {
    return (computerSelection = choiceList[Math.floor(Math.random() * choiceList.length)]);
}
let computerSelection = getComputerChoice;


//Score System
let playerScore = 0;
// let computerScore = 0;
// let currentScore = (score) => console.log(`You: ${playerScore} | Computer: ${computerScore}`);

//Plays one round where it returns the result of the round
function playRound(playerSelection, computerSelection) {
    console.log(playerSelection());
    console.log(getComputerChoice(choiceList));
    switch (playerSelection, computerSelection) {
        case ("rock", "rock"):
            return ("It's a Tie!");
            break;
        case ("rock", "paper"):
            return ("You Lose! Paper beats Rock!");
            computerScore++;
            break;
        case ("rock", "scissors"):
            return ("You Win! Rock beats Scissors!");
            playerScore++;
            break;
        case ("paper", "rock"):
            return("You Win! Paper beats Rock!");
            playerScore++;
            break;
        case ("paper", "paper"):
            return("It's a Tie!");
            break;
        case ("paper", "scissors"):
            return("You Lose! Scissors beats Paper!");
            computerScore++;
            break;
        case ("scissors", "rock"):
            return("You Lose! Rock beats Scissors!");
            computerScore++;
            break;
        case ("scissors", "paper"):
            return("You Win! Scissors beats Paper!");
            playerScore++;
            break;
        case ("scissors", "scissors"):
            return("It's a Tie!");
            break;
        default:
            return("Invalid Input");
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
         console.log(`Round ${i+1}: ` + playRound(playerSelection, computerSelection));
         //currentScore();
     }
 }


game();


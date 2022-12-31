//Calls function to gte users input and then converts to lower case
let playerSelection = (playerChoice) => (prompt("Select 'Rock', 'Paper' or 'Scissors: ")).toLowerCase();
console.log(playerSelection());

//Create list of possible choices and calls function to make computer randomly return one
const choiceList = ["rock", "paper", "scissors"]
let getComputerChoice = (computerChoices) => computerChoices[Math.floor(Math.random() * choiceList.length)];
let computerSelection = getComputerChoice(choiceList);
console.log(computerSelection);

//Plays one round where it returns the result of the round
function playRound(playerSelection, computerSelection) {
    switch (playerSelection, computerSelection) {
        case ("rock", "rock"):
            return ("It's a Tie!");
            break;
        case ("rock", "paper"):
            return ("You Lose! Paper beats Rock!");
            break;
        case ("rock", "scissors"):
            return ("You Win! Rock beats Scissors!");
            break;
        case ("paper", "rock"):
            return("You Win! Paper beats Rock!");
            break;
        case ("paper", "paper"):
            return("It's a Tie!");
            break;
        case ("paper", "scissors"):
            return("You Lose! Scissors beats Paper!");
            break;
        case ("scissors", "rock"):
            return("You Lose! Rock beats Scissors!");
            break;
        case ("scissors", "paper"):
            return("You Win! Scissors beats Paper!");
            break;
        case ("scissors", "scissors"):
            return("It's a Tie!");
            break;
        default:
            return("Invalid Input");
    }
}

console.log(playRound(playerSelection, computerSelection));

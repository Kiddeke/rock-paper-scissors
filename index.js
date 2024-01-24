/** Add function that generates a random computer RPS selection */
function getComputerChoice() {
    /** Add choice variable that is a random decimal between 0 and 1 */
  let choice = Math.random();
  /** Add if then function that chooses rock, paper or scissors depending on the randomly generated number with equal probability */
  if (choice < (1 / 3)) {
    return "rock";
  } else if (choice > (2 / 3)) {
    return "paper";
  } else {
    return "scissors";
  }
}

/** Add functino with a prompt to enter player value that checks against previous function (getComputerChoice) and returns a string that determines the outcome of the game */
function roundLogic(playerSelection, computerSelection) {
    playerSelection = prompt("Rock, Paper or Scissors?","").toLowerCase();
    computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        return "Tie";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors :)";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock :)";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper :)";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose. Paper beats Rock :/";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose. Scissors beats paper :/";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose. Rock beats scissors :/";
    } else {
        return "Please make the correct selection"
    }
}

let playerScore = 0;
let computerScore = 0;
let drawScore = 0;
let roundNumber = 0;
let playerWins = "You Win! Rock beats Scissors :)" || "You Win! Paper beats Rock :)" || "You Win! Scissors beats Paper :)";
let computerWins = "You Lose. Paper beats Rock :/" || "You Lose. Scissors beats paper :/" || "You Lose. Rock beats scissors :/";
let draw = "Tie" || "Please make the correct selection";
let score = "Player Score: " + playerScore + " Computer Score: " + computerScore + " Draw: " + drawScore;


function playGame() {
    let playerWinScore = "Round Number: " + ++roundNumber + " Player Score: " + ++playerScore + " Computer Score: " + computerScore + " Draw: " + drawScore;
let computerWinScore = "Round Number: " + ++roundNumber + " Player Score: " + playerScore + " Computer Score: " + ++computerScore + " Draw: " + drawScore;
let drawWinScore = "Round Number: " + ++roundNumber + " Player Score: " + playerScore + " Computer Score: " + computerScore + " Draw: " + ++drawScore;
    let result = roundLogic();
    if (result === playerWins) {
        return playerWinScore;
    } else if (result === computerWins) {
        return computerWinScore;
    } else {
        return drawWinScore;
    }
}






/** Rock Paper Scissors:
 * Make random function getComputerChoice 1/3 r 1/3 p 1/3 s
 * Make function playRound 
 * make function return 
 */
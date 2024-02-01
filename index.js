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

function playRound() {
    playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        return alert("Tie"),
        console.log("Tie");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return alert("You Win! Rock beats Scissors :)"),
        console.log("You Win! Rock beats Scissors :)"),
        playerScore++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return alert("You Win! Paper beats Rock :)"),
        console.log("You Win! Paper beats Rock :)"),
        playerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return alert("You Win! Scissors beats Paper :)"),
        console.log("You Win! Scissors beats Paper :)"),
        playerScore++;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return alert("You Lose. Paper beats Rock :/"),
        console.log("You Lose. Paper beats Rock :/"),
        computerScore++;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return alert("You Lose. Scissors beats paper :/"),
        console.log("You Lose. Scissors beats paper :/"),
        computerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return alert("You Lose. Rock beats scissors :/"),
        console.log("You Lose. Rock beats scissors :/"),
        computerScore++;
    } else if (playerSelection != "rock" || "paper" || "scissors") {
        return alert("Please make the correct selection"); 
        } else {
            return null;
        }
    }
    
    let playerScore = 0;
    let computerScore = 0;
    let roundNumber = 0; 
    let score = `Player Score = ${playerScore} CPU Score = ${computerScore}`;
    

function playGame() {
    for (roundNumber = 1; roundNumber < 6; roundNumber++) {
    if (roundNumber == 1) { 
        console.log("New Round Start");
    }
    console.log(`Round ${roundNumber} ... Make selection`);
    playRound();
    console.log(`Round ${roundNumber} results
    Computer Score = ${computerScore}
    Player Score = ${playerScore}`);
    if (roundNumber == 5) {
        if (computerScore > playerScore) {
            console.log("Final Result: Loser"),
            document.getElementById("demo").innerHTML = `You Lose! ` + score;
        } else if (playerScore > computerScore) {
             console.log("Final Result: Winner"),
             document.getElementById("demo").innerHTML = `You Win! ` + score; 
        } else {
                 console.log("Final Result: Tie"),
                 document.getElementById("demo").innerHTML = `Tie. ` + score;
            }
        }}}
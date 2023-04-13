function getComputerChoice() {
  let choice = Math.random();
  if (choice < 0.33) {
    return "rock";
  } else if (choice > 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = prompt("rock, paper, or scissors?", "").toLowerCase();
  computerSelection = getComputerChoice();
  if (playerSelection === computerSelection) {
    return alert("TIE!");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return alert("You Lose. Paper beats Rock!");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return alert("You Win. Paper beats Rock!");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return alert("You Win. Rock beats Scissors!");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return alert("You Lose. Rock beats Scissors!");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return alert("You Lose. Scissors beats Paper!");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return alert("You Win. Scissors beats Paper!");
  } else {
    alert("please choose rock, paper or scissors");
  }
}

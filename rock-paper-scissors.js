function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  switch (num) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

let playerSelection = getComputerChoice(); // this will be made into an input
let computerSelection = getComputerChoice();
console.log(playerSelection);
console.log(computerSelection);

// Take input from user
// Compare with computer selection
// if playerSelection is rock and computerSelection is scissors, you win
// if playerSelection is rock and computerSelection is paper, you lose
// if playerSelection and computerSelection are equal, tie
// etc

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win!";
  } else {
    return "Tie";
  }
}

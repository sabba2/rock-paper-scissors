const rock = document.querySelector("button.rock");
const paper = document.querySelector("button.paper");
const scissors = document.querySelector("button.scissors");
const wins = document.querySelector(".wins");
const losses = document.querySelector(".losses");
const winner = document.querySelector(".winner");
const ties = document.querySelector(".ties");
const reset = document.querySelector(".reset");
let winCounter = 0;
let lossCounter = 0;
let tieCounter = 0;

rock.addEventListener("click", () => {
  playRound("rock");
});

paper.addEventListener("click", () => {
  playRound("paper");
});

scissors.addEventListener("click", () => {
  playRound("scissors");
});

reset.addEventListener("click", resetGame);

function playRound(playerSelection) {
  computerSelection = getComputerChoice();
  console.log(`You chose ${playerSelection}`);
  console.log(`Computer chose ${computerSelection}`);

  if (winCounter >= 5 || lossCounter >= 5) return;

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    winCounter += 1;
    wins.textContent = winCounter;
    winner.textContent = `You chose ${playerSelection}. Computer chose ${computerSelection}. You win this round!`;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    lossCounter += 1;
    losses.textContent = lossCounter;
    winner.textContent = `You chose ${playerSelection}. Computer chose ${computerSelection}. You lose this round.`;
  } else {
    console.log("Tie");
    tieCounter += 1;
    ties.textContent = tieCounter;
    winner.textContent = `You chose ${playerSelection}. Computer chose ${computerSelection}. You tied this round.`;
  }
  if (winCounter >= 5) {
    winner.textContent = "You won!";
    return;
  }
  if (lossCounter >= 5) {
    winner.textContent = "Computer won!";
    return;
  }
}

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

function promptUser() {
  let value = prompt("Rock, Paper, Scissors?").toLowerCase();
  while (value != "rock" && value != "paper" && value != "scissors") {
    value = prompt(
      "Please enter a valid choice. Rock, Paper, Scissors?"
    ).toLowerCase();
  }
  return value;
}

function resetGame() {
  wins.textContent = 0;
  winCounter = 0;
  losses.textContent = 0;
  lossCounter = 0;
  ties.textContent = 0;
  tieCounter = 0;
  winner.textContent = "";
}

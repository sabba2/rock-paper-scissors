// Create main game function

// function game() {
//   let playerTally = 0;
//   let computerTally = 0;

//   for (i = 0; i < 5; i++) {
//     let playerSelection = promptUser();
//     console.log(`You chose ${playerSelection}`);

//     let computerSelection = getComputerChoice();
//     console.log(`Computer chose ${computerSelection}`);

//     let result = playRound(playerSelection, computerSelection);

//     if (result === "You win!") {
//       playerTally++;
//       console.log("You win this round");
//     } else if (result === "You lose!") {
//       computerTally++;
//       console.log("You lost this round");
//     } else {
//       console.log("You tied this round.");
//     }
//   }

//   console.log(
//     `----- Score ----- \nPlayer: ${playerTally} Computer: ${computerTally}`
//   );

//   if (playerTally > computerTally) {
//     console.log("You won the game!");
//   } else if (playerTally < computerTally) {
//     console.log("You lost the game!");
//   } else {
//     console.log("You tied the game.");
//   }
// }

const rock = document.querySelector("button.rock");
const paper = document.querySelector("button.paper");
const scissors = document.querySelector("button.scissors");
const wins = document.querySelector(".wins");
const losses = document.querySelector(".losses");
const winner = document.querySelector(".winner");
const ties = document.querySelector(".ties");
let winCounter = 0;
let lossCounter = 0;
let tieCounter = 0;
// need to displayh win/loss counter

rock.addEventListener("click", () => {
  playRound("rock");
});

paper.addEventListener("click", () => {
  playRound("paper");
});

scissors.addEventListener("click", () => {
  playRound("scissors");
});

// Play a round of rock paper scissors

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
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    lossCounter += 1;
    losses.textContent = lossCounter;
  } else {
    console.log("Tie");
    tieCounter += 1;
    ties.textContent = tieCounter;
  }
  if (winCounter >= 5) {
    winner.textContent = "You win!";
    return;
  }
  if (lossCounter >= 5) {
    winner.textContent = "Computer wins!";
    return;
  }
}

// Generate computer choice

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

// create prompt function that only takes rock, paper, scissors as input

function promptUser() {
  let value = prompt("Rock, Paper, Scissors?").toLowerCase();
  while (value != "rock" && value != "paper" && value != "scissors") {
    value = prompt(
      "Please enter a valid choice. Rock, Paper, Scissors?"
    ).toLowerCase();
  }
  return value;
}

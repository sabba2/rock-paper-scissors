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

// Play a round of rock paper scissors

function playRound(playerSelection) {
  computerSelection = getComputerChoice();
  console.log(`You chose ${playerSelection}`);
  console.log(`Computer chose ${computerSelection}`);
  if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You win!");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("You lose");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You win!");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("You lose");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("You lose");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You win!");
  } else {
    console.log("Tie");
    return "cats";
  }
}

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

// create function that only takes rock, paper, scissors as input

function promptUser() {
  let value = prompt("Rock, Paper, Scissors?").toLowerCase();
  while (value != "rock" && value != "paper" && value != "scissors") {
    value = prompt(
      "Please enter a valid choice. Rock, Paper, Scissors?"
    ).toLowerCase();
  }
  return value;
}

const rock = document.querySelector("button.rock");
const paper = document.querySelector("button.paper");
const scissors = document.querySelector("button.scissors");

rock.addEventListener("click", () => {
  playRound("rock");
});

paper.addEventListener("click", () => {
  playRound("paper");
});

scissors.addEventListener("click", () => {
  playRound("scissors");
});

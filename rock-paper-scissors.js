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

// Create main game function

function game() {
  let playerTally = 0;
  let computerTally = 0;

  for (i = 0; i < 5; i++) {
    let playerSelection = promptUser();
    console.log(`You chose ${playerSelection}`);

    let computerSelection = getComputerChoice();
    console.log(`Computer chose ${computerSelection}`);

    let result = playRound(playerSelection, computerSelection);

    if (result === "You win!") {
      playerTally++;
      console.log("You win this round");
    } else if (result === "You lose!") {
      computerTally++;
      console.log("You lost this round");
    } else {
      console.log("You tied this round.");
    }
  }

  console.log(
    `----- Score ----- \nPlayer: ${playerTally} Computer: ${computerTally}`
  );

  if (playerTally > computerTally) {
    console.log("You won the game!");
  } else if (playerTally < computerTally) {
    console.log("You lost the game!");
  } else {
    console.log("You tied the game.");
  }
}

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

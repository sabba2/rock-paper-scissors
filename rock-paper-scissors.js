// Create a function that returns 'Rock', 'Paper', 'Scissors'

// Generate random number between 0-2 and store it in num
// if number is 0, Rock
// if 1, Scissors
// if 2, Paper
// store in choice and return

function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  switch (num) {
    case 0:
      return "Rock";
    case 1:
      return "Scissors";
    case 2:
      return "Paper";
  }
}

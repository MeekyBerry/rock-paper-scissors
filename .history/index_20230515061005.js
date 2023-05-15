const roundStyle = [
  "background-color: blue",
  "color: #f1f1f1",
  "padding: 5px",
  "font-size: 18px",
  "font-weight: bold",
  "border-radius: 5px",
].join(";");

// Function to generate computer play
const computerPlay = () => {
  const words = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * words.length);
  return words[random];
};

// Function to get play from user
const playerInput = () => {
  const input = prompt("Enter 'rock', 'paper', or 'scissors' to play");
  if (input === null) {
    return;
  }
  return input.trim().toLowerCase();
};

// Function to Quit game
const quitGame = () => {
  const quit = prompt("Are you sure you want to quit the game? (y/n)");
  if (quit === "y") {
    alert("Thanks for playing!");
    return true;
  } else if (quit === "n") {
    alert("Great! Let's keep playing!");
    return false;
  } else {
    alert("Please enter 'y' or 'n'");
    return quitGame();
  }
};

// Function to validate player selection
const playerSelection = () => {
  const inputFromPlayer = playerInput();
  if (inputFromPlayer === "") {
    const continueGame = confirm(
      "Selection can't be empty. Press OK to continue the game or Cancel to quit."
    );
    if (continueGame) {
      return playerSelection();
    } else {
      return null;
    }
  } else if (!inputFromPlayer) {
    return null;
  } else if (
    inputFromPlayer === "rock" ||
    inputFromPlayer === "paper" ||
    inputFromPlayer === "scissors"
  ) {
    return inputFromPlayer;
  } else {
    alert(
      `Invalid input: "${inputFromPlayer}". Please enter 'rock', 'paper', or 'scissors'.`
    );
    return playerSelection();
  }
};

// Function to play a round
const playRound = (playerSelection, computerSelection) => {
  let playerValue, computerValue;

  switch (playerSelection) {
    case "paper":
      playerValue = 1;
      break;
    case "rock":
      playerValue = 2;
      break;
    case "scissors":
      playerValue = 3;
      break;
    default:
      return;
  }

  switch (computerSelection) {
    case "paper":
      computerValue = 1;
      break;
    case "rock":
      computerValue = 2;
      break;
    case "scissors":
      computerValue = 3;
      break;
    default:
      return;
  }

  if (playerValue === computerValue) {
    return `It's a tie! You both chose ${playerSelection}.`;
  } else if ((playerValue - computerValue + 3) % 3 === 1) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
};

let playerScore = 0;
let computerScore = 0;
let tie = 0;

// Function to determine winner
const winner = () => {
  let result, color;
  if (playerScore > computerScore) {
    result = "You win!";
    color = "#28a745";
  } else if (playerScore < computerScore) {
    result = "You lose!";
    color = " #dc3545";
  } else {
    result = "It's a tie!";
    color = "#007bff";
  }
  console.log(
    `%cFinal score: %c${result} \n %cPlayer: %c${playerScore} %c| Computer: %c${computerScore} %c| Tie: %c${tie}`,
    "font-size: 14px; font-weight: bold; margin: 5px;",
    `color: ${color}; font-size: 16px; font-weight: bold; margin: 5px;`,
    "font-size: 18px; font-weight: bold;",
    "color: #007bff; font-size: 18px; font-weight: bold;",
    "font-size: 18px; font-weight: bold;",
    "color: #dc3545; font-size: 18px; font-weight: bold;",
    "font-size: 18px; font-weight: bold;",
    "color: #28a745; font-size: 18px; font-weight: bold;"
  );
};

// Function to play the game
const game = () => {
  for (let i = 0; i < 5; i++) {
    const playerInputValue = playerSelection();
    if (playerInputValue === null) {
      if (quitGame()) {
        return;
      } else {
        i--;
      }
    } else {
      console.log(`%cRound ${i + 1}`, roundStyle);
      const result = playRound(playerInputValue, computerPlay());
      console.log("%c" + result, "font-size: 14px; font-weight: bold");
      if (result.includes("win")) {
        playerScore++;
      } else if (result.includes("lose")) {
        computerScore++;
      } else {
        tie++;
      }
    }
  }

  winner();
};

game();

window.onload = function() {
  const welcomeMsg = "Welcome to Rock-Paper-Scissors game!";
  
}

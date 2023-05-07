const computerPlay = () => {
  const words = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * words.length);
  return words[random];
};

const playerInput = prompt("Enter 'rock', 'paper', or 'scissors'");

const quitGame = () => {
  const quit = prompt(
    "Are you sure you want to quit the game? Enter 'yes' or 'no'"
  );
  if (quit === "yes") {
    alert("Thanks for playing!");
    return;
  } else if (quit === "no") {
    alert("Great! Let's keep playing!");
    playerSelection();
  } else {
    alert("Please enter 'yes' or 'no'");
    quitGame();
  }
};

const playerSelection = () => {
  input = playerInput.toLowerCase().trim();
  if (input === "") {
    alert("Selection can't be empty");
    playerSelection();
  } else if (!input) {
    quitGame();
  } else if (
    input !== "rock" &&
    input !== "paper" &&
    input !== "scissors"
  ) {
    alert("Please enter 'rock', 'paper', or 'scissors'");
    // playerSelection();
  } else {
    return input;
  }
};

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
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
};

playRound(playerSelection(), computerPlay());

// const game = () => {
//   let playerScore = 0;
//   let computerScore = 0;
//   let drawScore = 0;

//   for (let i = 0; i < 5; i++) {
//     const player = playerSelection();
//     const computerSelection = computerPlay();
//     const result = playRound(player, computerSelection);
//     console.log(result);
//     if (result.includes("win")) {
//       playerScore++;
//     } else if (result.includes("lose")) {
//       computerScore++;
//     } else if (result.includes("tie")) {
//       drawScore++;
//     }
//   }

//   if (playerScore > computerScore) {
//     console.log(
//       `You win! ${playerScore} to ${computerScore} with ${drawScore} ties`
//     );
//   } else {
//     console.log(
//       `You lose! ${computerScore} to ${playerScore} with ${drawScore} ties`
//     );
//   }
//   return;
// };

// game();

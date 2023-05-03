const computerPlay = () => {
  const options = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * options.length);
  // console.log(options)
  return options[random];
};

const playerSelection = prompt("Rock, Paper or Scissors?");
const computerSelection = computerPlay();

const playRound = (playerSelection, computerSelection) => {
  switch (playerSelection + computerSelection) {
    case "rockscissors":
      return "You win! Rock beats scissors";
      break;
    case "rockpaper":
      return "You lose! Paper beats rock";
      break;
    case "paperrock":
      return "You win! Paper beats rock";
      break;
    case "paperscissors":
      return "You lose! Scissors beats paper";
      break;
    case "scissorspaper":
      return "You win! Scissors beats paper";
      break;
    case "scissorsrock":
      return "You lose! Rock beats scissors";
      break;
    default:
      return "It's a tie!";
  }
};

console.log(playRound(playerSelection, computerSelection));

const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, Paper or Scissors?");
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);
    if (result.includes("win")) {
      playerScore++;
    } else if (result.includes("lose")) {
      computerScore++;
    }
  }
  if (playerScore > computerScore) {
    return `You win ${playerScore} to ${computerScore}`;
  } else {
    return `You lose ${computerScore} to ${playerScore}`;
  }
};

console.log(game());

const totalScore = { playerScore: 0, computerScore: 0 };

// computer choice
const getComputerChoice = () => {
  const rpsChoice = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * rpsChoice.length);
  return rpsChoice[randomNumber];
};

// console.log(getComputerChoice());

// Human Score compare
const getResult = (playerChoice, computerChoice) => {
  let Humanscore;
  // for draw
  if (playerChoice == computerChoice) {
    Humanscore = 0;
    // for win
  } else if (playerChoice == "rock" && computerChoice == "scissors") {
    Humanscore = 1;
  } else if (playerChoice == "scissors" && computerChoice == "paper") {
    Humanscore = 1;
  } else if (playerChoice == "paper" && computerChoice == "rock") {
    Humanscore = 1;
  }
  //   for lose
  else {
    Humanscore = -1;
  }
  return Humanscore;
};

// Computer Score calculating
const computerResult = (playerChoice, computerChoice) => {
  let computerScore;
  // for draw
  if (playerChoice == computerChoice) {
    computerScore = 0;
    // for win
  } else if (playerChoice == "scissors" && computerChoice == "rock") {
    computerScore = 1;
  } else if (playerChoice == "paper" && computerChoice == "scissors") {
    computerScore = 1;
  } else if (playerChoice == "rock" && computerChoice == "paper") {
    computerScore = 1;
  }
  //   for lose
  else {
    computerScore = -1;
  }
  return computerScore;
};

// console.log(getResult("rock", "rock"));

// we can do this also
// rpsButtons.forEach((btn) => {
//   btn.onclick = () => onClickRPS(btn.value);
// });

// function onClickRPS(playerChoice) {
//   console.log({playerChoice});
// const computerChoice = getComputerChoice();
// console.log({ computerChoice });
// score = getResult(playerChoice, computerChoice);
// totalScore["playerScore"] += score;
// console.log(score);
// console.log(totalScore);
// }

// DOM Manipulation
const showResults = (Humanscore, playerChoice, computerChoice) => {
  const resultDiv = document.getElementById("result");
  const handsDiv = document.getElementById("hands");
  const playerScoreDiv = document.getElementById("player-score");
  const computerScoreDiv = document.getElementById("computer-score");
  if (Humanscore == -1) {
    resultDiv.innerText = "You Lose";
  } else if (Humanscore == 0) {
    resultDiv.innerText = "It's a Tie";
  } else {
    resultDiv.innerText = "You Won!";
  }

  handsDiv.innerText = `${playerChoice} Vs. ${computerChoice}  `;
  playerScoreDiv.innerText = `Player Score: ${totalScore["playerScore"]} `;
  computerScoreDiv.innerText = `Computer Score: ${totalScore["computerScore"]} `;
};

// human choice
const rpsButtons = document.querySelectorAll(".rpsButton");
// console.log(rpsButtons);
rpsButtons.forEach((btn) => {
  btn.onclick = () => {
    playerChoice = btn.value;
    console.log({ playerChoice });
    const computerChoice = getComputerChoice();
    console.log({ computerChoice });
    Humanscore = getResult(playerChoice, computerChoice);
    totalScore["playerScore"] += Humanscore;
    computerScore = computerResult(playerChoice, computerChoice);
    totalScore["computerScore"] += computerScore;
    // console.log(score);
    // console.log(totalScore);
    showResults(Humanscore, playerChoice, computerChoice);
  };
});

// Reset Function
const reset = document.getElementById("endGameButton");
reset.onclick = () => endGame(totalScore);
const endGame = (totalScore) => {
  totalScore["computerScore"] = 0;
  totalScore["playerScore"] = 0;
  document.getElementById("result").innerText = "";
  document.getElementById("hands").innerText = "";
  document.getElementById("player-score").innerText = "";
  document.getElementById("computer-score").innerText = "";
};

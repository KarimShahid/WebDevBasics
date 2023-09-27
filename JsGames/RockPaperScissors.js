const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
const userImg = document.getElementById("userPic");
const ib = document.querySelector(".insertBelow");

// const rockbtn = document.getElementById("rock");
// rockbtn.onclick = () => {
//   console.log(rockbtn.innerText);
//   userChoiceDisplay.innerHTML = rockbtn.innerText;
// };

let userChoice;
let computerChoice;
let result;
possibleChoices.forEach((choice) =>
  choice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    // userChoiceDisplay.innerHTML = userChoice;
    console.log({ userChoice: userChoiceDisplay.innerHTML });
    computerChoiceDisplay.innerHTML = generateComputerChoice();
    computerChoice = computerChoiceDisplay.innerHTML;
    console.log({ computerChoice: computerChoice });

    // insert image of rock paper and scissor
    if (userChoice == "rock") {
      userImg.setAttribute("src", "images/rock.webp");
      console.log(userImg);

      // for userImg height and width
      userImg.height = "300";
      userImg.width = "200";
    }
    if (userChoice == "scissors") {
      userImg.setAttribute("src", "images/scissors.jpeg");
      console.log(userImg);

      // for userImg height and width
      userImg.height = "300";
      userImg.width = "200";
    }
    if (userChoice == "paper") {
      userImg.setAttribute("src", "images/paper.jpeg");
      console.log(userImg);

      // for userImg height and width
      userImg.height = "300";
      userImg.width = "200";
    }
    if (computerChoice == "rock") {
      const img = document.createElement("img");
      img.setAttribute("src", "images/rock.webp");
      img.setAttribute("class", "pic");
      img.height = "300";
      img.width = "200";
      ib.appendChild(img);
      console.log(ib);
    } else if (computerChoice == "scissors") {
      const img = document.createElement("img");
      img.setAttribute("src", "images/scissors.jpeg");
      img.setAttribute("class", "pic");
      img.height = "300";
      img.width = "200";
      ib.appendChild(img);
      console.log(ib);
    } else if (computerChoice == "paper") {
      const img = document.createElement("img");
      img.setAttribute("src", "images/paper.jpeg");
      img.setAttribute("class", "pic");
      img.height = "300";
      img.width = "200";
      ib.appendChild(img);
      console.log(ib);
    }

    resultDisplay.innerHTML = getResult();
  })
);

const generateComputerChoice = () => {
  const pcChoices = ["rock", "paper", "scissors"];
  const c = Math.floor(Math.random() * 3);
  //   console.log(pcChoices[c]);
  return pcChoices[c];
};

const getResult = () => {
  if (computerChoice === userChoice) {
    result = "Tie Game";
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    result = "You Lose!";
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    result = "You Lose!";
  } else if (userChoice === "rock" && computerChoice === "paper") {
    result = "You Lose!";
  } else if (userChoice === "rock" && computerChoice == "scissors") {
    result = "You Win!";
  } else if (userChoice === "scissors" && computerChoice == "paper") {
    result = "You Win!";
  } else if (userChoice === "paper" && computerChoice == "rock") {
    result = "You Win!";
  } else {
    result = "error!";
  }
  return result;
};

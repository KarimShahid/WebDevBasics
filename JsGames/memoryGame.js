const cardArray = [
  {
    name: "Amazon",
    img: "images/Amazon.jpeg",
  },
  {
    name: "Clothes",
    img: "images/Clothes.jpg",
  },
  {
    name: "Daraz",
    img: "images/DarazLogo.jpeg",
  },
  {
    name: "Floor Design",
    img: "images/Floor.png",
  },
  {
    name: "Spotify",
    img: "images/spotify.png",
  },
  {
    name: "RMCT",
    img: "images/RMCT.png",
  },
  {
    name: "Amazon",
    img: "images/Amazon.jpeg",
  },
  {
    name: "Clothes",
    img: "images/Clothes.jpg",
  },
  {
    name: "Daraz",
    img: "images/DarazLogo.jpeg",
  },
  {
    name: "Floor Design",
    img: "images/Floor.png",
  },
  {
    name: "Spotify",
    img: "images/spotify.png",
  },
  {
    name: "RMCT",
    img: "images/RMCT.png",
  },
  //   {
  //     name: "Spotify",
  //     img: "images/spotify.png",
  //   },
];
console.log(cardArray);

// for random Array sorting
console.log(cardArray.sort(() => 0.5 - Math.random()));

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");

const createBoard = () => {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/pineapple.jpeg");
    card.setAttribute("data-id", i);
    card.id = "card";
    console.log(card);

    // for card height and width
    card.height = "100";
    card.width = "100";

    // adding eventListner
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
};

// Array of the clicked cards name
let cardsChosen = [];
// Array of the clicked cards ids
let cardsChosenIds = [];
//
const cardsWon = [];

// function to check the cards for a match
const checkMatch = () => {
  const cards = document.querySelectorAll("#grid img");
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];

  console.log(cards);
  console.log("Checking for a match");

  if (optionOneId === optionTwoId) {
    alert("chosen the same image!");
    cards[optionOneId].setAttribute("src", "images/pineapple.jpeg");
    cards[optionTwoId].src = "images/pineapple.jpeg";
    cardsChosen = [];
    cardsChosenIds = [];
    return;
  }

  if (cardsChosen[0] === cardsChosen[1]) {
    alert("you have found a match");
    cards[optionOneId].setAttribute("src", "images/white.webp");
    cards[optionTwoId].setAttribute("src", "images/white.webp");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
    console.log(cardsWon);
  } else {
    cards[optionOneId].setAttribute("src", "images/pineapple.jpeg");
    cards[optionTwoId].src = "images/pineapple.jpeg";
    // cards[optionTwoId].setAttribute("src", "images/pineapple.jpeg");
    alert("Sorry! Try Again");
  }
  resultDisplay.textContent = cardsWon.length;
  cardsChosen = [];
  cardsChosenIds = [];

  if (cardsWon.length == cardArray.length / 2) {
    const winnerDisplay = document.getElementById("winner");
    winnerDisplay.innerHTML = "Congratulations!!!";
  }
};

// to fliip the card
const flipCard = (e) => {
  // this. allows to use the element clicked and get attribute
  const cardId = e.target.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  console.log(cardsChosen);
  console.log(cardsChosenIds);
  console.log("clicked", cardId);
  e.target.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 250);
  }
};

createBoard();

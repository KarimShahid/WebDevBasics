const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.getElementById("time-left");
const score = document.getElementById("score");

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;

const randomSquare = () => {
  squares.forEach((sq) => {
    sq.classList.remove("mole");
    // console.log(sq.id);
  });

  let randomSquare = squares[Math.floor(Math.random() * 9)];
  console.log(randomSquare);
  randomSquare.classList.add("mole");
  hitPosition = randomSquare.id;
};

squares.forEach((sq) => {
  sq.addEventListener("mousedown", () => {
    if (sq.id == hitPosition && currentTime > 0) {
      result++;
      console.log(result);
      score.innerText = result;
      hitPosition = null;
    }
  });
});

const moveMole = () => {
  timerId = setInterval(randomSquare, 500);
};
moveMole();

// Countdown function
const countDown = () => {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime == 0) {
    clearInterval(countDownTimerId);

    clearInterval(timerId);
    alert("GAME OVER!");
  }
};

let countDownTimerId = setInterval(countDown, 1000);

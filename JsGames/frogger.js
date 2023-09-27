const timeLeftDisplay = document.querySelector("#time-left");
const resultDisplay = document.querySelector("#result");
const startPauseBtn = document.querySelector("#start-pause-button");
const squares = document.querySelectorAll(".grid div");
const logLeft = document.querySelectorAll(".log-left");
const logRight = document.querySelectorAll(".log-right");
const carsLeft = document.querySelectorAll(".car-left");
const carsRight = document.querySelectorAll(".car-right");

console.log(squares);
let currentIndex = 76;
const width = 9;
let timerId;
let currentTime = 5;

// Adding a frog using movefrog()
const moveFrog = (e) => {
  squares[currentIndex].classList.remove("frog");

  switch (e.key) {
    case "ArrowLeft":
      if (currentIndex % width !== 0) {
        console.log("moved left");
        currentIndex -= 1;
      }

      break;
    case "ArrowRight":
      if (currentIndex % width < 8) {
        console.log("moved right");
        currentIndex++;
      }

      break;
    case "ArrowUp":
      if (currentIndex > 8) {
        console.log("moved up");
        currentIndex -= width;
      }

      break;
    case "ArrowDown":
      if (currentIndex < 72) {
        console.log("moved down");
        currentIndex += width;
      }
      break;
  }

  squares[currentIndex].classList.add("frog");
  lose();
  win();
};

document.addEventListener("keyup", moveFrog);

// function to move the cars and logs
const autoMoveLogs = () => {
  logLeft.forEach((logL) => moveLogLeft(logL));
  logRight.forEach((logR) => moveLogRight(logR));
  carsLeft.forEach((carL) => moveCarLeft(carL));
  carsRight.forEach((carR) => moveCarRIght(carR));
};

// fucntin
const moveLogLeft = (logL) => {
  switch (true) {
    case logL.classList.contains("l1"):
      logL.classList.remove("l1");
      logL.classList.add("l2");
      break;

    case logL.classList.contains("l2"):
      logL.classList.remove("l2");
      logL.classList.add("l3");
      break;

    case logL.classList.contains("l3"):
      logL.classList.remove("l3");
      logL.classList.add("l4");
      break;

    case logL.classList.contains("l4"):
      logL.classList.remove("l4");
      logL.classList.add("l5");
      break;

    case logL.classList.contains("l5"):
      logL.classList.remove("l5");
      logL.classList.add("l1");
      break;
  }
};

const moveLogRight = (logR) => {
  switch (true) {
    case logR.classList.contains("l1"):
      logR.classList.remove("l1");
      logR.classList.add("l5");
      break;

    case logR.classList.contains("l2"):
      logR.classList.remove("l2");
      logR.classList.add("l1");
      break;

    case logR.classList.contains("l3"):
      logR.classList.remove("l3");
      logR.classList.add("l2");
      break;

    case logR.classList.contains("l4"):
      logR.classList.remove("l4");
      logR.classList.add("l3");
      break;

    case logR.classList.contains("l5"):
      logR.classList.remove("l5");
      logR.classList.add("l4");
      break;
  }
};

const moveCarLeft = (carL) => {
  switch (true) {
    case carL.classList.contains("c1"):
      carL.classList.remove("c1");
      carL.classList.add("c2");
      break;

    case carL.classList.contains("c2"):
      carL.classList.remove("c2");
      carL.classList.add("c3");
      break;

    case carL.classList.contains("c3"):
      carL.classList.remove("c3");
      carL.classList.add("c1");
      break;
  }
};

const moveCarRIght = (carR) => {
  switch (true) {
    case carR.classList.contains("c1"):
      carR.classList.remove("c1");
      carR.classList.add("c3");
      break;

    case carR.classList.contains("c2"):
      carR.classList.remove("c2");
      carR.classList.add("c1");
      break;

    case carR.classList.contains("c3"):
      carR.classList.remove("c3");
      carR.classList.add("c2");
      break;
  }
};

// rules
const lose = () => {
  if (
    squares[currentIndex].classList.contains("c1") ||
    squares[currentIndex].classList.contains("l4") ||
    squares[currentIndex].classList.contains("l5")
  ) {
    resultDisplay.innerHTML = "lose";
    clearInterval(timerId);
    document.removeEventListener("keyup", moveFrog);
  }
};

const win = () => {
  if (squares[currentIndex].classList.contains("ending-block")) {
    resultDisplay.innerHTML = "Winner";
    clearInterval(timerId);
    document.removeEventListener("keyup", moveFrog);
  }
};

// setting stopclock (timer)
const timeLimit = () => {
  currentTime--;
  timeLeftDisplay.textContent = currentTime;

  if (currentTime == 0) {
    clearInterval(countDownTimerId);

    clearInterval(timerId);
    alert("GAME OVER!");
  }
};

startPauseBtn.addEventListener("click", () => {
  if (timerId) {
    clearInterval(timerId);
  } else {
    timerId = setInterval(autoMoveLogs, 1000);
    countDownTimerId = setInterval(timeLimit, 1000);
  }
});

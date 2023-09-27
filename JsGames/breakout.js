const grid = document.querySelector(".grid");
const scoreDisplay = document.querySelector("#score");
const resultDisplay = document.querySelector(".result");
const restart = document.createElement("button");

const blockWidth = 100;
const blockHeight = 20;
const borderWidth = 560;
const borderHeight = 300;

let score = 0;

// user position
const userStart = [230, 10];
let currentPosition = userStart;

// ball position
const ballStart = [270, 30];
let ballCurrentPosition = ballStart;
const ballDiameter = 20;

// for ball movement
let timerId;
let xDirection = 2;
let yDirection = 2;

// create individual blocks
class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + blockWidth, yAxis];
    this.topLeft = [xAxis, yAxis + blockHeight];
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
  }
}
// all my blocks
const blocks = [
  new Block(10, 270),
  new Block(120, 270),
  new Block(230, 270),
  new Block(340, 270),
  new Block(450, 270),
  new Block(10, 240),
  new Block(120, 240),
  new Block(230, 240),
  new Block(340, 240),
  new Block(450, 240),
  new Block(10, 210),
  new Block(120, 210),
  new Block(230, 210),
  new Block(340, 210),
  new Block(450, 210),
];

console.log(blocks[0]);
// draw all my blocks function
const addBlocks = () => {
  for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.left = blocks[i].bottomLeft[0] + "px";
    block.style.bottom = blocks[i].bottomLeft[1] + "px";
    grid.appendChild(block);
  }
};
addBlocks();

// draw the user
const drawUser = () => {
  user.style.left = currentPosition[0] + "px";
  user.style.bottom = currentPosition[1] + "px";
};

// draw ball
const drawBall = () => {
  ball.style.left = ballCurrentPosition[0] + "px";
  ball.style.bottom = ballCurrentPosition[1] + "px";
};

// add user
const user = document.createElement("div");
user.classList.add("user");
drawUser();
grid.appendChild(user);

// move user function
const moveUser = (e) => {
  switch (e.key) {
    case "ArrowLeft":
      if (currentPosition[0] > 0) {
        currentPosition[0] -= 10;
        drawUser();
      }
      break;

    case "ArrowRight":
      if (currentPosition[0] < borderWidth - blockWidth) {
        currentPosition[0] += 10;
        drawUser();
      }
      break;
  }
};

document.addEventListener("keydown", moveUser);

// add a ball
const ball = document.createElement("div");
ball.classList.add("ball");
ball.style.left = ballCurrentPosition[0] + "px";
ball.style.bottom = ballCurrentPosition[1] + "px";
grid.appendChild(ball);

// move the ball
const moveBall = () => {
  ballCurrentPosition[0] += xDirection;
  ballCurrentPosition[1] += yDirection;
  drawBall(); //moveing the ball acc. to the ballCurrentPosition
  checkForCollisions();
};

timerId = setInterval(moveBall, 20);

// chnage direction of teh ball if collisions happen
const checkForCollisions = () => {
  // check for block collision
  for (let i = 0; i < blocks.length; i++) {
    if (
      ballCurrentPosition[0] > blocks[i].bottomLeft[0] &&
      ballCurrentPosition[0] < blocks[i].bottomRight[0] &&
      ballCurrentPosition[1] + ballDiameter > blocks[i].bottomLeft[1] &&
      ballCurrentPosition[1] < blocks[i].topLeft[1]
    ) {
      const allBlocks = Array.from(document.querySelectorAll(".block"));
      console.log(allBlocks);
      allBlocks[i].classList.remove("block");
      blocks.splice(i, 1);
      changeDirection();
      score++;
      soundEffects("hit");
      scoreDisplay.innerHTML = score;

      // check for win
      if (blocks.length === 0) {
        resultDisplay.innerHTML = "Winner! 🏆";
        soundEffects("win");
        clearInterval(timerId);
        document.removeEventListener("keydown", moveUser);
        restartGame();
      }
    }
  }

  // check for wall collisions
  if (
    ballCurrentPosition[0] >= borderWidth - ballDiameter ||
    ballCurrentPosition[1] >= borderHeight - ballDiameter ||
    ballCurrentPosition[0] <= 0
  ) {
    // change direction
    changeDirection();
  }

  // check for game over
  if (ballCurrentPosition[1] <= 0) {
    clearInterval(timerId);
    document.removeEventListener("keydown", moveUser);
    resultDisplay.innerHTML = "You Lose! 😞";
    soundEffects("lose");
    restartGame();
  }

  // check for user collision
  if (
    ballCurrentPosition[0] > currentPosition[0] &&
    ballCurrentPosition[0] < currentPosition[0] + blockWidth &&
    ballCurrentPosition[1] > currentPosition[1] &&
    ballCurrentPosition[1] < currentPosition[1] + blockHeight
  ) {
    changeDirection();
  }
};

// chnaging the direction function
const changeDirection = () => {
  // starting point to the top and bounce to the right
  if (xDirection === 2 && yDirection === 2) {
    yDirection = -2;
    return;
  }
  // from the right to bottom left
  if (xDirection === 2 && yDirection === -2) {
    xDirection = -2;
    return;
  }
  // for bottom wall
  if (xDirection === -2 && yDirection === -2) {
    yDirection = 2;
    return;
  }
  // for left wall
  if (xDirection === -2 && yDirection === 2) {
    xDirection = 2;
    return;
  }
};

// Audio effects
const soundEffects = (sound) => {
  document.getElementById(sound).play();
  document.getElementById(sound).currentTime = 0;
};

// to restart the game
const restartGame = () => {
  // creating the button
  restart.classList.add("restartBtn");
  restart.id = "btn";
  grid.appendChild(restart);
  const rstBtn = document.getElementById("btn");
  rstBtn.innerHTML = "Play Again!";

  // Restarting the game
  rstBtn.onclick = () => {
    window.location.reload();
  };
};

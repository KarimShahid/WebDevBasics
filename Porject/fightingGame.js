let p1NameDiv = document.getElementById("p1Name");
let p2NameDiv = document.getElementById("p2Name");
let playBtn = document.getElementById("play");
let resultDiv = document.getElementById("result");
let p1HealthDiv = document.getElementById("p1Health");
let p2HealthDiv = document.getElementById("p2Health");

// Player Class
class Player {
  constructor(name, health, attackDamage) {
    this.name = name;
    this.health = health;
    this.attackDmg = attackDamage;
  }

  //   Method to strike
  strike(player, enemy, attackDmg) {
    let damageAmount = Math.ceil(Math.random() * attackDmg);
    // this.attackDamage = damageAmount;
    console.log(damageAmount);
    enemy.health -= damageAmount;
    console.log(enemy.health);
    updateGame(p1, p2, game.isOver);
    document.getElementById("p1attack").play();
    document.getElementById("p1attack").currentTime = 0;
    return `${player.name} attacks ${enemy.name} for ${damageAmount} HP`;
  }

  //   Method to heal
  heal(player) {
    let healthAmount = Math.ceil(Math.random() * 5);
    console.log(healthAmount);
    player.health += healthAmount;
    console.log(player.health);
    updateGame(p1, p2, game.isOver);
    document.getElementById("p1heal").play();
    document.getElementById("p1heal").currentTime = 0;
    return `${player.name} heals for ${healthAmount} HP!`;
  }
}

// Game CLass
class Game {
  constructor() {
    this.isOver = false;
  }

  //   Method
  declareWinner(isOver, p1, p2) {
    let message;

    if (isOver == true && p1.health <= 0) {
      message = ` ${p2.name} WINS! `;
    } else if (isOver == true && p2.health <= 0) {
      message = ` ${p1.name} WINS! `;
    }
    document.getElementById("victory").play();
    return message;
  }

  reset(p1, p2) {
    p1.health = 100;
    p2.health = 100;
    this.isOver = false;
    resultDiv.innerText = "";
    updateGame(p1, p2, this.isOver);
  }

  play(p1, p2) {
    this.reset(p1, p2);
    // console.log(!this.isOver);
    while (!this.isOver) {
      p1.strike(p1, p2, p1.attackDmg);
      p2.heal(p2);
      p2.strike(p2, p1, p2.attackDmg);
      p1.heal(p1);
    }
    return this.declareWinner(game.isOver, p1, p2);
  }
}

playBtn.onclick = () => {
  resultDiv.innerText = game.play(p1, p2);
};

const updateGame = (p1, p2, gameState) => {
  p1NameDiv.innerText = p1.name;
  p2NameDiv.innerText = p2.name;
  p1HealthDiv.innerText = p1.health;
  p2HealthDiv.innerText = p2.health;
  if (p1.health <= 0 || p2.health <= 0) {
    game.isOver = true;
    gameState = game.isOver;
    // gameState = !gameState;
    console.log(gameState);
    // return (gameState = true);
    resultDiv.innerText = game.declareWinner(game.isOver, p1, p2);
    return gameState;
  }
};

let p1 = new Player("Qazi", 100, 10);
// console.log(player1.name);
let p2 = new Player("Lance", 100, 10);

let game = new Game();
// console.log(updateGame(p1, p2, game.isOver));
// updateGame(p1, p2, game.isOver);
console.log();

// Player Controls
// p1 attack
document.addEventListener("keydown", function (e) {
  if (e.key.toUpperCase() == "Q" && p2.health > 0 && game.isOver == false) {
    p1.strike(p1, p2, p1.attackDmg);
  }
});

// p1 heal
document.addEventListener("keydown", function (e) {
  if (
    e.key.toUpperCase() == "A" &&
    p1.health > 0 &&
    p1.health < 100 &&
    game.isOver == false
  ) {
    p1.heal(p1);
  }
});

// p2 attack
document.addEventListener("keydown", function (e) {
  if (e.key.toUpperCase() == "P" && p1.health > 0 && game.isOver == false) {
    p2.strike(p2, p1, p2.attackDmg);
  }
});

document.addEventListener("keydown", function (e) {
  if (
    e.key.toUpperCase() == "L" &&
    p2.health > 0 &&
    p2.health < 100 &&
    game.isOver == false
  ) {
    p1.heal(p2);
  }
});

// p1.strike(p1, p2, p1.attackDmg);
// console.log(p1.strike(p1, p2, 10));
// p1.strike();
// p2.strike();
// console.log(p2.attackDmg);

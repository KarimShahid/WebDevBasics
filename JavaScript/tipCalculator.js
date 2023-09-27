const billInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const numberOfPeoplediv = document.getElementById("numberOfPeople");
const perPersonTotal = document.getElementById("perPersonTotal");

// Get number of people from number of people div
let number = Number(numberOfPeoplediv.innerText);
console.log(number);

// calculate the total bill per person
const calculateBill = () => {
  //   console.log(number);

  //   get bill from users and convert into number
  const bill = Number(billInput.value);

  // get tip and convert into %
  const tip = Number(tipInput.value / 100);

  //   get tipamount
  const tipAmount = bill * tip;
  //   console.log({ tipAmount });

  // total
  const total = tipAmount + bill;
  //   perPersonTotal.innerText = bill + (bill * tip) / number;

  //   calculating per person total
  const perTotal = total / number;
  //   console.log(perTotal);

  perPersonTotal.innerText = `$ ${perTotal.toLocaleString("en-US")}`;
};

// INcrease the people function
const increasePeople = () => {
  number += 1;
  numberOfPeoplediv.innerText = number;

  //   calculate the bill based on the new number of people
  calculateBill();
};

// Decrease the people function
const decreasePeople = () => {
  if (numberOfPeoplediv.innerText <= 1) {
    console.log("It cannot go below 1");
    alert("Hey! You need to pay!");
    throw "heyy! error!";
    return;
  }
  number -= 1;
  numberOfPeoplediv.innerText = number;

  calculateBill();
};

// Clearing all the input
const clears = () => {
  billInput.value = "";
  tipInput.value = "";
  numberOfPeoplediv.innerText = 1;
  perPersonTotal.innerText = "$0.00";
};

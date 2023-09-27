const img_array = ["Amazon.jpeg", "pineapple.jpeg", "Clothes.jpg", "RMCT.png"];
const array_length = img_array.length;
let i = 0;
let j = array_length;
let set = setInterval(() => {
  i++;
  i = i % array_length;
  //   i=0%5=0
  //   i=1%5=1
  //   i=2%5=2
  //   i=3%5=3
  //   i=4%5=4
  //   i=5%5=0
  document.querySelector("img").src = `/images/${img_array[i]}`;
}, 4000); //4000 is millisecond

// const num = () => {
//   i++;
//   i = i % array_length;
//   document.querySelector("img").src = `/images/${img_array[i]}`;
// };
// let set = setInterval(num, 4000); //4000 is millisecond

const img = document.getElementById("images");

const next = () => {
  i++;
  i = i % array_length;
  img.src = `/images/${img_array[i]}`;
};

const previous = () => {
  i--;
  if (i < 0) {
    i = array_length - 1;
  }
  i = i % array_length;
  img.src = `/images/${img_array[i]}`;
};

const stops = () => {
  clearInterval(set);
};

const starts = () => {
  set = setInterval(() => {
    i++;
    i = i % array_length;
    document.querySelector("img").src = `/images/${img_array[i]}`;
  }, 4000);
};

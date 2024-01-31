let boxes = document.querySelectorAll(".col");
let h1 = document.querySelector("h1");
let btn = document.querySelector(".btn");
let body = document.querySelector(".container");
let line = document.querySelector(".line");
const time = document.querySelector(".time");

let win = [
  [0, 1, 2, -7.2, 0, 90],
  [0, 3, 6, -7.18, 0, 0],
  [0, 4, 8, 0, 0, -45],
  [1, 4, 7, 0, 0, 0],
  [2, 5, 8, 7.07, 0, 0],
  [2, 4, 6, 0, 0, 45],
  [3, 4, 5, 0, 0, 90],
  [6, 7, 8, 7.2, 0, 90],
];

//x turn = true
let turn = true;

btn.addEventListener("click", () => {
  location.reload();
});

boxes.forEach((item) => {
  item.addEventListener("click", () => {
    if (turn) {
      item.innerText = "X";
      h1.innerText = "O's turn";
      item.style.color = "#fff";
    } else {
      item.innerText = "O";
      item.style.color = "#fff";
      h1.innerText = "X's turn";
    }
    turn = !turn;
    item.classList.add("not-active");
    checkWinner();
  });
});
const checkWinner = () => {
  for (let pattern of win) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if (pos1 !== "" && (pos2 !== "") & (pos3 !== "")) {
      if (pos1 === pos2 && pos2 === pos3) {
        h1.innerText = `Hurray ${pos1} Win`;
        boxes.forEach((box) => {
          box.classList.add("not-active");
        });

        let x = pattern[3],
          y = pattern[4],
          z = pattern[5];
        line.style.transform = `rotate(${z}deg) translate(${x}rem, ${y}rem) `;
        line.style.height = "90%";
        setInterval(() => {
          h1.innerText = "";
          body.innerHTML = `<h2>${pos1}</h2><p>WINNER!</p>`;
        }, 2000);
      }
    }
  }
};
setInterval(() => {
  let date = new Date();
  let timing = "PM";
  let hour = date.getHours();
  if (hour < 10) hour = "0" + hour;
  if (hour < 12) timing = "AM";
  let minit = date.getMinutes();
  if (minit < 10) minit = "0" + minit;
  let secs = date.getSeconds();
  if (secs < 10) secs = "0" + secs;
  let currentTime = hour + ":" + minit + ":" + secs + " " + timing;
  time.innerText = currentTime;
}, 1000);

const timeInt = 250;
const timeDelay = 2000;
const color1 = 'royalblue'; // #51AFE2
const color2 = 'lightsteelblue'; // #19759C
let intID;

function getRandomCell () {
  const min = Math.ceil(1);
  const max = Math.floor(25);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeClass (c) {
  let timeOutID = setTimeout(changeToAwake, timeDelay);

  function changeToAwake () {
    c.className = "awake";
    clearTimeout(timeOutID);
  }
}

function changeColor () {
  intID = setInterval(changeColor, timeInt);
  const cell = document.getElementById(getRandomCell());

  if (cell.className == "awake") {
    cell.style.backgroundColor = cell.style.backgroundColor == color1 ? color2 : color1;
    cell.className = "asleep";
    changeClass(cell);
  }
}

function stopInterval () {
  clearInterval(intID);
}

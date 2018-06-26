/*
 Every 250 milliseconds, one of the eligible squares should be randomly selected to change colors.
 Squares are eligible for a color change if its color has not changed in the last two seconds.
*/
const timeInt = 250;
const timeDelay = 300;
const color1 = 'mediumvioletred';
const color2 = 'teal';
let intID;

function getRandomCell () {
  const min = Math.ceil(1);
  const max = Math.floor(16);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeClass (c) {
  // set timer to wait 2 seconds before changing class to "eligible"
  // change class to "eligible"?
  console.log(c);
  let timeOutID = setTimeout(changeBack, timeDelay);

  function changeBack () {
    if (c.className == "ineligible") {
      c.className = "eligible";
      clearInterval(timeOutID);
    }
      // c.className = "ineligible";
      console.log("classname inside setTimeout: " +c.className);
  }

  // clearInterval(timeOutID);
}

function changeBkgColor () {
  const cell = document.getElementById(getRandomCell());

  if (cell.className == "eligible") {

    cell.style.backgroundColor = cell.style.backgroundColor == color1 ? color2 : color1;
    cell.className = "ineligible";

    console.log("className inside if: " +cell.className);
  }
  changeClass(cell);
  console.log("className outside: " +cell.className);
}

function changeColor () {
  intID = setInterval(changeBkgColor, timeInt);
}

function stopInterval () {
  clearInterval(intID);
}


function move() {
  var elem = document.getElementById("moveBar");
  var width = 0;
  var idVar = setInterval(change, 10);

  function change() {
    if (width == 100){
       clearInterval(idVar)
    }
    else {
       width++;
       elem.style.width = width + '%';
    }
  }
}

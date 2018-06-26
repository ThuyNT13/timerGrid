/*
 Every 250 milliseconds, one of the eligible squares should be randomly selected to change colors.
 Squares are eligible for a color change if its color has not changed in the last two seconds.
*/
const timeInt = 250;
const timeDelay = 2000;
const color1 = 'mediumvioletred';
const color2 = 'teal';
let intID;

function getRandomCell() {
  const min = Math.ceil(1);
  const max = Math.floor(16);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeClass(c) {
  c.className = "ineligible";
  console.log("classname inside setTimeout: " +c.className);
}

function changeBkgColor() {
  const cell = document.getElementById(getRandomCell());

  if (cell.className == "eligible") {

    cell.style.backgroundColor = cell.style.backgroundColor == color1 ? color2 : color1;

    // set timer to wait 2 seconds before changing class to "eligible"
    // change class to "eligible"?
    // let timeOutID = setTimeout(function() {
      changeClass(cell);
    // }, timeDelay);

    console.log("className inside if: " +cell.className);

    // clearInterval(timeOutID);


  }
  console.log("className outside: " +cell.className);
}

function changeColor() {
  intID = setInterval(changeBkgColor, timeInt);
}

function stopInterval() {
  clearInterval(intID);
}

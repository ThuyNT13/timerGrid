/*
Please create a web page that has a 4x4 grid, with a border around it. The grid should be horizontally centered in the web page. Every 250 milliseconds, one of the eligible squares should be randomly selected to change colors. Squares are eligible for a color change if its color has not changed in the last two seconds.

Feel free to conduct research on the web, but do not ask anyone for help. Also, do not use any libraries (e.g. jQuery) or any publishing software such as Microsoft Word. If you’re unable to create this page (even after consulting the web), this role probably won’t be a good fit. We encourage you to spend some time to verify the logic in your solution.

[x] - 4 x 4 grid
  [x] - border
  [x] - centered, horizontally
[x] - change background color for cell
  [x] - setInterval timer cycle for 250 ms
  [x] - randomize cell
  [x] - set className to "ineligible"
    [x] - setTimeout timer cycle for 2000ms
[x] - change className back to "eligible"
  [x] - clearTimeout

[x] = adjust height for cells to be more responsive
*/
const timeInt = 250;
const timeDelay = 2000;
const color1 = 'royalblue'; // #51AFE2 iceberg mediumvioletred
const color2 = 'lightsteelblue'; // #19759C teal
let intID;

function getRandomCell () {
  const min = Math.ceil(1);
  const max = Math.floor(16);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeClass (c) {
  let timeOutID = setTimeout(changeBack, timeDelay);

  function changeBack () {
    if (c.className == "ineligible") {
      c.className = "eligible";
      clearTimeout(timeOutID);
    }
  }
}

function changeBkgColor () {
  const cell = document.getElementById(getRandomCell());

  if (cell.className == "eligible") {
    cell.style.backgroundColor = cell.style.backgroundColor == color1 ? color2 : color1;
    cell.className = "ineligible";
  }
  changeClass(cell);
}

function changeColor () {
  intID = setInterval(changeBkgColor, timeInt);
}

function stopInterval () {
  clearInterval(intID);
}

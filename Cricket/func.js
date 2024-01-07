// this is global variable comchoice
let compChoice;
function rendomNoGen() {
  let randomNum = Math.random() * 3;

  if (randomNum > 0 && randomNum <= 1) {
    compChoice = "Bat";
  } else if (randomNum > 1 && randomNum <= 2) {
    compChoice = "Ball";
  } else {
    compChoice = "Stump";
  }
}

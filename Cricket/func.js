// this is global variable comchoice
// let compChoice;
function rendomNoGen() {
  let randomNum = Math.random() * 3;

  if (randomNum > 0 && randomNum <= 1) {
    return "Bat";
  } else if (randomNum > 1 && randomNum <= 2) {
    return "Ball";
  } else {
    return "Stump";
  }
}

function finalResult(userChoice, compChoice) {
  if (userChoice === "Bat") {
    if (compChoice === "Bat") {
      return "Its a Tie";
    } else if (compChoice === "Ball") {
      return "User Won";
    } else if (compChoice === "Stump") {
      return "Computer Won";
    }
  } else if (userChoice === "Ball") {
    if (compChoice === "Bat") {
      return "Computer Won";
    } else if (compChoice === "Ball") {
      return "Its a Tie";
    } else if (compChoice === "Stump") {
      return "User Won";
    }
  } else {
    if (compChoice === "Bat") {
      return "User Won";
    } else if (compChoice === "Ball") {
      return "Computer Won";
    } else if (compChoice === "Stump") {
      return "Its a Tie";
    }
  }
}

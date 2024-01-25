// this is global variable comchoice
// let compChoice;
// use for random no generation
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
// use for comparison b/w user and computer
function finalResult(userChoice, compChoice) {
  if (userChoice === "Bat") {
    if (compChoice === "Bat") {
      score.Tie++;
      return "Its a Tie";
    } else if (compChoice === "Ball") {
      score.Won++;
      return "User Won";
    } else if (compChoice === "Stump") {
      score.Lost++;
      return "Computer Won";
    }
  } else if (userChoice === "Ball") {
    if (compChoice === "Bat") {
      score.Lost++;
      return "Computer Won";
    } else if (compChoice === "Ball") {
      score.Tie++;
      return "Its a Tie";
    } else if (compChoice === "Stump") {
      score.Won++;
      return "User Won";
    }
  } else {
    if (compChoice === "Bat") {
      score.Won++;
      return "User Won";
    } else if (compChoice === "Ball") {
      score.Lost++;
      return "Computer Won";
    } else if (compChoice === "Stump") {
      score.Tie++;
      return "Its a Tie";
    }
  }
}

// use to show final result

function result(userChoice, compChoice, fResult) {
  alert(`You Chose ${userChoice}. Computer Chose ${compChoice}. ${fResult}. 

      Won: ${score.Won}.
      Lost: ${score.Lost}.
      Tie: ${score.Tie}`);
}

// Score Maintaining using Objects

let score = {
  Won: 0,
  Lost: 0,
  Tie: 0,
};

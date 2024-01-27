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
  localStorage.setItem("Score", JSON.stringify(score));
  alert(`You Chose ${userChoice}. Computer Chose ${compChoice}. ${fResult}. 
      ${score.showScore()}`);
}

// Score Maintaining using Objects

let scoreStr = localStorage.getItem("Score");
// can be used this short hand or
let score = JSON.parse(scoreStr) || {
  Won: 0,
  Lost: 0,
  Tie: 0,
};
// can be used this big code instead of above short hand
// let score;
// if (scoreStr !== undefined) {
//   score = JSON.parse(scoreStr);
// } else {
//   score = {
//     Won: 0,
//     Lost: 0,
//     Tie: 0,
//   };
// }
//func creation
score.showScore = function () {
  return `
   Your Score is: 
    Won: ${score.Won}.
    Lost: ${score.Lost}.
    Tie: ${score.Tie}`;
};

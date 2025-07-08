let score;

let scoreStr = localStorage.getItem("score");
resetScore(scoreStr);

function resetScore(scoreStr) {
  score = JSON.parse(scoreStr) || {
    won: 0,
    lost: 0,
    tie: 0,
  };

  score.displayScore = function () {
    return `Won: ${score.won}, Lost: ${score.lost}, Tie: ${score.tie}`;
  };

  showResult();
}

function myFunction() {
  let random = Math.random() * 3;
  if (random > 0 && random <= 1) {
    return "Bat";
  } else if (random > 1 && random <= 2) {
    return "Ball";
  } else {
    return "Stump";
  }
}

function getResult(userMove, computerMove) {
  if (userMove === "Bat") {
    if (computerMove === "Ball") {
      score.won++;
      return "User Won🏆";
    } else if (computerMove === "Stump") {
      score.lost++;
      return "Computer has won😢";
    } else if (computerMove === "Bat") {
      score.tie++;
      return `It's a tie🤝`;
    }
  } else if (userMove === "Ball") {
    if (computerMove === "Ball") {
      score.tie++;
      return `It's a tie🤝`;
    } else if (computerMove === "Stump") {
      score.won++;
      return "User Won🏆";
    } else if (computerMove === "Bat") {
      score.lost++;
      return "Computer Won😢";
    }
  } else if (userMove === "Stump") {
    if (computerMove === "Ball") {
      score.lost++;
      return "Computer Won😢";
    } else if (computerMove === "Stump") {
      score.tie++;
      return `It's a tie🤝`;
    } else if (computerMove === "Bat") {
      score.won++;
      return "User Won🏆";
    }
  }
}

function showResult(userMove, computerMove, result) {
  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector("#user-move").innerText =
    userMove !== undefined ? `You chose ${userMove}` : "";

  document.querySelector("#computer-move").innerText =
    computerMove !== undefined ? `Computer chose ${computerMove}` : "";

  document.querySelector("#result").innerText = result || ""; //fallback operator

  document.querySelector("#score").innerText = score.displayScore();
}

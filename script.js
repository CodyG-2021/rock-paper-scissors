//pc choice
var options = ["R", "S", "P"];
//Score
var win = 0;
var lose = 0;
var ties = 0;

function myGame() {
  var userChoice = prompt(
    "Let's Play a Game, pick R, P, or S. If you pick something else you will lose."
  );
  var options = ["R", "S", "P"];
  var index = Math.floor(Math.random() * options.length);
  var compChoice = options[index];
  if (userChoice === compChoice) {
    alert("Tie!");
    ties++;
  } else if (userChoice === "R" && compChoice === "S") {
    alert("You Win!");
    win++;
  } else if (userChoice === "P" && compChoice === "R") {
    alert("You Win!");
    win++;
  } else if (userChoice === "S" && compChoice === "P") {
    alert("You Win!");
    win++;
  } else {
    alert("You Lose :(");
    lose++;
  }
  alert(`Wins = ${win}, Loses = ${lose}, and Ties = ${ties}.`);
  var playAgain = confirm("Want to Play Again?");
  if (playAgain) {
    myGame();
  } else {
    alert("Thanks for playing!");
  }
  return;
}

myGame();

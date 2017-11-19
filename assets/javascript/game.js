var letters = [
  "a", "b", "c", "d",
  "e", "f", "g", "h",
  "i", "j", "k", "l",
  "m", "n", "o", "p",
  "q", "r", "s", "t",
  "u", "v", "w", "x",
  "y", "z"
];

var guessed = [];
var wins = 0;
var losses = 0;
var guessLeft = 9;

// computer picks a letter
var computerGuess = letters[Math.floor(Math.random() * letters.length)];

// my onkeyup event populates my guesses array
document.onkeyup = function (event) {
  var userGuess = event.key;
  guessed.push(userGuess);

  if (userGuess === "a" || userGuess === "b" || userGuess === "c" || userGuess === "d" ||
    userGuess === "e" || userGuess === "f" || userGuess === "g" || userGuess === "h" ||
    userGuess === "i" || userGuess === "j" || userGuess === "k" || userGuess === "l" ||
    userGuess === "m" || userGuess === "n" || userGuess === "o" || userGuess === "p" ||
    userGuess === "q" || userGuess === "r" || userGuess === "s" || userGuess === "t" ||
    userGuess === "u" || userGuess === "v" || userGuess === "w" || userGuess === "x" ||
    userGuess === "y" || userGuess === "z"
  ){

    if (userGuess === computerGuess) {
      wins++;
      guessLeft = 9;
      guessed = [];
      computerGuess = letters[Math.floor(Math.random() * letters.length)];
      $('#modalWin').modal('show');
    }

    if (userGuess !== computerGuess) {
      guessLeft--;
      if (guessLeft === 0) {
        losses++;
        $('#modalLose').modal('show');
        guessLeft = 9;
        guessed = [];
        computerGuess = letters[Math.floor(Math.random() * letters.length)];
      }
    }

    document.getElementById('guesses').innerHTML = "Guesses: " + guessed.join(', ');
    document.getElementById('guessLeft').innerHTML = "Guesses Left: " + guessLeft;
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "Losses: " + losses;

  console.log("comp:" + computerGuess);
  console.log("me:" + userGuess);
  }
};

var soccerPlayerNames = [
  "Messi",
  "Ronaldo",
  "Ronaldinho",
  "Neymar",
  "Dzeko",
  "Rooney",
  "Chicharito",
  "Vela",
  "Hazard",
  "Maguire",
];

let answer = "";
let guessed = [];
let maxWrong = 7;
let mistakes = 0;

function getRandomName() {
  answer =
    soccerPlayerNames[Math.floor(Math.random() * soccerPlayerNames.length)];
  // Math.floor returns the largest integer less than or equal to a given number
  // Math.random function returns a floating-point, pseudo-random number in the range 0
  // to less than 1 (inclusive of 0, but not 1) with approximately uniform distribution
  // over that range — which you can then scale to your desired range.
  // console.log(answer);
}

function generateButtons() {
  let buttons = "abcdefghijklmnopqrstuvwxyz"
    .split("") // splits the string into substrings
    .map((letter) => `<button>` + letter + `</button>`);
  document.getElementById("").innerHTML = buttons;
}

getRandomName();
generateButtons();

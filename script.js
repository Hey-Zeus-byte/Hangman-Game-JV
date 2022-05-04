const wordE1 = document.getElementById("word");
const wrongLettersE1 = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-button");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");
const figureParts = document.querySelectorAll(".figure-part");
// grabbing the css class names from style.css
const words = [
  "ronaldinho",
  "cristiano",
  "messi",
  "neymar",
  "lewandowski",
  "harrymaguire",
  "chicharito",
  "vela",
  "ibrahimovic",
  "jesusvaldez",
];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = []; // empty array to hold correct letters
const wrongLetters = []; // empty array to hold wrong letters

//Show hidden word
// innerHTML sets or returns the HTML content of an element
function displayWord() {
  wordE1.innerHTML = ` 
    ${selectedWord
      .split("") // splits a string into an array of substrings
      .map(
        (letter) => `
        <span class="letter">
        ${correctLetters.includes(letter) ? letter : ""}
        </span>
        `
      )
      .join("")}
    `;

  const innerWord = wordE1.innerText.replace(/\n/g, ""); // "/\n/g" render each letter with a space inbetween

  if (innerWord === selectedWord) {
    finalMessage.innerText = "Congratulations! You won! :)";
    popup.style.display = "flex"; // Element is rendered as a block-level flex box
  }
}

// Update the wrong letters
function updateWrongLetterE1() {
  //Display wrong letters
  wrongLettersE1.innerHTML = `
    ${wrongLetters.length > 0 ? "<p>Wrong</p>" : ""}
    ${wrongLetters.map((letter) => `<span>${letter}</span>`)}
    `;

  //Display parts
  figureParts.forEach((part, index) => {
    const errors = wrongLetters.length;

    if (index < errors) {
      part.style.display = "block";
    } else {
      part.style.display = "none";
    }
  });

  //Check if lost
  if (wrongLetters.length === figureParts.length) {
    finalMessage.innerText = "Unfortunately you lost. :(";
    popup.style.display = "flex";
  }
}

//Show notification
function showNotification() {
  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 2000); // two seconds
}

//Keydown letter press
// window
window.addEventListener("keydown", (e) => {
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    // keyCodes for the whole keyboard
    const letter = e.key;

    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);
        // if clicked letter is in selectedWord then check if it's not in the correctLetters array. If it isn't add the letter to the correct letters
        displayWord();
      } else {
        showNotification();
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);

        updateWrongLetterE1();
      } else {
        showNotification();
      }
    }
  }
});

wordE1.addEventListener("click", () => {
  const dummy = document.getElementById("dummy-input");
  if (!dummy) {
    const input = document.createElement("input");
    input.id = "dummy-input";
    input.style.opacity = "0";
    input.style.height = "0px";
    input.style.width = "0px";
    input.type = "hidden";
    document.body.appendChild(input);
    input.focus();
    console.log(input);
  } else {
    dummy.focus();
  }
});

//Restart game and play again
playAgainBtn.addEventListener("click", () => {
  //Empty arrays
  correctLetters.splice(0);
  wrongLetters.splice(0);

  selectedWord = words[Math.floor(Math.random() * words.length)];

  displayWord();

  updateWrongLetterE1();

  popup.style.display = "none";
});

displayWord();

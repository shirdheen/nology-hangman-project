import wordSet from "./assets/example-words.json" with { type: "json" };
console.log(wordSet);

// Selecting a random word

const selectedWord = wordSet[Math.floor(Math.random() * wordSet.length)];
console.log(selectedWord);

// Getting underscores for the selected word
const selectedWordArr = selectedWord.split("");
console.log(selectedWordArr);
const selectedWordArrUnderscores = selectedWordArr.map((letter) => "_");
console.log(selectedWordArrUnderscores);

// Creating an alphabet array for buttons
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// Getting classes and IDs from HTML
const playButton = document.querySelector(".game__button--big");
console.log(playButton);

const wordDiv = document.querySelector(".game__word");
console.log(wordDiv);

const gameContainer = document.querySelector(".game__container");
console.log(gameContainer);

let attempts = 0;

// When play button is clicked ...
playButton.addEventListener("click", (event) => {
  console.log("Play button clicked");
  event.preventDefault();

  //Hides the play button after clicking on it
  playButton.classList.add("hidden");
  console.log("Play button hidden");

  // Clear the divs in case it already has content
  wordDiv.innerHTML = "";
  gameContainer.innerHTML = "";

  selectedWordArrUnderscores.forEach((underscore) => {
    const span = document.createElement("span");
    span.textContent = underscore;
    span.className = "game__word--underscores";
    wordDiv.appendChild(span);
    console.log("Word converted to underscores and added to HTML");
  });
  // Add starting image
  const img0 = document.createElement("img");
  img0.src = "./assets/img/h-0.jpg";
  img0.className = "game__image";
  gameContainer.appendChild(img0);
  console.log("Starter image added");

  // Creating the alphabet button container dynamically
  const alphabetContainer = document.createElement("div");
  alphabetContainer.id = "alphabet-container";
  gameContainer.appendChild(alphabetContainer);
  console.log("Alphabet button container added");

  // Creating buttons for letters
  alphabet.split("").forEach((letter) => {
    const alphButton = document.createElement("button");
    alphButton.textContent = letter;
    alphButton.className = "game__button--alphabet";
    alphButton.addEventListener("click", () => {
      handleLetterGuess(letter, alphButton);
    });
    alphabetContainer.appendChild(alphButton);
    console.log("Alphabet buttons added to alphabet container");
  });
});

// Function to handle guessed letters
function handleLetterGuess(letter, button) {
  button.disabled = true; // Button disabled after you click it

  if (selectedWordArr.includes(letter)) {
    // Correct guess
    console.log(`Correct guess: ${letter}`);
    selectedWordArr.forEach((char, index) => {
      if (char === letter) {
        selectedWordArrUnderscores[index] = letter; // Update the underscores
      }
    });
    updateWord(); // Updates the word with the letters
    playerWin(); // Checks if the player has won
  } else {
    // Incorrect guess
    console.log(`Incorrect guess: ${letter}`);
    attempts++;
    updateImage(); // Updates hangman image
    playerLose(); // Check if the player has lost
  }
}

// Function to update the word display
function updateWord() {
  wordDiv.innerHTML = ""; // Clears current display
  selectedWordArrUnderscores.forEach((underscore) => {
    const span = document.createElement("span");
    span.textContent = underscore;
    span.className = "game__word--underscores";
    wordDiv.appendChild(span);
  });
}

// Function to update the hangman image
function updateImage() {
  const img = document.querySelector(".game__image");
  img.src = `./assets/img/h-${attempts}.jpg`; // Update the image
}

// Function to check if the player has won
function playerWin() {
  if (!selectedWordArrUnderscores.includes("_")) {
    console.log("You win!");
    alert("Yay! You guessed the word.");
  }
}

// Function to check if the player has lost
function playerLose() {
  if (attempts >= 10) {
    console.log("You lose!");
    alert(`Game over! Better luck next time. The word was ${selectedWord}`);
  }
}

import wordSet from "./assets/example-words.json" with { type: "json" };

let selectedWord, selectedWordArr, selectedWordArrUnderscores;
let attempts = 0;

function selectRandomWord() {
  // Selecting a random word
  selectedWord = wordSet[Math.floor(Math.random() * wordSet.length)];
  console.log(selectedWord);

  // Getting underscores for the selected word
  selectedWordArr = selectedWord.split("");
  console.log(selectedWordArr);
  selectedWordArrUnderscores = selectedWordArr.map((letter) => "_");
  console.log(selectedWordArrUnderscores);
}

function starterImage() {
  const img0 = document.createElement("img");
  img0.src = "./assets/img/h-0.jpg";
  img0.className = "game__image";
  gameContainer.appendChild(img0);
  console.log("Starter image added");
}

// Creating an alphabet array for buttons
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// Getting classes and IDs from HTML
const playButton = document.querySelector(".game__button--big");
console.log(playButton);

const wordDiv = document.querySelector(".game__word");
console.log(wordDiv);

const gameContainer = document.querySelector(".game__container");
console.log(gameContainer);

function initialiseGame() {
  console.log("Initialising game...");
  // Select random word
  selectRandomWord();
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
  starterImage();
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
      console.log(`You clicked: ${letter}`);
      handleLetterGuess(letter, alphButton);
    });
    alphabetContainer.appendChild(alphButton);
    console.log("Alphabet buttons added to alphabet container");
  });
}

// When play button is clicked ...
playButton.addEventListener("click", (event) => {
  console.log("Play button clicked");
  event.preventDefault();

  //Hides the play button after clicking on it
  playButton.classList.add("hidden");
  console.log("Play button hidden");

  // Initialise game
  initialiseGame();
});

// Function to handle guessed letters
function handleLetterGuess(letter, button) {
  button.disabled = true; // Button disabled after you click it
  button.classList.add("disabled");

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
    // Create overlay
    const overlay = document.createElement("div");
    overlay.className = "overlay";
    document.body.appendChild(overlay);
    // Create win message
    const messageDiv = document.createElement("div");
    messageDiv.className = "game__message-container";
    const message = document.createElement("p");
    message.textContent = "Yay! You guessed the word.";
    message.className = "game__message game__message--win";
    // Add 'Play Again' button
    const playAgainButton = document.createElement("button");
    playAgainButton.textContent = "PLAY AGAIN";
    playAgainButton.className = "game__button--small";
    messageDiv.appendChild(message);
    messageDiv.appendChild(playAgainButton);
    document.body.appendChild(messageDiv);
    playAgainButton.addEventListener("click", () => {
      playAgainButton.remove();
      resetGame();
    });
  }
}

// Function to check if the player has lost
function playerLose() {
  if (attempts >= 10) {
    console.log("You lose!");
    // Create overlay
    const overlay = document.createElement("div");
    overlay.className = "overlay";
    document.body.appendChild(overlay);
    // Create lose message
    const messageDiv = document.createElement("div");
    messageDiv.className = "game__message-container";
    const message = document.createElement("p");
    message.textContent = `Game over! Better luck next time. The word was ${selectedWord}.`;
    message.className = "game__message game__message--lose";
    // Add 'Play Again' button
    const playAgainButton = document.createElement("button");
    playAgainButton.textContent = "PLAY AGAIN";
    playAgainButton.className = "game__button--small";
    messageDiv.appendChild(message);
    messageDiv.appendChild(playAgainButton);
    document.body.appendChild(messageDiv);
    playAgainButton.addEventListener("click", () => {
      playAgainButton.remove();
      resetGame();
    });
  }
}

// Function to reset the game
function resetGame() {
  // Clear overlay and message
  const overlay = document.querySelector(".overlay");
  const messageDiv = document.querySelector(".game__message");
  if (overlay) {
    overlay.remove();
  }
  if (messageDiv) {
    messageDiv.remove();
  }
  // Reset game
  attempts = 0;
  // Initialise game again
  initialiseGame();
  console.log("Game has been reset");
}

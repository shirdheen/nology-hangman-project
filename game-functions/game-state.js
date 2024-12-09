import {
  selectRandomWord,
  selectedWordArrUnderscores,
} from "./word-selection.js";
import { starterImage } from "./image-mgmt.js";

export function initialiseGame(wordDiv, gameContainer, handleLetterGuess) {
  console.log("Initialising game...");

  // Select random word
  selectRandomWord();

  console.log("selectedWordArrUnderscores:", selectedWordArrUnderscores);
  if (!Array.isArray(selectedWordArrUnderscores)) {
    throw new Error("selectedWordArrUnderscores is not an array.");
  }

  // Clear the divs in case it already has content
  wordDiv.innerHTML = "";
  gameContainer.innerHTML = "";

  selectedWordArrUnderscores.forEach((underscore) => {
    const span = document.createElement("span");
    span.textContent = underscore;
    span.className = "game__word--underscores";
    wordDiv.appendChild(span);
  });
  console.log("Word converted to underscores and added to HTML");

  // Add starting image
  starterImage(gameContainer);

  // Creating the alphabet button container dynamically
  const alphabetContainer = document.createElement("div");
  alphabetContainer.id = "alphabet-container";
  gameContainer.appendChild(alphabetContainer);
  console.log("Alphabet button container added");

  // Creating buttons for letters
  // Creating an alphabet array for buttons
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
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

// Function to reset the game
export function resetGame(
  wordDiv,
  gameContainer,
  handleLetterGuess,
  overlay,
  messageDiv,
  attempts
) {
  // Clear overlay and message
  overlay = document.querySelector(".overlay");
  messageDiv = document.querySelector(".game__message-container");
  if (overlay) {
    overlay.remove();
  }
  if (messageDiv) {
    messageDiv.remove();
  }
  // Reset game
  attempts = 0;
  // Initialise game again
  initialiseGame(wordDiv, gameContainer, handleLetterGuess);
  console.log("Game has been reset");
}

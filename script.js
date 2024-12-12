import {
  selectedWord,
  selectedWordArr,
  selectedWordArrUnderscores,
} from "./game-functions/word-selection.js";
import { initialiseGame } from "./game-functions/game-state.js";
import { playerLose, playerWin } from "./game-functions/messages.js";
import { updateImage } from "./game-functions/image-mgmt.js";
import { updateWord } from "./game-functions/word-display.js";

let attempts = 0;

// Function to handle guessed letters
function handleLetterGuess(letter, button) {
  console.log("Current attempts before guess: ", attempts);
  if (attempts >= 10) {
    console.warn("Game over. No further guesses allowed.");
    return;
  }
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
    updateWord(selectedWordArrUnderscores, wordDiv); // Updates the word with the letters
    playerWin(
      selectedWordArrUnderscores,
      wordDiv,
      gameContainer,
      handleLetterGuess,
      attempts
    ); // Checks if the player has won
  } else {
    // Incorrect guess
    console.log(`Incorrect guess: ${letter}`);
    attempts++;
    updateImage(attempts); // Updates hangman image
    playerLose(
      attempts,
      selectedWord,
      wordDiv,
      gameContainer,
      handleLetterGuess
    ); // Check if the player has lost
  }
}
// Getting classes and IDs from HTML
const playButton = document.querySelector(".game__button--big");
console.log(playButton);

const wordDiv = document.querySelector(".game__word");
console.log(wordDiv);

const gameContainer = document.querySelector(".game__container");
console.log(gameContainer);

// When play button is clicked ...
playButton.addEventListener("click", (event) => {
  console.log("Play button clicked");
  event.preventDefault();

  console.log(
    "Passing handleLetterGuess to initialiseGame:",
    handleLetterGuess
  );

  //Hides the play button after clicking on it
  playButton.classList.add("hidden");
  console.log("Play button hidden");

  // Initialise game
  initialiseGame(wordDiv, gameContainer, handleLetterGuess);
});

import { resetGame } from "./game-state.js";

// Function to check if the player has won
export function playerWin(
  selectedWordArrUnderscores,
  wordDiv,
  gameContainer,
  handleLetterGuess,
  attempts
) {
  if (!selectedWordArrUnderscores.includes("_")) {
    console.log("You win!");
    // Create overlay
    createOverlay();
    // Create win message
    const messageDiv = document.createElement("div");
    messageDiv.className = "game__message-container";
    const message = createMessage("Yay! You guessed the word.", "win");
    // Add 'Play Again' button
    const playAgainButton = createPlayAgainButton(
      wordDiv,
      gameContainer,
      handleLetterGuess,
      null,
      null,
      attempts
    );

    messageDiv.appendChild(message);
    messageDiv.appendChild(playAgainButton);
    document.body.appendChild(messageDiv);
  }
}

// Function to check if the player has lost
export function playerLose(
  attempts,
  selectedWord,
  wordDiv,
  gameContainer,
  handleLetterGuess
) {
  if (attempts >= 10) {
    console.log("You lose!");
    // Create overlay
    createOverlay();
    // Create lose message
    const messageDiv = document.createElement("div");
    messageDiv.className = "game__message-container";
    const message = createMessage(
      `Game over! Better luck next time. The word was ${selectedWord}.`,
      "lose"
    );
    // Add 'Play Again' button
    const playAgainButton = createPlayAgainButton(
      wordDiv,
      gameContainer,
      handleLetterGuess,
      null,
      null,
      attempts
    );

    messageDiv.appendChild(message);
    messageDiv.appendChild(playAgainButton);
    document.body.appendChild(messageDiv);
  }
}

function createOverlay() {
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  document.body.appendChild(overlay);
}

function createMessage(text, type) {
  const message = document.createElement("p");
  message.textContent = text;
  message.className = `game__message game__message--${type}`;
  return message;
}

function createPlayAgainButton(wordDiv, gameContainer, handleLetterGuess) {
  const playAgainButton = document.createElement("button");
  playAgainButton.textContent = "PLAY AGAIN";
  playAgainButton.className = "game__button--small";
  playAgainButton.addEventListener("click", () => {
    playAgainButton.remove();
    resetGame(wordDiv, gameContainer, handleLetterGuess, null, null, attempts);
  });
  return playAgainButton;
}

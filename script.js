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
    alphabetContainer.appendChild(alphButton);
    console.log("Alphabet buttons added to alphabet container");
  });
});

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

// When play button is clicked ...
const playButton = document.querySelector(".game__button");
console.log(playButton);

const wordDiv = document.querySelector(".game__word");
console.log(wordDiv);

const imageContainer = document.querySelector(".game__image-container");
console.log(imageContainer);

playButton.addEventListener("click", (event) => {
  console.log("Play button clicked");
  event.preventDefault();
  // Clear the divs in case it already has content
  wordDiv.innerHTML = "";
  imageContainer.innerHTML = "";

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
  imageContainer.appendChild(img0);
  console.log("Starter image added");
});

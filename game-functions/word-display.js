// Function to update the word display
export function updateWord(selectedWordArrUnderscores, wordDiv) {
  wordDiv.innerHTML = ""; // Clears current display
  selectedWordArrUnderscores.forEach((underscore) => {
    const span = document.createElement("span");
    span.textContent = underscore;
    span.className = "game__word--underscores";
    wordDiv.appendChild(span);
  });
}

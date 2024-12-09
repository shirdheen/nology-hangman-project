import wordSet from "../assets/example-words.json" with { type: "json" };

export let selectedWord, selectedWordArr, selectedWordArrUnderscores;

export function selectRandomWord() {
  if (!Array.isArray(wordSet) || wordSet.length === 0) {
    throw new Error("wordSet must be a non-empty array");
  }
  // Selecting a random word
  selectedWord = wordSet[Math.floor(Math.random() * wordSet.length)];
  console.log(selectedWord);

  // Getting underscores for the selected word
  selectedWordArr = selectedWord.split("");
  console.log(selectedWordArr);
  selectedWordArrUnderscores = selectedWordArr.map(() => "_");
  console.log(selectedWordArrUnderscores);
}

export function getSelectedWord() {
  return selectedWord;
}

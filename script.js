// Getting words set from the JSON file
import wordSet from "./assets/example-words.json" with { type: "json" };
console.log(wordSet); // GETTING A SYNTAX ERROR

// const wordSet = [
//   "apple",
//   "banana",
//   "orange",
//   "grape",
//   "kiwi",
//   "pear",
//   "peach",
//   "plum",
//   "melon",
//   "lemon",
//   "pineapple",
//   "mango",
//   "papaya",
//   "coconut",
//   "strawberry",
//   "blueberry",
//   "raspberry",
//   "blackberry",
//   "cherry",
//   "apricot",
//   "tomato",
//   "carrot",
//   "potato",
//   "onion",
//   "garlic",
//   "pepper",
//   "lettuce",
//   "broccoli",
//   "spinach",
//   "zucchini",
//   "cucumber",
//   "celery",
//   "cauliflower",
//   "asparagus",
//   "mushroom",
//   "pumpkin",
//   "radish",
//   "beetroot",
//   "turnip",
//   "parsnip",
//   "elephant",
//   "giraffe",
//   "tiger",
//   "lion",
//   "cheetah",
//   "leopard",
//   "zebra",
//   "rhino",
//   "hippo",
//   "buffalo",
//   "kangaroo",
//   "koala",
//   "panda",
//   "sloth",
//   "chimpanzee",
//   "gorilla",
//   "orangutan",
//   "lemur",
//   "meerkat",
//   "otter",
//   "shark",
//   "whale",
//   "dolphin",
//   "seal",
//   "octopus",
//   "jellyfish",
//   "lobster",
//   "crab",
//   "shrimp",
//   "starfish",
//   "eagle",
//   "sparrow",
//   "parrot",
//   "penguin",
//   "ostrich",
//   "flamingo",
//   "peacock",
//   "hummingbird",
//   "owl",
//   "falcon",
//   "house",
//   "apartment",
//   "mansion",
//   "cottage",
//   "bungalow",
//   "castle",
//   "villa",
//   "shack",
//   "chalet",
//   "palace",
//   "bed",
//   "chair",
//   "table",
//   "desk",
//   "sofa",
//   "couch",
//   "cabinet",
//   "wardrobe",
//   "bookshelf",
//   "dresser",
//   "car",
//   "bicycle",
//   "motorcycle",
//   "scooter",
//   "truck",
//   "bus",
//   "train",
//   "airplane",
//   "helicopter",
//   "boat",
//   "submarine",
//   "rocket",
//   "spaceship",
//   "hovercraft",
//   "tram",
//   "trolley",
//   "taxi",
//   "ferry",
//   "yacht",
//   "canoe",
//   "violin",
//   "guitar",
//   "piano",
//   "trumpet",
//   "flute",
//   "drums",
//   "clarinet",
//   "saxophone",
//   "cello",
//   "harp",
//   "concert",
//   "symphony",
//   "melody",
//   "harmony",
//   "rhythm",
//   "tempo",
//   "note",
//   "scale",
//   "chord",
//   "tune",
//   "dog",
//   "cat",
//   "rabbit",
//   "hamster",
//   "goldfish",
//   "parakeet",
//   "ferret",
//   "guinea",
//   "chinchilla",
//   "gerbil",
//   "winter",
//   "spring",
//   "summer",
//   "autumn",
//   "snow",
//   "rain",
//   "hail",
//   "sleet",
//   "fog",
//   "storm",
//   "mountain",
//   "river",
//   "lake",
//   "ocean",
//   "forest",
//   "desert",
//   "valley",
//   "canyon",
//   "island",
//   "waterfall",
//   "kitchen",
//   "bathroom",
//   "bedroom",
//   "livingroom",
//   "garage",
//   "basement",
//   "attic",
//   "hallway",
//   "balcony",
//   "patio",
//   "science",
//   "history",
//   "math",
//   "geography",
//   "chemistry",
//   "biology",
//   "physics",
//   "astronomy",
//   "literature",
//   "philosophy",
//   "football",
//   "basketball",
//   "tennis",
//   "golf",
//   "soccer",
//   "baseball",
//   "hockey",
//   "cricket",
//   "rugby",
//   "volleyball",
// ];

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

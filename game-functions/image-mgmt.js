export function starterImage(gameContainer) {
  const img0 = document.createElement("img");
  img0.src = "./assets/img/h-0.jpg";
  img0.className = "game__image";
  gameContainer.appendChild(img0);
  console.log("Starter image added");
}

// Function to update the hangman image
export function updateImage(attempts) {
  const maxAttempts = 10;
  if (isNaN(attempts) || attempts > maxAttempts) {
    console.error("Invalid attempts value:", attempts);
    return;
  }
  const img = document.querySelector(".game__image");
  img.src = `./assets/img/h-${attempts}.jpg`; // Update the image
}

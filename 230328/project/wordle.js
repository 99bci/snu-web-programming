// Define the correct word
const correctWord = "movie";

// Get the necessary HTML elements
const guessInput = document.getElementById("guess-input");
const guessBtn = document.getElementById("guess-btn");
const guessedContainer = document.getElementById("guessed-container");
const feedbackContainer = document.getElementById("feedback-container");

// Keep track of the number of guesses
let numGuesses = 0;

// Define a function to check the user's guess
function checkGuess() {
  // Get the user's guess
  const guess = guessInput.value.toLowerCase();

  // Clear the input field
  guessInput.value = "";

  // Create an array to store the feedback for each letter
  const feedback = [];

  // Check each letter of the guess against the correct word
  for (let i = 0; i < guess.length; i++) {
    // Check if the letter is in the correct position
    if (guess[i] === correctWord[i]) {
      feedback.push("green");
    }
    // Check if the letter is in the word, but in the wrong position
    else if (correctWord.includes(guess[i])) {
      feedback.push("orange");
    }
    // Otherwise, the letter is not in the word
    else {
      feedback.push("red");
    }
  }

  // Create a div to store the guessed letters
  const guessedDiv = document.createElement("div");
  guessedDiv.classList.add("guessed-word");

  // Add each letter to the guessed div with the appropriate feedback color
  for (let i = 0; i < guess.length; i++) {
    const letterDiv = document.createElement("div");
    letterDiv.classList.add("letter");
    letterDiv.style.backgroundColor = feedback[i];
    letterDiv.textContent = guess[i];
    guessedDiv.appendChild(letterDiv);
  }

  // Add the guessed div to the guessed container
  guessedContainer.appendChild(guessedDiv);

  // Increment the number of guesses
  numGuesses++;

  // Check if the user has won or lost
  if (guess === correctWord) {
    feedbackContainer.textContent = "Congratulations! You won!";
  } else if (numGuesses === 6) {
    feedbackContainer.textContent = `Sorry, the correct word was "${correctWord}".`;
  }
}

// Add a click event listener to the guess button
guessBtn.addEventListener("click", checkGuess);

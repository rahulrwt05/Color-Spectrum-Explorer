// Declare a variable to hold the interval ID
let intervalID;

// Define a function to generate a random color
const getRandomColor = function () {
  const hexChars = "012345678ABCDEF"; // Define the hexadecimal characters
  let color = "#"; // Initialize the color string with #
  for (let i = 0; i < 6; i++) {
    // Loop 6 times to generate a 6-character hex color
    color += hexChars[Math.floor(Math.random() * hexChars.length)]; // Append a random hex character to the color string
  }
  return color; // Return the generated color
};

// Function to initialize the boxes
function createBoxes() {
  for (let i = 0; i < 7; i++) {
    // Create a new div element
    const box = document.createElement("div");
    box.classList.add("box"); // Add the 'box' class to the div

    // Generate an initial random color for the box
    const initColor = getRandomColor();

    // Set the initial background color and text content for the box
    box.style.backgroundColor = initColor;

    document.querySelector(".boxContainer").appendChild(box); // Append the box to the '.boxContainer' div
  }
}

// Call the createBoxes function to create the boxes when the script runs
createBoxes();

// Wait for the window to load before executing the following code
window.onload = function () {
  // Attach a click event listener to the '#startBtn'
  document.querySelector("#startBtn").addEventListener("click", function () {
    const changeColors = function () {
      // Define the changeColors function
      const boxes = document.querySelectorAll(".box"); // Select all boxes
      boxes.forEach((box) => {
        const newColor = getRandomColor();
        // Iterate over each box
        box.style.backgroundColor = newColor;
        box.textContent = newColor; // Apply a random color to each box
      });
    };
    // Check if intervalID is not set, meaning the interval hasn't started yet
    if (!intervalID) {
      intervalID = setInterval(changeColors, 2000); // Start the interval, changing color every 2000ms
    }
  });

  // Attach a click event listener to the '#stopBtn'
  document.querySelector("#stopBtn").addEventListener("click", function () {
    clearInterval(intervalID); // Clear the interval
    intervalID = null; // Reset intervalID to null
  });
};

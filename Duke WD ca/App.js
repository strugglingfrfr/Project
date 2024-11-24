// Debug: Log that the script is running
console.log("Script is loaded and running!");

// Array of tips for Zero Emissions
const zeroEmissionsTips = [
    "Switch to renewable energy sources like solar or wind power.",
    "Use public transportation, bike, or carpool to reduce emissions.",
    "Adopt a plant-based diet to lower agricultural emissions.",
    "Install energy-efficient appliances in your home.",
    "Plant trees to absorb CO2 and create green spaces."
];

// Debug: Check if the Zero Emissions button and display element exist
const zeroEmissionsButton = document.getElementById("generateTip");
const zeroTipDisplay = document.getElementById("tipDisplay");

if (zeroEmissionsButton && zeroTipDisplay) {
    console.log("Zero Emissions button and display element found!");

    // Event listener for the "Generate a Tip" button
    zeroEmissionsButton.addEventListener("click", () => {
        console.log("Zero Emissions button clicked!"); // Debug: Log the button click
        const randomIndex = Math.floor(Math.random() * zeroEmissionsTips.length); // Generate random index
        console.log("Random Index for Zero Emissions Tip:", randomIndex); // Debug: Log the index
        zeroTipDisplay.textContent = zeroEmissionsTips[randomIndex]; // Display the tip
    });
} else {
    console.error("Error: Zero Emissions button or tip display not found in the DOM.");
}

// Contact Form Validation
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    console.log("Contact form found!");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        console.log("Contact form submitted!"); // Debug: Log form submission

        // Get input values from the form fields
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        console.log("Form Input Values:", { name, email, subject, message }); // Debug: Log form values

        // Check if all fields are filled
        if (name && email && subject && message) {
            alert("Thank you for your submission!"); // Show success alert
            contactForm.reset(); // Clear the form fields
            console.log("Form successfully validated and reset!"); // Debug: Log success
        } else {
            alert("Please fill out all fields before submitting."); // Show error alert
            console.error("Form validation failed. Some fields are empty."); // Debug: Log error
        }
    });
} else {
    console.error("Error: Contact form not found in the DOM.");
}

// Water Conservation Tips
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded!"); // Debug: Log DOM readiness

    // Array of water-saving tips
    const waterTips = [
        "Turn off the tap while brushing your teeth.",
        "Fix leaks around your home to save thousands of gallons per year.",
        "Use a bucket instead of a hose to wash your car.",
        "Install water-efficient appliances like low-flow showerheads.",
        "Collect rainwater to water your garden."
    ];

    // Get the button and display elements for water tips
    const generateWaterTipButton = document.getElementById("generateWaterTip");
    const waterTipDisplay = document.getElementById("waterTipDisplay");

    // Debug: Check if the elements exist
    if (generateWaterTipButton && waterTipDisplay) {
        console.log("Water Tip button and display element found!");

        // Event listener for the "Generate a Tip" button
        generateWaterTipButton.addEventListener("click", () => {
            console.log("Water Tip button clicked!"); // Debug: Log the button click
            const randomIndex = Math.floor(Math.random() * waterTips.length); // Generate random index
            console.log("Random Index for Water Tip:", randomIndex); // Debug: Log the index
            waterTipDisplay.textContent = waterTips[randomIndex]; // Display the tip
        });
    } else {
        console.error("Error: Water Tip button or display element not found in the DOM.");
    }
});
// Add this inside the DOMContentLoaded event listener for the water conservation game
document.addEventListener("DOMContentLoaded", () => {
    console.log("Water Conservation Game Initialized!");

    // Simple game logic
    const waterGameChoices = {
        saveWater: "Great choice! You're helping save water!",
        wasteWater: "Oops! That wastes water. Try again!"
    };

    // Buttons for the game
    const saveButton = document.getElementById("saveWaterButton");
    const wasteButton = document.getElementById("wasteWaterButton");
    const gameResultDisplay = document.getElementById("waterGameResult");

    // Add event listeners for the buttons
    if (saveButton && wasteButton && gameResultDisplay) {
        saveButton.addEventListener("click", () => {
            gameResultDisplay.textContent = waterGameChoices.saveWater;
            console.log("Save Water Button Clicked!"); // Debugging
        });

        wasteButton.addEventListener("click", () => {
            gameResultDisplay.textContent = waterGameChoices.wasteWater;
            console.log("Waste Water Button Clicked!"); // Debugging
        });
    } else {
        console.error("Game elements not found in the DOM.");
    }
});

// Random Water-Saving Tips
const waterConservationTips = [
    "Hydropower uses the natural water cycle.",
    " It's up to 90% efficient.",
    "Provides 16% of global electricity.",
    "Use water-efficient turbines to maximize energy output.",
    "air hydropower with solar or wind for consistent energy supply."
];

document.getElementById("generateWaterTip").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * waterConservationTips.length);
    document.getElementById("waterTipDisplay").textContent = waterConservationTips[randomIndex];
});

// Simple Savings Tracker
let totalSavings = 0;

document.getElementById("trackSavingsButton").addEventListener("click", () => {
    totalSavings += Math.floor(Math.random() * 50) + 1; // Add random savings between 1 and 50 gallons
    document.getElementById("savingsDisplay").textContent = `This much energy is produced ${totalSavings} `;
});


// Random tips for Zero Emissions
const zeroEmissionsTips = [
    "Switch to renewable energy sources like solar or wind power.",
    "Use public transport or carpool to reduce transportation emissions.",
    "Adopt a plant-based diet to lower agricultural emissions.",
    "Install energy-efficient appliances in your home.",
    "Plant trees to absorb CO2 and create green spaces."
];

document.getElementById("generateTip").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * zeroEmissionsTips.length);
    document.getElementById("tipDisplay").textContent = zeroEmissionsTips[randomIndex];
});

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    if (name && email && subject && message) {
        alert("Thank you for your submission!");
        document.getElementById("contactForm").reset();
    } else {
        alert("Please fill out all fields before submitting.");
    }
});


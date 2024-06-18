document.addEventListener("DOMContentLoaded", () => {
    const hexcolor = document.querySelector(".hexcolor");
    const hexcolorDisplay = document.querySelector(".color-display .hexcolor");
    const rgbcolorDisplay = document.querySelector(".color-display .rgbcolor");
    const generateBtn = document.querySelector(".generate");
    const resetBtn = document.querySelector(".reset");
    const colorBox = document.querySelector(".color-box");

    const generateNumber = () => {
        const randomColor = `#${Math.random().toString(16).substring(2, 8)}`;
        const rgbColor = hexToRgb(randomColor);

        hexcolor.textContent = randomColor;
        colorBox.style.backgroundColor = randomColor;
        hexcolorDisplay.textContent = randomColor;
        rgbcolorDisplay.textContent = rgbColor;
    };

    const resetNumber = () => {
        hexcolor.textContent = "#ffffff";
        hexcolorDisplay.textContent = "#ffffff";
        rgbcolorDisplay.textContent = "rgb(255, 255, 255)";
        colorBox.style.backgroundColor = "#ffffff";
    };

    generateBtn.addEventListener("click", generateNumber);
    resetBtn.addEventListener("click", resetNumber);

    generateNumber();
});

// Function to convert hex color to RGB
const hexToRgb = (hex) => {
    // Remove the hash at the start if it's there
    hex = hex.replace(/^#/, '');

    // Parse the r, g, b values
    let bigint = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;

    return `rgb(${r}, ${g}, ${b})`;
};

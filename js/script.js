window.addEventListener("load", main);

function main() {
    getInput(setMinMaxInputAttr);
    getInput(getColor);
}

function getInput(callback) {
    const input = Array.from(document.querySelectorAll("input"));
    
    input.forEach((element, index) => {
        input[index].addEventListener("input", callback);
    });
}

function getColor() {
    let red = document.getElementById("rangeRed").value,
        green = document.getElementById("rangeGreen").value,
        blue = document.getElementById("rangeBlue").value;

    const rgbColor = `rgb(${red}, ${green}, ${blue})`;

    changeInputText(red, green, blue);
    showColor(rgbColor);
}

function changeInputText(red, green, blue) {
    let inputTextRed = document.getElementById("textRed"),
        inputTextGreen = document.getElementById("textGreen"),
        inputTextBlue = document.getElementById("textBlue");

    inputTextRed.value = red;
    inputTextGreen.value = green;
    inputTextBlue.value = blue;
}

function showColor(stringColor) {
    const displayColor = document.querySelector(".displayColor");
    const displayNumber = document.querySelector(".displayNumber");
    
    displayColor.style.backgroundColor = stringColor;
    displayNumber.textContent = stringColor.toUpperCase();
}

function setMinMaxInputAttr() {
    const inputRed = document.querySelector("#rangeRed");
    const inputGreen = document.querySelector("#rangeGreen");
    const inputBlue = document.querySelector("#rangeBlue");

    inputRed.setAttribute("min", 0);
    inputRed.setAttribute("max", 255);

    inputGreen.setAttribute("min", 0);
    inputGreen.setAttribute("max", 255);

    inputBlue.setAttribute("min", 0);
    inputBlue.setAttribute("max", 255);
}
// Select the necessary HTML elements
const weightInput = document.querySelector("#weight");
const heightInput = document.querySelector("#height");
const calculateButton = document.querySelector("#btn");
const resultSpan = document.querySelector("#bmi-value");
const statementP = document.querySelector("#preview");

calculateButton.addEventListener("click", () => {
    // Get the values and convert them to floating-point numbers
    let weight = parseFloat(weightInput.value);
    let height = parseFloat(heightInput.value);

    // Validate inputs
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        statementP.innerText = "Please enter valid weight and height.";
        resultSpan.innerText = "";
        return;
    }

    // Convert height from centimeters to meters for the formula (1m = 100cm)
    height = height / 100;

    // Calculate BMI
    const bmi = (weight / (height * height)).toFixed(2); // Use toFixed(2) for two decimal places

    // Display the result
    resultSpan.innerText = bmi;

    // Determine and display the BMI category
    let statement = "";
    if (bmi < 18.5) {
        statement = "Your BMI is in the underweight range.";
        resultSpan.style.color = "#ffc107"; // Yellow for underweight
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        statement = "Your BMI is in the normal or healthy weight range.";
        resultSpan.style.color = "#0be881"; // Green for normal
    } else if (bmi >= 25 && bmi <= 29.9) {
        statement = "Your BMI is in the overweight range.";
        resultSpan.style.color = "#ff8c00"; // Orange for overweight
    } else {
        statement = "Your BMI is in the obese range.";
        resultSpan.style.color = "#dc3545"; // Red for obese
    }
    statementP.innerText = statement;
});

function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
  const age = parseInt(document.getElementById('age').value);
  const gender = document.querySelector('input[name="gender"]:checked').value === "true";

  if (!weight || !height || !age || isNaN(weight) || isNaN(height) || isNaN(age)) {
    document.getElementById('result').innerText = "Please fill in all fields correctly.";
    return;
  }

  const bmi = (weight / (height * height)).toFixed(2);
  let category;

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 24.9) {
    category = "Normal weight";
  } else if (bmi < 29.9) {
    category = "Overweight";
  } else {
    category = "Obesity";
  }

  document.getElementById('result').innerHTML = `
    <p>Your BMI: <strong>${bmi}</strong></p>
    <p>Category: <strong>${category}</strong></p>
    <p>Gender: <strong>${gender ? "Male" : "Female"}</strong></p>
    <p>Age: <strong>${age}</strong></p>
  `;
}

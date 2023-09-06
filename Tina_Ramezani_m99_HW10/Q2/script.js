const button = document.querySelector("#btn");
button.addEventListener("click", calculateBMI);

function calculateBMI() {
  const height = document.querySelector("#height").value;
  const weight = document.querySelector("#weight").value;
  const result = document.querySelector("#result");

  if (!height || height < 0) {
    result.innerText = "Please provide a valid height";
    return;
  } else if (!weight || weight < 0) {
    result.innerText = "Please provide a valid weight";
    return;
  }

  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  if (bmi < 18.5) {
    result.innerText = `Under Weight: ${bmi}`;
    result.style.backgroundColor = "#0067A5";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    result.innerText = `Normal: ${bmi}`;
    result.style.backgroundColor = "#00A86B";
  } else if (bmi >= 25 && bmi < 29.9) {
    result.innerText = `Over Weight: ${bmi}`;
    result.style.backgroundColor = "#00FF00";
  } else if (bmi >= 30 && bmi < 34.9) {
    result.innerText = `Obesity (Class I): ${bmi}`;
    result.style.backgroundColor = "#E48400";
  } else if (bmi >= 35.5 && bmi < 39.9) {
    result.innerText = `Obesity (Class II) : ${bmi}`;
    result.style.backgroundColor = "#D2691E";
  } else {
    result.innerText = `Extreme Obesity: ${bmi}`;
    result.style.backgroundColor = "#CB410B";
  }
}

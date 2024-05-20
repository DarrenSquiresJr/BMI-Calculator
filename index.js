function getBMI(feet, inches, weight) {
    let totalInches = feet * 12 + inches;
    let bmi = weight / (totalInches * totalInches) * 703;
    return Number((bmi).toFixed(1));
}

function buttonOnClick() {
    let callBMI = getBMI(parseInt(document.getElementById("feet").value), parseInt(document.getElementById("inches").value), parseInt(document.getElementById("weight").value))
    document.getElementById("display").innerHTML = `Your BMI is: ${callBMI}`
    displayChartValue(callBMI)
}
function displayChartValue(BMI){
    if (BMI < 18.5){
        document.getElementById("chart").innerHTML = `Your BMI category is: underweight`
    }
    else if (BMI < 24.9){
        document.getElementById("chart").innerHTML = `Your BMI category is: normal weight`

    }
    else if (BMI < 29.9){
        document.getElementById("chart").innerHTML = `Your BMI category is: overweight`

    }
    else if (BMI < 34.9){
        document.getElementById("chart").innerHTML = `Your BMI category is: obese`

    }
    else {
        document.getElementById("chart").innerHTML = `Your BMI category is: extremely obese`
    }
}

document.getElementById("button").onclick = buttonOnClick


// getBMI(parseInt(document.getElementById(feet)),
// parseInt(document.getElementById(inches)), parseInt(document.getElementById(weight)))

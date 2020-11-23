var bodyMassIndex;
function BMI(Weight, Height) {
    bodyMassIndex = Weight / (Height * Height);
    if (bodyMassIndex => 40) {
        console.log("Morbidly Obese")
    } else if (bodyMassIndex > 25) {
        console.log("Obese");
    }

    return bodyMassIndex;
}

console.log(BMI(92, 1.88));
function isInputString(input) {
    if (typeof input === "string") {
        console.log(input + " is a string")
    } else if (input !== "string"){
        console.log(input + " is not a string")
    }
    return "";
}

console.log(isInputString(5));
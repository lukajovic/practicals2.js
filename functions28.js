function vowelNumber(string) {
    counter = 0;

    for (let index = 0; index < string.length; index++) {

        if (string[index] === "a" || string[index] === "e" || string[index] === "i" || string[index] === "o" || string[index] === "u" || string[index] === "A" || string[index] === "E" || string[index] === "I" || string[index] === "O" || string[index] === "U") {
            counter++;
        }

    }
    return counter;
}

console.log(vowelNumber("EeIi"));
var string = "";
var newArr = [];

function arrayOfDigits(num) {
    if (typeof num === "number") {
        string = num + '';
    }

    for (let index = 0; index < string.length; index++) {
        newArr[index] = string[index];

    }
    return newArr;
}

console.log(arrayOfDigits(4646));

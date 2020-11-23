var input = 4;
var result = "";

if (typeof input === "number" && input % 2 == 0) {
    result = input / 2;
    console.log(input + " divisioned by 2 is " + result);
} else console.log("X");
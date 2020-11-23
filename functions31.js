var farenheit;
function convert(celsius) {
    if (typeof celsius === "number") {
       farenheit = celsius * (9/5) + 32;
    }
    return farenheit;

} 

console.log(convert(30));
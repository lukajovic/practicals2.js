var myArray = [5, 6, 7, 4, 6];
var sum = 0;
var product = 1;

for (let index = 0; index < myArray.length; index++) {

    sum += myArray[index];
    product *= myArray[index];
}
console.log(sum, product);
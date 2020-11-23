var result = "";
function maxElement(array) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] > array.length) {
            result = array[index];
        }

    } return result;

}

console.log(maxElement([5, 1, 1, 4, 32, 55, 2, 4]));
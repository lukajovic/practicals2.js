function positiveMultiply(array) {
    newArray = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index] > 0) {
            newArray[index] = array[index] * 2;
        } else newArray[index] = array[index];

    } return newArray;

}

console.log(positiveMultiply([5, -1, 3, -4]));
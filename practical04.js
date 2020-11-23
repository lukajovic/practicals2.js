function doesElementExist(array, number) {
    if (array.length < 1 || !number) {
        return false;
    }

    for (let index = 0; index < array.length; index++) {
        // var element = array[index]
        if (array[index] === number) {
            return true;
        }
    } return false;

}

console.log(doesElementExist([4, 5, 3, 2, 6, 11, 54], 2));
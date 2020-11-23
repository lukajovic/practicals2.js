function smallestElement(input) {
    var object = {
        minvalue: Infinity,
        minLastIndex: 0,
    }

    for (let index = 0; index < input.length; index++) {
        if (object.minvalue > input[index]) {
            object.minvalue = input[index]
        }
    }
    object.minLastIndex = input.lastIndexOf(object.minvalue)   
    
    return object
}

console.log(smallestElement([1, 4, -2, 11, 8, 1, -2, 3]));
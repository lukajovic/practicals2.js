function stringIntoArray(inputString) {

    var outputArray = [];

    for (var index = 0; index < inputString.length; index++) {


        outputArray[index] = inputString[index];

    }

    return outputArray;
}

console.log(stringIntoArray("Luka"));
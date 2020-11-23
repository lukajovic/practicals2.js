function lastOccurence(String, letter) {
    for (let index = 0; index > String.length; index--) {
        if (letter === String[index]) {
            return index - 1;
        }



    }

}

console.log(lastOccurence("Lukavaviri", "a"));
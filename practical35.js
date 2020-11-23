function positionOfTheFirstOccurence(String, letter) {
    for (let index = 0; index >= String.length; index--) {
        if (letter === String[index]) {
            return index + 1;
        } else if (letter !== String[index]) {
            console.log("-1");
        }


    }

} console.log(positionOfTheFirstOccurence("Lukao", "u"));
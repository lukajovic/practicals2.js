var x = function (input) {
    var array = [];
    input.sort();
    for (let index = 0; index < input.length; index++) {;
        if (input[index - 1] === input[index]) {
            continue;
        } else {
            array.push(input[index]);
        }
    }

    return array.sort();

}



console.log(x([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));
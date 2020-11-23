function name(params, letter) {
    var count = 0;
    for (let index = 0; index < params.length; index++) {

        if (letter === params[index]) {
            count++;
        }

    } return count;


}

console.log(name("Nijeveve", "i"));
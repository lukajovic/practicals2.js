function lessGiven(array, number) {
    var newArr = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index] < number) {
            newArr.push(array[index]);
        }

    }

    return newArr;

}

console.log(lessGiven([2, 3, 8, -2, 11, 4], 6));

function goPro(niz) {
    var Arr = [];
    for (let index = 0; index < niz.length; index++) {

        if (niz[index].substring(0, 3) === "pro" || niz[index].substring(0, 3) === "Pro") {
            Arr.push(niz[index]);


        }


    }
    return Arr;

}

console.log(goPro(["JavaScript", "Programming", "fun", "product"]));


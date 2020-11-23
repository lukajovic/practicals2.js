var newArr = [];
var newArr2 = [];
var arr = [];
function combine(a1, a2) {
    for (let index = 0; index < a1.length; index++) {
        newArr[index * 2] = a1[index];

    }
    for (let j = 0; j < a2.length; j++) {
        newArr2[j] = a2[j];
    }
    arr= newArr + a2;

    return arr;

}

console.log(combine("ABC", "123"));
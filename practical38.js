function convert(str1) {
    var myArr = [];

    for (let index = 0; index < str1.length; index++) {

        if (str1[index] === " ") {
            myArr[index] = null;
        } else (myArr[index] = str1[index]);





    } return myArr;

}

console.log(convert("Luka Jovic"));
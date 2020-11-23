function elementInArray(array, element) {

    for (let index = 0; index < array.length; index++) {
        if (element === array[index]) {
            console.log("Yes")
        } else if (element !== array[index]) {
            console.log("No");
        } if(element === "undefined"){
            element=1;
        }
    }

}



console.log(elementInArray([5, 6, 3, 4], 4));
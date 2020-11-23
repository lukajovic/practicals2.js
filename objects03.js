var x = function (input){
    var array= [];
    for (let index = 0; index < input.length; index++) {
        array.push(input[index]);
        array.push(input[index]);
        
    }
        return array;
}

console.log(x([2, 4, 7, 11, -2, 1]));

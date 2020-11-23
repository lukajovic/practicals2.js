function DoesItHaveThreeDigits(number) {
    if(number>99 && number<=999) {
        return "It is a fucking three digit number";
    } else return "It's not a three digit number";
    
}
console.log(DoesItHaveThreeDigits(8555));
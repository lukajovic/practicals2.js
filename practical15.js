var dayNumber = 1;

switch (dayNumber) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    
        result = "It's weekday";
        break;
    case 6:
    case 7:
        result = "It's weekend" 
        break;
    default:
        result = "The number must be between 1 and 7"
        break;       
}


console.log(result);

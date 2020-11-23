function retierment(yearOfBirth, gender) {
    var currentYear = 2018;
    
    var untilRetierment = "";
    
    var classi = ""

    if (gender = "male") {

        classi = yearOfBirth + 65;

        untilRetierment = classi - currentYear;

    } return untilRetierment; 
    
    if (gender = "female") {

        classi = yearOfBirth + 60;
        
        untilRetierment = classi - currentYear;
    
    } return untilRetierment;

}



console.log(retierment(1960, "female"));

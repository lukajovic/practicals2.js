var students = [['David', 80], ['Marko', 77], ['Dany', 88], ['John', 95], ['Thomas', 68]];
var averageMark = 0;

for (let index = 0; index < students.length; index++) {
    averageMark += students[index][1] / students.length;
} if (averageMark < 60) {
    console.log("Nevalja");
} else if (averageMark < 70) {
    console.log("Nije lose");

} else if (averageMark < 80) {
    console.log("Ok je");
} else if (averageMark < 100) {
    console.log("Svaka cast");
} else if (averageMar > 100) {
    console.log("Previse pijes covece");
}




console.log(averageMark);
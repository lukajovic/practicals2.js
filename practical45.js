function Person(name, surname) {

    this.name = name;

    this.surname = surname;

    this.id = Math.floor(Math.random() * (100000 - 9999) + 9999);

}

Person.prototype.getId = function () {
    
    return this.name + " " + this.surname;
}

function Employee(name, surname, employeeId, salary) {

    Person.call(this, name, surname);

    this.employeeId = employeeId;

    this.salary = salary;
}

function Professor(name, surname, employeeId, salary, officeNumber) {

    Employee.call(this, name, surname, employeeId, salary);

    this.officeNumber = officeNumber;



}

function Exam(subject, professor, date, grade) {

    this.subject = subject;

    this.professor = professor;

    this.date = new Date(date);

    this.grade = grade || null;


}

function Student(name, surname, indexNumber, status, listOfPassedExames) {
    
    Person.call(this, name, surname);
    
    this.indexNumber = indexNumber;
    
    this.status = status;
    
    this.listOfPassedExames = listOfPassedExames;
}

function Faculty(name, listOfStudents, numberOfTenGrades) {
    
    this.name = name;

    this.listOfStudents = [];

    this.numberOfTenGrades = [];
    
}

var luka = new Person("Luka", "Jovic");

var lukaEmpoyee = new Employee("Luka", "Jovic", "532A", 255);

var lukaProfessor = new Professor("Marko", "Arsic", "553A", 525, "525A");

var exam = new Exam("Matematika", lukaProfessor, "25 Aug 2017", "A");

var student = new Student("Luka", "Jovic", 55, "active", ["Matematika", "Fizika"]);

var fakultet = new Faculty("ETF", ["Marko", "Milan", "ivica"], [10, 6, 5]);

console.log(fakultet);
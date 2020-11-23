(function () {

    console.log("Hi");


    function Person(name, surname) {
        this.name = name;
        this.surname = surname;

    }

    Person.prototype.getData = function () {
        return this.name + " " + this.surname;

    }

    Person.prototype.getSalary = function () {
        return this.salary;
    }

    Person.prototype.increaseSalary = function () {
        return this.salary = this.salary + (this.salary / 10);

    }


    function Employee(name, surname, specialization, salary) {
        Person.call(this, name, surname);
        this.specialization = specialization;
        this.salary = salary;

    }

    Employee.prototype.getSpecialization = function () {
        return this.specialization;
    }

    function Manager(name, surname, department, salary) {
        Person.call(this, name, surname);
        this.department = department;
        this.salary = salary;

    }

    Manager.prototype.getDepartment = function () {
        return this.department;
    }

    Manager.prototype.changeDepartment = function (param) {
        this.department = params;
    }

    Employee.prototype = Object.create(Person.prototype);
    Employee.prototype.constructor = Employee;
    Manager.prototype = Object.create(Person.prototype);
    Manager.prototype.constructor = Manager;

    var dejan = new Employee("Dejan", "Jurisic", "Gaming", 1500);
    var luka = new Manager("Luka", "Jovic", "IT Manager", 4500);


    dejan.increaseSalary();
    console.log(dejan);

    
    

    
    
    


})();
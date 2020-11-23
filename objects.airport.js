"use strict";
(function () {





    function Person(name, surname) {
        this.name = name;
        this.surname = surname;

    }

    Person.prototype.getData = function () {
        return this.name + " " + this.surname;
    }

    function Seat(number, category) {
        this.number = number || Math.round((Math.random() * (100 - 10) + 10));
        this.category = category || "e";

    }
    Seat.prototype.getData = function () {
        return this.number + ", " + this.category.toUpperCase() + ",";
    }

    function Passenger(person, seat) {
        this.person = person;
        this.seat = seat;

    }
    Passenger.prototype.getData = function () {
        return this.seat.getData() + " " + this.person.getData();
    }

    function Flight(relation, date) {
        this.relation = relation;
        this.date = new Date(date);
        this.passengerList = [];


    }

    Flight.prototype.addPassenger = function (passenger) {
        this.passengerList.push(passenger);
    }

    Flight.prototype.getData = function () {
        return this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear() + "," + this.relation;

    }

    function Airport() {
        this.name = "Nikola Tesla";
        this.listOfFlights = [];








    }

    Airport.prototype.countP = function () {
        var counter = 0;
        this.listOfFlights.forEach(function (element) {
            counter += element.passengerList.length;

        })

        return counter;




    }

    Airport.prototype.extract = function () {
        var sum = "";
        for (var i = 0; i < this.listOfFlights.length; i++) {
            var flight = this.listOfFlights[i];
            sum += flight.getData() + "\n";
            for (var j = 0; j < flight.passengerList.length; j++) {
                var passenger = flight.passengerList[j];
                sum += passenger.getData() + "\n";
            }
        }
        return sum;

    }

    Airport.prototype.getData = function () {
        return "Airport: " + this.name + "," + " total passengers : " + this.countP() + "\n" + this.extract();



    }

    Airport.prototype.addFlight = function (flight) {

        if (!flight) {
            throw new Error()
        }


        this.listOfFlights.push(flight);
    }

    function createFlight(relation, date) {
        return new Flight(relation, date);
    }

    function createPassenger(person, seat) {
        return new Passenger(person, seat);
    }

    var airportNikolaTesla = new Airport();

    var nyBg = createFlight("Belgrade - New York", "Oct 25 2017");
    var baBg = createFlight("Barcelona - Belgrade", "Nov 11 2017");

    var john = new Person("John", "Snow");
    var johnSeat = new Seat(1, "b");
    var johnPassenger = createPassenger(john, johnSeat);
    var cersei = new Person("Cersei", "Lannister");
    var cerseiSeat = new Seat(2, "b");
    var cerseiPassenger = createPassenger(cersei, cerseiSeat);
    var daenerys = new Person("Daenerys", "Targaryen");
    var daenerysSeat = new Seat(14);
    var daenerysPassenger = createPassenger(daenerys, daenerysSeat);
    var tyrion = new Person("Tyrion", "Lannister");
    var tyrionSeat = new Seat();
    var tyrionPassenger = createPassenger(tyrion, tyrionSeat);



    nyBg.addPassenger(johnPassenger);
    nyBg.addPassenger(cerseiPassenger);
    baBg.addPassenger(daenerysPassenger);
    baBg.addPassenger(tyrionPassenger);

    try {
        airportNikolaTesla.addFlight(nyBg);
        airportNikolaTesla.addFlight(baBg);
    } catch (err) {
        console.log("Funkcija se nije izvrsila.");

    }

    console.log(airportNikolaTesla.getData());










})();
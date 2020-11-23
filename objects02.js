var luka = {
    name: 'Luka',
    age: 27,
    status: 'student',
    occupation: function (params) {
        return 'I am ' + luka.status + " of BIT.";
    },
    work: function (a){
        return 'Today Ive been sitting for ' + a + " hours."
    }    
};

console.log(luka.occupation());

console.log(luka.work(10));
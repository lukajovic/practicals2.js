// {name: ‘apples’, price: 100}, 
// {name: ‘milk’, price: 80}, 
// {name:’bananas’, price: 150}

var apples = {
    name: "Apples",
    price: 100,
}
var milk = {
    name: "Milk",
    price: 80,
}
var bananas = {
    name: "Bananas",
    price: 150,
}


function totalCost() {
    return apples.price + milk.price + bananas.price;
}


console.log(totalCost());

function averageCost() {
    var price = (apples.price + milk.price + bananas.price) / 3;
    return price.toPrecision(3);
}

console.log(averageCost());

function mostExp() {
    if (apples.price > bananas.price && apples.price > milk.price) {
        return apples.name;
    }
    if (bananas.price > apples.price && bananas.price > milk.price) {
        return bananas.name;

    } else if (milk.price > bananas.price && milk.price > apples.price) {
        return milk.name;
    }

}

console.log(mostExp());
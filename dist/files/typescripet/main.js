"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Game {
    title;
    price;
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
// Start Edit And Fix
class RPG extends Game {
    rate;
    constructor(title, price, rate) {
        super(title, price);
        this.rate = rate;
    }
    ;
    getLocation() {
        return `Discount`;
    }
    getDiscount() {
        return `Location`;
    }
}
class Action extends Game {
    rate;
    company;
    constructor(title, price, rate, company) {
        super(title, price);
        this.rate = rate;
        this.company = company;
    }
    ;
    getLocation() {
        return `Discount`;
    }
    getDiscount() {
        return `Location`;
    }
}
// End Edit And Fix
// Do Not Edit
let gameOne = new RPG("Ys", 100, 10);
let gameTwo = new Action("Uncharted", 90, 15, "Sony");
console.log(gameOne.title); // "Ys"
console.log(gameOne.price); // 100
console.log(gameOne.rate); // 10
console.log(gameOne.getDiscount()); // "Discount"
console.log(gameOne.getLocation()); // "Location"
console.log(gameTwo.title); // "Uncharted"
console.log(gameTwo.price); // 90
console.log(gameTwo.rate); // 15
console.log(gameTwo.company); // "Sony"
console.log(gameTwo.getDiscount()); // "Discount"
console.log(gameTwo.getLocation()); // "Location"
function showTypes(strin = "Nothing", numbe = "Nothing", boolea = "Nothing") {
    return `${strin} - ${numbe} - ${boolea}`;
}
// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes("String")); // String - Nothing - Nothing
console.log(showTypes("String", 100)); // String - 100 - Nothing
console.log(showTypes("String", 100, true)); // String - 100 - true
// _________________________________*****************______________________________________
// Write Class Code Here
// type Type = string | number | boolean
class Gam {
    title;
    price;
    constructor(title, price) {
        this.title = title;
        this.price = price;
        if (typeof (title) != 'string') {
            console.log(`There's A Game Called ${title}`);
        }
        ;
    }
    ;
    getDiscount(input) {
        if (typeof (input) != 'number') {
            console.log(`The Discount Is ${input}`);
        }
        else {
            console.log(input);
        }
    }
}
// Do Not Edit Here
let game1 = new Gam("Ys", 100);
let game2 = new Gam(2064, 100); // There's A Game Called "2064"
console.log(game1.title); // "Ys"
console.log(game2.price); // 100
game1.getDiscount('50'); // "The Discount Is 50"
console.log(gameTwo.title); // 2064
console.log(gameTwo.price); // 100
game2.getDiscount(80); // "The Discount Is 80"
//# sourceMappingURL=main.js.map
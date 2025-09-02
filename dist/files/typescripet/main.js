"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Do Not Edit The Code Below
let user = {
    id: 100,
    username: "Alhussini",
    state: true,
    getName() {
        return this.username;
    }
};
user.id = 200;
user.id = "200"; // Type 'string' is not assignable to type 'number'
user.state = false; // Cannot assign to 'state' because it is a read-only property
// Do Not Edit The Code Below
let client = {
    id: 100,
    username: "Alhussini",
    active: true,
    discount: 10,
    getPrice(price) {
        return price - this.discount;
    }
};
console.log(`Client Id Is ${client.id}`);
console.log(`Client Name Is ${client.username}`);
console.log(`Client Has Dicount ${client.discount}`);
console.log(`Client Product After Discount Is ${client.getPrice(200)}`);
let creature = {
    title: "Superman",
    weight: 100,
    age: 500,
    canFly: true,
    bodyType: "Iron",
    origin: "Krypton"
};
console.log(creature.title);
console.log(creature.weight);
console.log(creature.age);
console.log(creature.canFly);
console.log(creature.bodyType);
console.log(creature.origin);
// -------------------------******************-----------------------------
// Create Class Here
class Player {
    details;
    Name;
    Type;
    Level;
    Boolean;
    constructor(name, type, level, boolean = "") {
        this.Name = name;
        this.Type = type;
        this.Level = level;
        this.Boolean = boolean;
        let prefix = this.Boolean === true ? "VIP" : "";
        this.details = function () {
            return `${prefix} ${this.Name}, Type Is ${this.Type} Level is ${this.Level}`;
        };
    }
    ;
}
// Do Not Edit The Code Below
let player1 = new Player("Osama", "Mage", 90, true);
let player2 = new Player("Shady", "Archer", "85", false);
let player3 = new Player("Amr", "Fighter", 50, true);
let player4 = new Player("Mahmoud", "Assassin", 77);
console.log(player1.details()); // VIP Osama, Type Is Mage Level Is 90
console.log(player2.details()); // Shady, Type Is Archer Level Is 85
console.log(player3.details()); // VIP Amr, Type Is Fighter Level Is 50
console.log(player4.details()); // Mahmoud, Type Is Assassin Level Is 77
// ----------------------------********************------------------------------
class Shorten {
    id;
    username;
    title;
    // public id: number;
    // public username: string;
    // protected title: string;
    constructor(id, username, title) {
        this.id = id;
        this.username = username;
        this.title = title;
        // this.id = id;
        // this.username = username;
        // this.title = title;
    }
    ;
}
let teste = new Shorten(100, "Elzero", "Developer");
console.log(teste.id);
console.log(teste.username);
// ------------------------------**************--------------------------
class Show {
    _title;
    get title_1() {
        return this._title;
    }
    set title_1(value) {
        this._title = value;
    }
    constructor(_title) {
        this._title = _title;
    }
}
let tester = new Show("Elzero");
console.log(tester.title_1); // Property 'title' does not exist on type 'Show'
tester.title_1 = "Osama"; // Property 'title' does not exist on type 'Show'
console.log(tester.title_1); // Property 'title' does not exist on type 'Show'
// Create Your Class Here
class Playe {
    id;
    title;
    level;
    constructor(id, title, level) {
        this.id = id;
        this.title = title;
        this.level = level;
    }
    ;
    logIn() {
        console.log(`Logged In`);
    }
    ;
    logOut(msg) {
        console.log(`Logged Out ${msg}`);
    }
}
let playe2 = new Playe(100, "Elzero", 95);
console.log(playe2.id); // 100
console.log(playe2.title); // "Elzero"
console.log(playe2.level); // 95
playe2.logIn; // Logged In
playe2.logOut("Good Bye"); // Logged Out, Good Bye
//# sourceMappingURL=main.js.map
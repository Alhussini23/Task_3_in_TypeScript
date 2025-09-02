// Edit The Interface To Fix The Problems
interface Member {
  id: number | string; //Modified
  username: string;
  country?: string; //Modified
  state: boolean; //Modified
  getName : ()=> string //Modified
}

// Do Not Edit The Code Below
let user: Member = { // Property 'country' is missing in type
  id: 100,
  username: "Alhussini",
  state: true,
  getName() { // 'getName' does not exist in type 'Member'
    return this.username;
  }
}

user.id = 200;
user.id = "200"; // Type 'string' is not assignable to type 'number'
user.state = false; // Cannot assign to 'state' because it is a read-only property

// ------------------------------******************---------------------------------------
// Create Interface Here
interface Client {
  id : number;
  username : string;
  active : boolean;
  discount : number;
  getPrice : (price: number)=> number;
}
// Do Not Edit The Code Below
let client: Client = {
  id: 100,
  username: "Alhussini",
  active: true,
  discount: 10,
  getPrice(price: number) {
    return price - this.discount;
  }
}

console.log(`Client Id Is ${client.id}`);
console.log(`Client Name Is ${client.username}`);
console.log(`Client Has Dicount ${client.discount}`);
console.log(`Client Product After Discount Is ${client.getPrice(200)}`);

// -----------------------------*****************-----------------------------------
// Do Not Edit The Code Below
interface Man {
  title: string;
  weight: number;
  age: number;
}

interface Bird {
  canFly: boolean;
}
interface Superman extends Man,Bird{
  bodyType : string;
  origin : string
} 
let creature: Superman = {
  title: "Superman",
  weight: 100,
  age: 500,
  canFly: true,
  bodyType: "Iron",
  origin: "Krypton"
}

console.log(creature.title)
console.log(creature.weight)
console.log(creature.age)
console.log(creature.canFly)
console.log(creature.bodyType)
console.log(creature.origin)

// -------------------------******************-----------------------------
// Create Class Here
class Player{
  details : ()=> string
  Name : string;
  Type : string;
  Level : number | string;
  Boolean : boolean | string;
  constructor(name : string ,type : string ,level : number | string , boolean : boolean | string = ""){

    this.Name = name;
    this.Type = type;
    this.Level = level;
    this.Boolean = boolean;
    let prefix = this.Boolean === true ? "VIP" : "";
    this.details =function(){

      return `${prefix} ${this.Name}, Type Is ${this.Type} Level is ${this.Level}`
    };
  };
  
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
  // public id: number;
  // public username: string;
  // protected title: string;
  constructor (public id: number, public username: string, protected title: string) {
    // this.id = id;
    // this.username = username;
    // this.title = title;
  };
}

let teste = new Shorten(100, "Elzero", "Developer");

console.log(teste.id);
console.log(teste.username);

// ------------------------------**************--------------------------
class Show {
  public get title_1(): string {
    return this._title;
  }
  public set title_1(value: string) {
    this._title = value;
  }
  constructor (private _title: string) {}
}

let tester = new Show("Elzero");

console.log(tester.title_1); // Property 'title' does not exist on type 'Show'
tester.title_1 = "Osama"; // Property 'title' does not exist on type 'Show'
console.log(tester.title_1); // Property 'title' does not exist on type 'Show'

// --------------------------------********************---------------------------
interface Play {
  id: number;
  title: string;
  level: number | string;
  logIn(): void;
  logOut(msg: string): void;
}

// Create Your Class Here
class Playe implements Play {
  constructor(public id : number ,public title : string ,public level : number ){};

  logIn(): void{
    console.log(`Logged In`)
  };
  logOut(msg: string): void{
    console.log(`Logged Out ${msg}`)
  }  
}  


let playe2 = new Playe(100, "Elzero", 95);

console.log(playe2.id); // 100
console.log(playe2.title); // "Elzero"
console.log(playe2.level); // 95
playe2.logIn // Logged In
playe2.logOut("Good Bye"); // Logged Out, Good Bye

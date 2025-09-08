// Do Not Edit
type numandstring = number | string;

abstract class Game {
  constructor(public title: string, public price: number) {}
  abstract getLocation() : string;
  abstract getDiscount() : string;
}

// Start Edit And Fix
class RPG extends Game {
  constructor(title: string, price: number, public rate: numandstring) {
    super(title,price);
    
  };
  getLocation() : string{
    return `Discount`
  }
  getDiscount() : string{
    return `Location`
  }
}

class Action extends Game {
    constructor(title: string, price: number , public rate: numandstring , public company : string) {
        super(title,price)
    };
    getLocation() : string{
      return `Discount`
    }
    getDiscount() : string{
      return `Location`
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

// __________________________*****************________________________________
// Write Function Code Here
type Type = string | number | boolean;
function showTypes<T = Type ,R = Type ,B = Type>(strin : T |string = "Nothing", numbe :R | number | string = "Nothing", boolea : B | boolean | string = "Nothing"){
  return `${strin} - ${numbe} - ${boolea}`
}
// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes<string>("String")); // String - Nothing - Nothing
console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true

// _________________________________*****************______________________________________
// Write Class Code Here
// type Type = string | number | boolean
class Gam <T = string | number | boolean>{
  constructor(public title? : T ,public price? : number ){
    if (typeof(title) != 'string'){
      console.log(`There's A Game Called ${title}`)
    }; 
  };
  getDiscount(input : T) :void{
    if (typeof(input) != 'number'){
      console.log(`The Discount Is ${input}`)
    }
    else{

      console.log(input)
    }
  }
}
// Do Not Edit Here
let game1 = new Gam<string>("Ys", 100);
let game2 = new Gam<number>(2064, 100); // There's A Game Called "2064"

console.log(game1.title); // "Ys"
console.log(game2.price); // 100
game1.getDiscount('50'); // "The Discount Is 50"

console.log(game2.title); // 2064
console.log(game2.price); // 100
game2.getDiscount(80); // "The Discount Is 80"
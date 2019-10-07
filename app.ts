let hobbies: string[] = ["Hoops", "MMA"];

// Tuple
let address:[number, string] = [99, "Super Street"];

// Enum
enum Color {
  Black,
  Green = 1000,
  Blue
}

let myColor: Color = Color.Blue;

console.log(myColor);

// Functions

let myName:string = "Ricardo";

function returnMyName():string {
  return myName;
}

console.log(returnMyName());

// Void

function sayHey():void {
  console.log("Heyyyyyy");
}

// Argument Types

function multiply(val1:number, val2:number): number {
  return val1 * val2;
}

console.log(multiply(4, 20));

// function types
let myMultiply: (v1: number, v2: number) => number;

myMultiply = multiply;
console.log(myMultiply(5, 9));

// objects
let userData: { name:string, age:number } = {
  name: "Ric",
  age: 40
}

userData = {
  name: "Rude",
  age: 60
}

console.log(userData);

// Comlex Object
let complex: { data: number[], output: (all: boolean) => number[]} = {
  data: [100, 3.99, 10],
  output: function (all: boolean): number[] {
    return this.data;
  }
}

// Type Alias

type Complex = { data: number[], output: (all: boolean) => number[] };

let complex2: Complex = {
  data: [100, 3.99, 10],
  output: function (all: boolean): number[] {
    return this.data;
  }
}

// Union Types

let myRealRealAge:number | string = "40";
myRealRealAge = 45;

// Check Types
let finalVal = 3000;
if (typeof finalVal == "number") {
  console.log("Final value is a number")
}

// Never Type

function neverReturns():never {
  throw new Error('An error!');
}

// Nullable Types
let canBeNull:number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny:number|null = null;
canThisBeAny = 111111;
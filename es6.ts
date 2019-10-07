// Arrow Functions
console.log("ARROW FUNCS")
const addNumbers = function (num1: number, num2: number): number {
  return num1 + num2;
}

console.log(addNumbers(10, 2000));

const multiplyNums = (num1: number, num2: number):number => num1 * num2;

console.log(multiplyNums(2300, 400));

// Default Parameters

const countdown = (start:number = 12):void => {
  while (start > 0) {
    console.log("num: ", start);
    start--;
  }
  console.log("Done!", start);
}

countdown(15);

// Rest & Spread
console.log("REST & SPREAD");

const numbaz:number[] = [1, 10, 100, 1000];

// Spread Operator ... spreads array into single values
console.log("Max Value", Math.max(...numbaz));


// Rest Operator ... opposite of Spread; turns arguments of functions into an array
function makeArr(name:string, ...args: number[]):any[] {
  return [name, ...args];
}

console.log("New Arr:", makeArr("Ricardo", 3, 5, 6));

function printInfo(...info: [string, number]):void {
  console.log("Mi nombre es " + info[0] + " yi mi " + info[1] + " years old!");
}

printInfo("Ricardo", 33);

// Destructuring
console.log("DESTRUCTURING");

const maHobbies:string[] = ["Coding", "MMA"];

const [hobby1, hobby2] = maHobbies;

console.log(hobby1);
console.log(hobby2);

const ud = { un: "ricardojames51", pw: "password"};

const { un: newUN, pw: newPW } = ud;

console.log("un:", newUN, "pw:", newPW);

// Template Literals

const me:string = "Ric";

const greeting = `I'm ${me}
and I want to save the 
World!!!!
`

console.log("greeting", greeting);
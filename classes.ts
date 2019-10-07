class Person {
  name:string;
  private type:string; // can only access from this object
  protected age:number = 50; // can access from this object and any object that inherits from this object
  constructor(name:string, public username:string) {
    this.name = name;
  }
  printAge() {
    console.log(this.age);
    this.setType("Not Good");
  }
  private setType(type:string) {
    this.type = type;
    console.log(this.type);
  }
}

const human = new Person("Ricardo", "ricardojames51");

console.log(human.name, human.username);

human.printAge();
// human.setType("Cool"); // won't work because setType is private method

// INHERITANCE
class Neji extends Person {
  // name = "Rico";
  constructor(username:string) {
    super("Neji", username);
  }
}

const neji = new Neji("bykugan51");

console.log(neji);

// GETTERS & SETTERS
class Plant {
  private _species: string = "Default Val";

  get species() {
    return this._species;
  }

  set species(value:string) {
    if (value.length > 3) {
      this._species = value;
    } else {
      this._species = "Default Val";
    }
  }
}

let plant = new Plant();
console.log(plant.species);
plant.species = "Poison Ivy";
console.log(plant.species);

// STATIC PROPERTIES & METHODS
class Helpers {
  static PI:number = 3.14;
  static calcCircum(diameter:number):number {
    return this.PI * diameter;
  }
}

console.log(2 * Helpers.PI);
console.log(Helpers.calcCircum(88));

// ABSTRACT CLASSES - can only be inherited from

abstract class Project {
  projectName:string = "Default Again";
  budget:number = 8888;

  abstract changeName(name:string):void;

  calcBudget() {
    return this.budget * 2;
  }
}

class ITProject extends Project {
  changeName(name:string):void {
    this.projectName = name;
  }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName("Supa IT Proj");
console.log(newProject);

// PRIVATE CONSTRUCTORS

class OnlyOne {
  private static instance: OnlyOne;

  private constructor(public readonly name:string) {}

  static getInstance() {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne(`The Only One`);
    }
    return OnlyOne.instance;
  }
}

// let wrong = new OnlyOne(`The Only One`);
let right = OnlyOne.getInstance();
console.log(right);
console.log(right.name);
// right.name = "Sumptin Else";

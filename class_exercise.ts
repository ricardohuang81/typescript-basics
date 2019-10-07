class Car {
  name:string;
  acceleration:number = 0;
  constructor(name:string) {
    this.name = name;
  }
  honk() {
    console.log("Toooooooooot!");
  }
  accelerate(speed:number) {
    this.acceleration = this.acceleration + speed;
  }
}

const ka = new Car("Prius Black");
console.log(ka);
ka.honk();
console.log(ka.acceleration);
ka.accelerate(50);
console.log(ka.acceleration);
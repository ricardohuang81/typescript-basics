"use strict";
var Car = /** @class */ (function () {
    function Car(name) {
        this.acceleration = 0;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log("Toooooooooot!");
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var ka = new Car("Prius Black");
console.log(ka);
ka.honk();
console.log(ka.acceleration);
ka.accelerate(50);
console.log(ka.acceleration);
//# sourceMappingURL=class_exercise.js.map
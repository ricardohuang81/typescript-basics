"use strict";
var hobbies = ["Hoops", "MMA"];
// Tuple
var address = [99, "Super Street"];
// Enum
var Color;
(function (Color) {
    Color[Color["Black"] = 0] = "Black";
    Color[Color["Green"] = 1000] = "Green";
    Color[Color["Blue"] = 1001] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
// Functions
var myName = "Ricardo";
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// Void
function sayHey() {
    console.log("Heyyyyyy");
}
// Argument Types
function multiply(val1, val2) {
    return val1 * val2;
}
console.log(multiply(4, 20));
// function types
var myMultiply;
myMultiply = multiply;
console.log(myMultiply(5, 9));
// objects
var userData = {
    name: "Ric",
    age: 40
};
userData = {
    name: "Rude",
    age: 60
};
console.log(userData);
// Complex Object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// Union Types
var myRealRealAge = "40";
myRealRealAge = 45;
// Check Types
var finalVal = 3000;
if (typeof finalVal == "number") {
    console.log("Final value is a number");
}
// Never Type
function neverReturns() {
    throw new Error('An error!');
}
// Nullable Types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canThisBeAny = null;
canThisBeAny = 111111;
//# sourceMappingURL=app.js.map
"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// Arrow Functions
console.log("ARROW FUNCS");
var addNumbers = function (num1, num2) {
    return num1 + num2;
};
console.log(addNumbers(10, 2000));
var multiplyNums = function (num1, num2) { return num1 * num2; };
console.log(multiplyNums(2300, 400));
// Default Parameters
var countdown = function (start) {
    if (start === void 0) { start = 12; }
    while (start > 0) {
        console.log("num: ", start);
        start--;
    }
    console.log("Done!", start);
};
countdown(15);
// Rest & Spread
console.log("REST & SPREAD");
var numbaz = [1, 10, 100, 1000];
// Spread Operator ... spreads array into single values
console.log("Max Value", Math.max.apply(Math, numbaz));
// Rest Operator ... opposite of Spread; turns arguments of functions into an array
function makeArr(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return __spreadArrays([name], args);
}
console.log("New Arr:", makeArr("Ricardo", 3, 5, 6));
function printInfo() {
    var info = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        info[_i] = arguments[_i];
    }
    console.log("Mi nombre es " + info[0] + " yi mi " + info[1] + " years old!");
}
printInfo("Ricardo", 33);
// Destructuring
console.log("DESTRUCTURING");
var maHobbies = ["Coding", "MMA"];
var hobby1 = maHobbies[0], hobby2 = maHobbies[1];
console.log(hobby1);
console.log(hobby2);
var ud = { un: "ricardojames51", pw: "password" };
var newUN = ud.un, newPW = ud.pw;
console.log("un:", newUN, "pw:", newPW);
// Template Literals
var me = "Ric";
var greeting = "I'm " + me + "\nand I want to save the \nWorld!!!!\n";
console.log("greeting", greeting);
//# sourceMappingURL=es6.js.map
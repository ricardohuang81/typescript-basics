"use strict";
// Exercise - Getters & Setters
var Yuman = /** @class */ (function () {
    function Yuman() {
        this._firstName = "";
    }
    Object.defineProperty(Yuman.prototype, "firstName", {
        // call getters and setters like properties, not methods
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstName = value;
            }
            else {
                this._firstName = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Yuman;
}());
var homosapien = new Yuman();
console.log(homosapien.firstName);
homosapien.firstName = "Stephen";
console.log(homosapien.firstName);
//# sourceMappingURL=3_classes_exercise.js.map
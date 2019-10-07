"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 50; // can access from this object and any object that inherits from this object
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType("Not Good");
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var human = new Person("Ricardo", "ricardojames51");
console.log(human.name, human.username);
human.printAge();
// human.setType("Cool"); // won't work because setType is private method
// INHERITANCE
var Neji = /** @class */ (function (_super) {
    __extends(Neji, _super);
    // name = "Rico";
    function Neji(username) {
        return _super.call(this, "Neji", username) || this;
    }
    return Neji;
}(Person));
var neji = new Neji("bykugan51");
console.log(neji);
// GETTERS & SETTERS
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "Default Val";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default Val";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "Poison Ivy";
console.log(plant.species);
// STATIC PROPERTIES & METHODS
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircum = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircum(88));
// ABSTRACT CLASSES - can only be inherited from
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default Again";
        this.budget = 8888;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeName("Supa IT Proj");
console.log(newProject);
// PRIVATE CONSTRUCTORS
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne("The Only One");
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
// let wrong = new OnlyOne(`The Only One`);
var right = OnlyOne.getInstance();
console.log(right);
console.log(right.name);
// right.name = "Sumptin Else";
//# sourceMappingURL=classes.js.map
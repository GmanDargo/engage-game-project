"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal = (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal.prototype.getName = function () {
        return this.name;
    };
    return Animal;
}());
exports.Animal = Animal;
var Bunny = (function (_super) {
    __extends(Bunny, _super);
    function Bunny(attr) {
        _super.call(this, attr.name, attr.age);
        this.attr = attr;
    }
    return Bunny;
}(Animal));
exports.Bunny = Bunny;
var animal = new Animal('George', 4);
animal.getName();
var bunny = new Bunny({ name: 'fluffy', age: 10, weight: '50' });
bunny.getName();

"use strict";
var Person = (function () {
    function Person(n) {
        this.age = 30;
        this.remark = 'tmp';
        this.name = n;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + ' ' + this.name);
    };
    return Person;
}());
var user1;
user1 = new Person('Kelvin');
user1.greet('Hi there, I am - ');
console.log(user1);
//# sourceMappingURL=interface.js.map
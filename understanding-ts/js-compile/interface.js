"use strict";
var Person = (function () {
    function Person(n, p) {
        this.age = 30;
        this.remark = 'tmp';
        this.name = n;
        this.phone = p;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + ' ' + this.name);
    };
    return Person;
}());
var user1;
user1 = new Person('Kelvin', '091234596748');
user1.greet('Hi there, I am - ');
console.log(user1);
//# sourceMappingURL=interface.js.map
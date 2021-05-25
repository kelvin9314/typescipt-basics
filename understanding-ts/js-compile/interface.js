"use strict";
var Person = (function () {
    function Person(n, p) {
        this.age = 30;
        this.remark = 'tmp';
        this.name = n;
        if (p) {
            this.phone = p;
        }
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
var sum;
sum = function (n1, n2) {
    return n1 + n2;
};
//# sourceMappingURL=interface.js.map
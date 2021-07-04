"use strict";
class Person {
    constructor(n, p) {
        this.age = 30;
        this.remark = 'tmp';
        this.name = n;
        if (p) {
            this.phone = p;
        }
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
let user1;
user1 = new Person('Kelvin', '091234596748');
user1.greet('Hi there, I am - ');
console.log(user1);
let sum;
sum = (n1, n2) => {
    return n1 + n2;
};
//# sourceMappingURL=interface.js.map
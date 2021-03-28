"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var text;
text = 'kelvin';
console.log(text + " is a man");
var button = document.querySelector('button');
function clickHandler(message) {
    console.log("Clicked! " + message);
}
button.addEventListener('click', clickHandler.bind(null, 'you\'re welcome'));
var add = function (a, b) {
    if (b === void 0) { b = 1; }
    return a + b;
};
var printOut = function (output) { return console.log(output); };
printOut(add(5, 2));
printOut(add(5));
var hobbies = ['Sports', 'Cooking'];
var activeHobbies = ['Hiking'];
activeHobbies.push.apply(activeHobbies, hobbies);
var person = {
    firstName: 'Kelvin',
    age: 25
};
var copiedPerson = __assign({}, person);
var addMultiple = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (currentResult, currentValue) { return currentResult + currentValue; }, 0);
};
var addNumbers = addMultiple(5, 10, 2, 3.7);
console.log(addNumbers);
var hobby1 = hobbies[0], hobby2 = hobbies[1];
console.log(hobbies, hobby1, hobby2);
var userName = person.firstName, age = person.age;
console.log(userName, age, person);
//# sourceMappingURL=basic.js.map
"use strict";
let text;
text = 'kelvin';
console.log(`${text} is a man`);
const button = document.querySelector('button');
function clickHandler(message) {
    console.log(`Clicked! ${message}`);
}
button.addEventListener('click', clickHandler.bind(null, 'you\'re welcome'));
const add = (a, b = 1) => a + b;
const printOut = output => console.log(output);
printOut(add(5, 2));
printOut(add(5));
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);
const person = {
    firstName: 'Kelvin',
    age: 25
};
const copiedPerson = Object.assign({}, person);
const addMultiple = (...numbers) => {
    return numbers.reduce((currentResult, currentValue) => { return currentResult + currentValue; }, 0);
};
const addNumbers = addMultiple(5, 10, 2, 3.7);
console.log(addNumbers);
const [hobby1, hobby2] = hobbies;
console.log(hobbies, hobby1, hobby2);
const { firstName: userName, age } = person;
console.log(userName, age, person);
//# sourceMappingURL=app.js.map
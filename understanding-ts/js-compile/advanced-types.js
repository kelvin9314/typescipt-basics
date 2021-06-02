"use strict";
var _a;
var e1 = {
    name: 'Kelvin',
    privileges: ['create-server'],
    startDate: new Date(),
};
function addSum(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
var result = addSum('Mango', 'Water');
result.split(' ');
var fetchedUserData = {
    id: 'u1',
    name: 'kelvin',
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
var userInput = '';
var storedData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(storedData);
//# sourceMappingURL=advanced-types.js.map
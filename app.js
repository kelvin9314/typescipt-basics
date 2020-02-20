function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
// JS
// let combineValues;
// combineValues = add
// combineValues = 5
// console.log(combineValues(8,8));
// it accepts any function with two arug and both arug are number type
var combineValues;
combineValues = add;
// combineValues = printResult
console.log(combineValues(8, 8));
addAndHandle(10, 20, function (result) {
    console.log(result);
});

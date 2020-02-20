function add(n1: number, n2: number) {
  return n1 + n2
}

function printResult(num: number): void {
  console.log('Result: ' +  num);
}

printResult(add(5, 12))

// JS
// let combineValues;
// combineValues = add
// combineValues = 5
// console.log(combineValues(8,8));

// it accepts any function with two arug and both arug are number type
let combineValues: (a: number, b: number) => number;
combineValues = add
// combineValues = printResult

console.log(combineValues(8,8));
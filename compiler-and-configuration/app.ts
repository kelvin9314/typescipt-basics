let text: string

text = 'kelvin'

console.log(`${text} is a man`);

const button = document.querySelector('button')!

function clickHandler(message: string) {
  console.log(`Clicked! ${message}`)
  
}

// a comment here
button.addEventListener('click', clickHandler.bind(null, 'you\'re welcome'))

const add = (a: number, b: number = 1) => a + b

const printOut:(output: string | number) => void = output => console.log(output)

printOut(add(5,2))

printOut(add(5))

const hobbies = ['Sports', 'Cooking']
const activeHobbies = ['Hiking']

// activeHobbies.push(hobbies[0], hobbies[1])
activeHobbies.push(...hobbies)

const person = {
  firstName: 'Kelvin',
  age: 25
}

const copiedPerson = {...person}

// Rest parameters
const addMultiple = (...numbers: number[]) => {
  return numbers.reduce((currentResult, currentValue) => {return currentResult + currentValue}, 0)
}
const addNumbers = addMultiple(5, 10, 2, 3.7)
console.log(addNumbers)


const [hobby1, hobby2] = hobbies
console.log(hobbies, hobby1, hobby2)

const {firstName: userName, age} = person
console.log(userName, age, person)
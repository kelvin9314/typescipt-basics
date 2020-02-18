// const person: {
//   name: string,
//   age:  number 
// } = {
const person =  {
  name: 'Kelvin',
  age: 20,
  hobbies: ['sports', 'cooking']
}

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.localeCompare()); // it will case ERROR !
}
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
// const person =  {
  name: 'Kelvin',
  age: 20,
  hobbies: ['sports', 'cooking'],
  role: [2, 'author']
}

console.log(person.name);

// person.role.push('admin')
// person.role[1] = 10  //ERROR
// person.role = [0, 'admin', 'user'] //ERROR


for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.localeCompare()); // it will case ERROR !
}
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Kelvin',
//   age: 20,
//   hobbies: ['sports', 'cooking'],
//   role: [2, 'author']
// }

// person.role.push('admin')
// person.role[1] = 10  //ERROR
// person.role = [0, 'admin', 'user'] //ERROR

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {ADMIN=5, READ_ONLY, AUTHOR}

const person = {
  name: 'Kelvin',
  age: 20,
  hobbies: ['sports', 'cooking'],
  role: Role.ADMIN
}

if (person.role === Role.ADMIN) console.log('Is admin');


for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.localeCompare()); // it will case ERROR !
}
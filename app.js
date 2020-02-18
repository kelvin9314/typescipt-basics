var person = {
    // const person =  {
    name: 'Kelvin',
    age: 20,
    hobbies: ['sports', 'cooking'],
    role: [2, 'author']
};
console.log(person.name);
// person.role.push('admin')
// person.role[1] = 10  //ERROR
// person.role = [0, 'admin', 'user'] //ERROR
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.localeCompare()); // it will case ERROR !
}

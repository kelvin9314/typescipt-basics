// NOTE Intersection Types
type Admin = {
  name: string;
  privileges: string[];
}

type Employee = {
  name: string;
  startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Kelvin',
  privileges: ['create-server'],
  startDate: new Date(),
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// NOTE Type Guards

function addSum(a:number, b: number): number;
function addSum(a:string, b: string): string;
function addSum(a:Combinable, b: Combinable) {
  if(typeof a ==='string' || typeof b ==='string'){
    return a.toString() + b.toString()
  }
  return a + b
}
//  NOTE Function Overloads
const result = addSum('Mango', 'Water')
result.split(' ')

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInfo (emp: UnknownEmployee) {
//   console.log('Name: ' + emp.name)
//   if('privileges' in emp){
//     console.log('Privileges: ' + emp.privileges)
//   }

//   if('startDate' in emp){
//     console.log('startDate: ' + emp.startDate)
//   }
// }
// // printEmployeeInfo(e1)
// printEmployeeInfo({name: '4564', startDate: new Date()})

// class Car {
//   drive(){
//     console.log('Driving ...')
//   }
// }

// class Truck {
//   drive() {
//     console.log('Driving a Truck...')
//   }

//   loadCargo(amount: number){
//     console.log('Loading cargo ... ' + amount)
//   }
// }

// type Vehicle = Car | Truck

// const v1 = new Car()
// const v2 = new Truck()

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive()

//   if(vehicle instanceof Truck){ // this can only use in class
//     vehicle.loadCargo(100)
//   }
// }

// useVehicle(v1)
// useVehicle(v2)

// // NOTE Discriminated Unions

// interface Bird {
//   type: 'bird';
//   flyingSpeed: number;
// }

// interface Horse {
//   type: 'horse';
//   runningSpeed: number;
// }

// type Animal = Bird | Horse ;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case 'bird':
//       speed = animal.flyingSpeed
//       break;
//     case 'horse':
//       speed = animal.runningSpeed
//       break;
//   }

//   console.log('Moving with speed: ' + speed)
// }

// moveAnimal({type: 'bird', flyingSpeed: 999})

// // NOTE Type Casting

// // syntax one
// // const userInputElement = <HTMLInputElement>document.getElementById('user-input')!

// // syntax two (such as react.js)
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')! as HTMLInputElement

// userInputElement.value = 'HI there'

// // NOTE Index Properties

// interface ErrorContainer {  
//   [key: string]: string
// }

// const errorBag: ErrorContainer = {
//   email: 'Not a valid email!',
//   userName: 'Must start with a capital character'
// }

// NOTE Optional Chaining

const fetchedUserData = {
  id: 'u1',
  name: 'kelvin',
  // job: {title: 'CEO', description: 'My own company'}
}

console.log(fetchedUserData?.job?.title)

// NOTE Nullish Coalescing
const userInput = ''
const storedData = userInput ?? 'DEFAULT'
console.log(storedData)
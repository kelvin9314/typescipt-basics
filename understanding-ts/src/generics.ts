// NOTE Build-in Generics 
// const names: Array<string> = ['Kelvin', 'Peter'] // string[]
// // names[0].split(' ');

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done')
//   }, 2000);
// })

// promise.then(data => {
//   // data.split(' ')
// })

// NOTE Build our own Generics

// function merge(objA: object, objB: object){
//   return Object.assign(objA, objB)
// }
function merge<T extends object, U extends object>(objA: T, objB: U){
  return Object.assign(objA, objB)
}

const mergedObj = merge({name: 'kelvin', hobbies: ['sports']}, {age: 25})
console.log(mergedObj)

interface Lengthy{
  length: number
}

function countAndDescribe<T extends Lengthy>(element: T):[T, string]{
  let descriptionText = 'Got no value'
  if(element.length === 1){
    descriptionText = 'Got 1 element'
  }else if(element.length > 1){
    descriptionText = 'Got ' + element.length  + ' element'
  }
  return [element, descriptionText]
}

console.log(countAndDescribe('HI there!'))
// console.log(countAndDescribe(['sports', 'cooking']))
// console.log(countAndDescribe([]))


// NOTE The "keyof" Constrains
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U ){
  return 'Value: ' + obj[key]
}

console.log(extractAndConvert({name: 'Kelvin'}, 'name'))

// NOTE Generic Classes
class DataStorage<T extends string|number|boolean > {
  private data: T[] = []

  addItem(item: T){
    this.data.push(item)
  }

  removeItem(item: T){
    if(this.data.indexOf(item) === -1) return
    
    this.data.splice(this.data.indexOf(item), 1)
  }

  getItems(){
    return [...this.data]
  }
}
const textStorage = new DataStorage<string>()
textStorage.addItem('HI')
textStorage.addItem('There')
textStorage.removeItem('HI')
console.log(textStorage.getItems())

const numberStorage = new DataStorage<number>()

// const objStorage = new DataStorage<object>()
// objStorage.addItem({name: 'Kelvin'})
// objStorage.addItem({name: 'VV'})
// // ...
// objStorage.removeItem({name: 'Kelvin'})
// console.log(objStorage.getItems())

// NOTE Generics Utility Types
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal( title: string, description: string, date: Date){
  let courseGoal: Partial<CourseGoal> = {}
  courseGoal.title = title
  courseGoal.description = description
  courseGoal.completeUntil = date
  return courseGoal as CourseGoal
}

const names: Readonly<string[]> = ['Kelvin', 'Anna']
// names.push('Manu')
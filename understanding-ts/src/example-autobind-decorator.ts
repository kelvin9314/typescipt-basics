

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor){
  const originalMethod = descriptor.value
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get(){
      const boundFn = originalMethod.bind(this)
      return boundFn
    }
  }
  return adjDescriptor
}

class Printer {
  message= 'This works!'

  @Autobind
  sendMessage() {
    console.log(this.message)
  }
}

const p = new Printer()

const button = document.querySelector('button')!

// TAG JS way
// button.addEventListener('click', p.sendMessage.bind(p))

button.addEventListener('click', p.sendMessage)

// =============================================================

interface ValidateConfig {
  [property: string]: {
    [validatableProp: string]: string[]  // ['required', 'positive']
  }
}

const registeredValidators: ValidateConfig = {}

function Required(target: any, propName: string){
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    // [propName]: ['required']
    [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'required']
  }
}
function PositiveNumber(target: any, propName: string){
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    // [propName]: ['positive']
    [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'positive']

  }
}

function validate(obj: any){
  const objValidatorConfig = registeredValidators[obj.constructor.name]
  if(!objValidatorConfig) return true

  let isValid = true
  for (const prop in objValidatorConfig) {
    console.log(prop)
    for (const validator of objValidatorConfig[prop]) {
      switch ((validator)) {
        case 'required':
          isValid = isValid && !!obj[prop]
          break
        case 'positive':
          isValid = isValid && obj[prop] > 0.
          break
      }
    }
  }

  return isValid
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number){
    this.title = t
    this.price = p
  }
}

const courseForm = document.querySelector('form')!
courseForm.addEventListener('submit', event => {
  event.preventDefault()
  const titleEl = document.getElementById('title') as HTMLInputElement
  const priceEl = document.getElementById('price') as HTMLInputElement

  const title = titleEl.value  
  const price = +priceEl.value  

  const createdCourse = new Course(title, price)

  if(!validate(createdCourse)){
    alert('invalidate input, please try again !!')
    return 
  }

  console.log(createdCourse)
})
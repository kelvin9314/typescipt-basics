// Decorator in many library use uppercase 
function Logger(logString: string){
  console.log('LOGGER FACTOR')
  return function (constructor: Function) {
    console.log(logString)
    console.log(constructor)    
  }
}

function WithTemplate(template: string, hookId: string){
  console.log('TEMPLATE FACTOR')
  return function (constructor: any) {
    console.log('Rendering template')
    const hookElement = document.getElementById(hookId)
    const p = new constructor()

    if(hookElement){
      hookElement.innerHTML = template
      hookElement.querySelector('h1')!.textContent = p.name
    }
  }
}

// @Logger('LOGGING - PEOPLE')
@Logger('LOGGING')
@WithTemplate('<h1>My People Object</h1>', 'app')
class People {
  name = 'Kelvin'

  constructor(){
    console.log('Creating people object...')
  }
}
const ppl = new People()
console.log(ppl)

// NOTE --- Property Decorators

function Log(target: any, propertyName: string | Symbol){
  console.log('Property decorator!')
  console.log(target, propertyName)
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor){
  console.log('Accessor Decorator!')
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor){
  console.log('Method Decorator!')
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

function Log4(target: any, name: string | Symbol, position: number){
  console.log('Parameter Decorator!')
  console.log(target)
  console.log(name)
  console.log(position)
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number){
    if(val > 0){
      this._price = val
    }else {
      throw new Error("Invalid price - should be positive!");
    }
  }

  constructor(t: string, p : number){
    this.title = t
    this._price = p
  }
  
  @Log3
  getPriceWithTax(@Log4 tax: number){
    return this._price * (1 + tax)
  }
}
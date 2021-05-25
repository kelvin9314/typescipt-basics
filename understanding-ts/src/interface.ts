interface Phone {
  readonly phone?: string,
}
interface Named {
  readonly name: string;
  outputName?: string
}

interface Greetable extends Named, Phone {
  greet(phrase: string): void
}

interface Another {
  remark: string;
}

class Person implements Greetable, Another {
  name: string;
  phone?: string;
  age = 30;
  remark = 'tmp'

  constructor(n: string, p?: string){
    this.name = n
    if(p){
      this.phone  = p
    }
  }

  greet(phrase: string){
    console.log(phrase + ' ' + this.name)
  }
}

let user1: Greetable ;

user1 = new Person('Kelvin', '091234596748')

//  it will cause error
// user1.name = 'change here'

user1.greet('Hi there, I am - ')
console.log(user1)



// ----  Interface as function types

// type SumFn = (a: number, b: number) => number
interface SumFn {
  // anonymous function
  (a: number, b: number): number;
}

let sum: SumFn ;

sum = (n1: number, n2: number) => {
  return n1 + n2
}
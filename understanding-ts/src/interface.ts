interface Greetable {
  name: string;

  greet(phrase: string): void
}

interface Another {
  remark: string;
}

class Person implements Greetable, Another {
  name: string;
  age = 30;
  remark = 'tmp'

  constructor(n: string){
    this.name = n
  }

  greet(phrase: string){
    console.log(phrase + ' ' + this.name)
  }
}

let user1: Greetable ;

user1 = new Person('Kelvin')

user1.greet('Hi there, I am - ')
console.log(user1)
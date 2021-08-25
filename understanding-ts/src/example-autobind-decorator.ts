

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
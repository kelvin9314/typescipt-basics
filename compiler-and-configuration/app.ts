let text: string

text = 'kelvin'

console.log(`${text} is a man`);

const button = document.querySelector('button')!

function clickHandler(message: string) {
  console.log(`Clicked! ${message}`)
  
}

// a comment here
button.addEventListener('click', clickHandler.bind(null, 'you\'re welcome')
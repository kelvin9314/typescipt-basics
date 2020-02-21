let userInput: unknown
let userName: string

userInput = 5
userInput = 'Max'
// userName = userInput
if (typeof userInput === 'string') {
  userName = userInput
}

function generateError(msg: string, code: number): never {
  throw { message: msg, errorCode: code };
  // while(true) {}
}

generateError('An error occurred!', 500)
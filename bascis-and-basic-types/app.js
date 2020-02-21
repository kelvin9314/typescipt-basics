var userInput;
var userName;
userInput = 5;
userInput = 'Max';
// userName = userInput
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(msg, code) {
    throw { message: msg, errorCode: code };
}
var result = generateError('An error occurred!', 500);

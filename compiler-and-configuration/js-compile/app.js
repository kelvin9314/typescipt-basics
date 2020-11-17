"use strict";
var text;
text = 'kelvin';
console.log(text + " is a man");
var button = document.querySelector('button');
function clickHandler(message) {
    console.log("Clicked! " + message);
}
button.addEventListener('click', clickHandler.bind(null, 'you\'re welcome'));
//# sourceMappingURL=app.js.map
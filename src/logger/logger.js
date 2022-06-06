//Module 1
let url = 'https://www.google.com'

function printMyMessage(message) {
    console.log(message)    
}

function welcome() {
    console.log('Welcome to my application. I am Sarfaraj and a part of FunctionUp radon cohort')
}

module.exports.url = url
module.exports.printMessage = printMyMessage
module.exports.printWelcomeMessage = welcome
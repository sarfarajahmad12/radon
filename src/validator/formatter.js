//Module 3

function trim() {
    let name = '  Sarfaraj ahmad    '
    console.log('Trimmed name is: ',name.trim())
}

function changetoLowerCase() {
    let name = 'sArFaRaJ aHmAd'
    console.log('Name in lowercase is: ',name.toLowerCase())
}

function changeToUpperCase() {
    let name = 'sarfaraj ahmad'
    console.log('Name in uppercase is: ',name.toUpperCase())
}

module.exports.trim = trim
module.exports.changetoLowerCase = changetoLowerCase
module.exports.changeToUpperCase = changeToUpperCase                                                                         
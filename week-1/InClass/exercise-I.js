function helloAge(name, birthYear) {
    const age = 2020 - birthYear;
    const message = `Hello ${name}, you are ${age} years old`
    return message;
}

let greeting = helloAge("Giorgio", 1989)

console.log(greeting)

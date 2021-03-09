// Use the array of the people from your class
// Combine it with another array filled with the names from another class
// console.log the names in alphabetical order
// Create a function that takes a name and an array of names and returns a string. If the name is not in an array, it should return <name> is not at the class with <people in the array>. If the name is in the array, it should return <name> is at the class with <people in the array>.

let cw = ["Enia", "Keti", "Kiki", "Kris", "Elialba"];
let cm = ["Ali", "Adrian", "Artur", "Manpreet", "Manuel"];
let fullClass = cw.concat(cm);

console.log(fullClass.sort());

function findSs(name, arr) {
    if (arr.includes(name)) {
        return `${name} is in the class with ${arr.join(", ")}`;
    } else {
        return `${name} is not in the class with ${arr.join(", ")}`;
    }
}

console.log(findSs("Kiki", cw));


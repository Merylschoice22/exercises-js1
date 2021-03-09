/* CLASS DEMO */

const names = ["Daniel", "James", "Irina", "Mozafar", "Ashleigh"];

function isLongName(name) {
  return name.length > 6;
}
console.log(names.find(isLongName));
console.log(names.filter(isLongName));

// Takes an array of names
// Looks to see if your name is in the array
// If it is, return Found me!; if not, return Haven't found me :(

const group = ["Ali", "Omar", "Miguel", "Karolina", "Vanessa"];

function findMe(name, group) {
    if (group.includes(name)) {
        return `Found me!`;
    } else {
        return `Haven't found me :(`;
    }
}

console.log(findMe("Jean", group));

/* USING .find or .filter */

const group = ["Ali", "Omar", "Miguel", "Karolina", "Vanessa"];

function findMe(name, group) {
    const findMe = names.filter(arrayName) => arrayName === name):
    if (group.includes(name)) {
        return `Found me!`;
    } else {
        return `Haven't found me :(`;
    }
}

console.log(group("Jean", group));

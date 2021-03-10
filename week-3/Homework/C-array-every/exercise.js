/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];

/* .filter creates a new array filtering only the elements that meet the criteria of a function */
const studentsInGroup = group.filter((person) => {
  return students.includes(person);
  });
console.log(studentsInGroup);

/* .every checks IF every element meets the criteria of a function */
var groupIsOnlyStudents = group.every((person) => students.includes(person)); // complete this statement



/* 
function findStudents(students, group) {
  return students.includes(group);
}

var groupIsOnlyStudents = group.every((person) => students.includes(person)); // complete this statement

*/

if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students


/***** ADDITIONAL PRACTICE *****/

/*** Filter names that start with "O" ***/

/* Variable with a nested function */
const studentStartsWithO = students.filter( function thisIsMyName (name) {
  return name.startsWith("O")});

/* Function first format */
function thisIsMyName(name) {
  return name.startsWith("O");
}
const studentStartsWithO = students.filter(thisIsMyName);

console.log(studentStartsWithO)


/* filter names that end with i */
var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];

const nameEndsWithi = students.filter((name) => name.endsWith("i"));

console.log(nameEndsWithi);

/* Taking the last position of the name */

console.log(students[2].charAt(students[2].length - 1));

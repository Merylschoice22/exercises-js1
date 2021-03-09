/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];


const studentsInGroup = group.filter((person) => students.includes(person));
console.log(studentsInGroup);

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

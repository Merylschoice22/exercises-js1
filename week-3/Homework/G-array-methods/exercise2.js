/*
  Array methods - concat
  ----------------------
  The variable "everyone" should be an array containing both mentors and students.
*/

var mentors = ["Daniel", "Irina", "Rares", "Abode"];
var students = ["Rukmini", "Abdul", "Austine", "Swathi"];

var everyone = mentors.concat(students); // complete this statement
console.log(everyone);

/* AND STARTS WITH A */
console.log(`Name starts with A`);
var everyone = mentors
.concat(students)
.filter((item) => item.startsWith("A"));
console.log(everyone);

/* AND HAS A LENGTH OF 5 */
console.log(`Name starts with A and has a length of 5 letters`);
var everyone = mentors
.concat(students)
.filter((item) => item.startsWith("A"))
.filter((item) => item.length === 5);




/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log(everyone);

/* 
  EXPECTED RESULT
  ---------------
  ["Daniel", "Irina", "Rares", "Rukmini", "Abdul", "Austine", "Swathi"]
*/

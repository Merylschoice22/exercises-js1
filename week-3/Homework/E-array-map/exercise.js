// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
var by100 = numbers.map(num => num * 100);

console.log(`Numbers multiplied by 100: ${by100}`);

/* TO PRINT EACH ONE ON EACH LINE */
var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
var by100 = numbers.map(num => num * 100).forEach((num)=>console.log(`Printing each one on a separate line: ${num}`));

/* TO PRINT SPECIFIC NUMBERS */

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
var by100 = numbers.map(num => num * 100)
.filter((num) => num > 35)
.forEach((num)=>console.log(`Printing specific numbers: ${num}`));

/* TO SORT THEM */

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
var by100 = numbers.map(num => num * 100)
.filter((num) => num > 35)
.sort()
.forEach((num)=>console.log(`Sorting them: ${num}`));

/* REVERSE SORT */

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
var by100 = numbers.map(num => num * 100)
.filter((num) => num > 35)
.sort()
.reverse()
.forEach((num)=>console.log(`Sorting them: ${num}`));
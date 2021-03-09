// Create a function that takes a birthYear, and returns the age of someone
// You are given an array with year that 7 people were born. Take this array and create another array containing their ages.
// console.log the birth years array

let birthYear = [1964, 2008, 1999, 2005, 1978, 1985, 1919];
function convertAge(year) {
    return 2021 - year;
}
const ages = birthYear.map(convertAge);
console.log(ages);


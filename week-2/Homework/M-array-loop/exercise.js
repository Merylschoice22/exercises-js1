/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/
const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

/* WHILE LOOP */

function daysStartWithT(wordsArray) {
  let index = 0;
  while (index < wordsArray.length) {
    if (wordsArray[index][0] === 'T') {
      console.log(wordsArray[index]);
    }
    index++;
  }
}

daysStartWithT(daysOfWeek);

/* FOR LOOP */

function printWordsStartwithT(wordsArray) {
  for (let index = 0; index < wordsArray.length; index++) {
    if (wordsArray[index][0] === "T") {
      console.log(wordsArray[index]);
    }
  }
}

printWordsStartwithT(daysOfWeek);


function beginWithT(wordsArray) {
  wordsArray.forEach
    (function(element, index) {
      if (element[0] === 'T') {
      console.log(element);
      }
    }
  );
}

beginWithT(daysOfWeek);

/* NEW JAVASCRIPT */
function beginWithT(wordsArray) {
  wordsArray.forEach (e => e[0] === "T" ? console.log(e) : null);
}

beginWithT(daysOfWeek);